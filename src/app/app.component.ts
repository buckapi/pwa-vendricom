import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { virtualRouter } from './services/virtualRouter.service'; // Asegúrate de que la ruta sea correcta
import { GlobalService } from './services/global.service'; // Asegúrate de que la ruta sea correcta
import { ScriptService } from './services/script.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TopNavbarComponent } from './components/ui/top-navbar/top-navbar.component';
import { VerticalNavComponent } from './components/ui/vertical-nav/vertical-nav.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LoginComponent } from './components/login/login.component';
import { UserPaymentsComponent } from './components/user-payments/user-payments.component';
import { UserRequestsComponent } from './components/user-requests/user-requests.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterComponent } from './components/register/register.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { AdminSupportComponent } from './components/admin-support/admin-support.component';
import { UserSupportComponent } from './components/user-support/user-support.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgxSpinnerModule,
    CommonModule, 
    RouterOutlet,
    TopNavbarComponent,
    VerticalNavComponent,
    UserHomeComponent,
    AdminHomeComponent,
    UserPaymentsComponent,
    LoginComponent,
    UserRequestsComponent,
    SettingsComponent,
    RegisterComponent,
    FileManagerComponent,
    AdminSupportComponent,
    UserSupportComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vendricom';
  layoutStyle: string = "default";
  deviceInfo: any = null
  constructor(
    private deviceService: DeviceDetectorService,
    public script: ScriptService,
    public virtualRouter: virtualRouter,
    public global: GlobalService
    ) {


    this.script.load(
      // 'jquery',
      'bundle',
      'feather',
      'bootstrap',
      'simplebar',
      'moment',
      'daterangepicker',
      'daterangepicker-data',      
      'init'
    )
      .then(() => {
        // console.log('Todos los scripts se cargaron correctamente');
      })
      .catch(error => console.log(error));
      this.global.getConfig();
      this.epicFunction();
      this.global.isLogin();

    }
    ngOnInit(): void {
      this.global.getConfig().subscribe(
        (data) => {
          this.global.configs = data;
           // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getClientes().subscribe(
        (data) => {
          this.global.clientes = data.items; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
    }
    toggleLayoutStyle() {
      if (this.layoutStyle === "default") {
        this.layoutStyle = "collapsed";
      } else {
        this.layoutStyle = "default";
      }
    }
    epicFunction() {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      if (isMobile) {
        this.global.device = "Mobile";
        // console.log("Mobile");
      };
      if (isTablet) {
        this.global.device = "Tablet";
      };
      if (isDesktopDevice) {
        this.global.device = "Desktop";
        // console.log("Desktop");
      };
  
    }
}
