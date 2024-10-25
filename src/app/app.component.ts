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
import { FormsModule } from '@angular/forms';
import { NormativaComponent } from './components/normativa/normativa.component';
import { BoletinesComponent  } from './components/boletines/boletines.component';
import { JurisprudenciaComponent } from './components/jurisprudencia/jurisprudencia.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PublicityComponent } from './components/publicity/publicity.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
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
    UserSupportComponent,
    NormativaComponent,
    BoletinesComponent,
    JurisprudenciaComponent,
    ModelosComponent,
    CursosComponent,
    PublicityComponent    
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
      this.global.getCategories().subscribe(
        (data) => {
          this.global.categories = data.items; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );

      this.global.getTemas().subscribe(
        (data) => {
          this.global.temas = data.items; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getRepositorios().subscribe(
        (data) => {
          this.global.repositorios = data.items; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );

      this.global.getDocuments().subscribe(
        (data) => {
          this.global.documents = data.items; // Asigna los registros obtenidos a la variable 'registros'
          this.global.documents = data.items.reverse(); // Invierte el orden de los registros obtenidos y los asigna a la variable 'registros'
          this.global.filteredDocuments=this.global.documents;
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );

      this.global.getNormativas().subscribe(
        (data) => {
          this.global.normativas = data.items; // Asigna los registros obtenidos a la variable 'registros'
          this.global.normativas = data.items.reverse(); // Invierte el orden de los registros obtenidos y los asigna a la variable 'registros'
          this.global.filteredNormativas=this.global.normativas;
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getBoletines().subscribe(
        (data) => {
          this.global.boletines = data.items; // Asigna los registros obtenidos a la variable 'registros'
          this.global.boletines = data.items.reverse(); // Invierte el orden de los registros obtenidos y los asigna a la variable 'registros'
          this.global.filteredBoletines=this.global.boletines;
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getJurisprudencias().subscribe(
        (data) => {
          this.global.jurisprudencias = data.items; // Asigna los registros obtenidos a la variable 'registros'
          this.global.jurisprudencias = data.items.reverse(); // Invierte el orden de los registros obtenidos y los asigna a la variable 'registros'
          this.global.filteredJurisprudencias=this.global.jurisprudencias;
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getModelos().subscribe(
        (data) => {
          this.global.modelos = data.items; // Asigna los registros obtenidos a la variable 'registros'
          this.global.modelos = data.items.reverse(); // Invierte el orden de los registros obtenidos y los asigna a la variable 'registros'
          this.global.filteredModelos=this.global.modelos;
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getPublicidades().subscribe(
        (data) => {
          this.global.publicidades = data.items; // Asigna los registros obtenidos a la variable 'registros'
          this.global.publicidades = data.items.reverse(); // Invierte el orden de los registros obtenidos y los asigna a la variable 'registros'
          this.global.filteredPublicidad=this.global.publicidades;
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
    }
    setSelectedTema(tema:any){
      this.global.selectedTema=tema;
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
