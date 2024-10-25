import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { PocketAuthService } from '@app/services/pocket-auth.service';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import PocketBase from 'pocketbase';
import { CommonModule } from '@angular/common';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { Butler } from '@app/services/butler.service';
import { ScriptService } from '@app/services/script.service';
import { FooterComponent } from '../ui/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule, NgxSpinnerModule,FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngFormLogin: FormGroup;
  submitted = false;
  public isError = false;
  // color: string | null = null;
  colorActual: string | null = null;
// color= "#87CEEB";
  returnUrl: any;
  public isLogged =false;
  message:any="Error en datos de acceso"; 
  mostrarColorBoxes = false;
  esquemasDeColores = [
    { nombre: 'Esquema 1', colores: ['#00296b', '#0058c5', '#000000', '#FFFFFF'] },
    { nombre: 'Esquema 2', colores: ['#00296b', '#0058c5', '#000000', '#CCCCCC'] },
    { nombre: 'Esquema 3', colores: ['#00296b', '#0058c5', '#000000', '#B3D1FF'] },
    { nombre: 'Esquema 4', colores: ['#00296b', '#0058c5', '#000000', '#7ED4E6'] },
    { nombre: 'Esquema 5', colores: ['#00296b', '#0058c5', '#000000', '#87CEEB'] }
  ];
  constructor(
    private spinner: NgxSpinnerService,
    public AuthRESTService:AuthRESTService,
    public pocketAuthService:PocketAuthService,
    public global:GlobalService,
    public _butler:Butler,
    public script:ScriptService,
    public virtualRouter:virtualRouter,
    private formBuilder: FormBuilder,
  ) { 

    if(
      this.AuthRESTService.getCurrentUser()
    ){
      // this.virtualRouter.routerActive="home";
    }
    this.ngFormLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }
change(){
  this.mostrarColorBoxes=!this.mostrarColorBoxes;
}
  ngOnInit(): void {
    this.ngFormLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ngFormLogin.controls;
  }

  setColor(esquema: { nombre: string, colores: string[] }) {
    this.colorActual = esquema.colores[3];
  }

  clearColor() {
    this.colorActual = null;
  }
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
 
  onLogin(): void {
    this.submitted = true;
    if (this.ngFormLogin.invalid) {
      return;
    }

    // Iniciar sesión utilizando el servicio PocketAuthService
    this.pocketAuthService.loginUser(
      this.ngFormLogin.value.email,
      this.ngFormLogin.value.password
    ).subscribe(
      data => {
        // Manejar la respuesta del servicio de autenticación
        this.pocketAuthService.setUser(data.record);
        const { username, email, id, type } = data.record;
        this.global.currentUser = { username, email, id, type };

        // Establecer el tipo de usuario en localStorage
        localStorage.setItem('type', type);

        // Redirigir al usuario según el tipo de usuario registrado
        switch (type) {
          case 'admin':
            this.virtualRouter.routerActive = "admin-home";
            break;
          case 'cliente':
            // Si el tipo de usuario es 'cliente', hacer la solicitud al API
            this.fetchClientData(id); // Pasar el ID del cliente al método
            break;
          default:
            this.virtualRouter.routerActive = "user-home";
            break;
        }
        // Marcar al usuario como logueado en localStorage
        localStorage.setItem('isLoggedin', 'true');
        // Actualizar los datos del cliente en la aplicación
        this.global.ClientFicha();
      },
      error => this.onIsError()
    );
  }

  fetchClientData(userId: string): void {
    // Crear una instancia de PocketBase
    const pb = new PocketBase('https://db.buckapi.com:8090');
    
    // Hacer la solicitud para obtener los datos del cliente
    pb.collection('vendricomClients').getList(1, 1, {
      userId: userId,
    }).then((resultList:any) => {
      // Verificar si hay resultados
      if (resultList.items && resultList.items.length > 0) {
        const record = resultList.items[0]; // Tomar el primer registro
        console.log('Datos del cliente:', JSON.stringify(record));
        localStorage.setItem('status', record.status);
        localStorage.setItem('clientCard', JSON.stringify(record));
        // Redirigir al usuario al home del cliente
        this.virtualRouter.routerActive = "user-home";
      } else {
        console.error('No se encontraron registros para el usuario:', userId);
        // Redirigir al usuario al home
        this.virtualRouter.routerActive = "user-home";
      }
    }).catch((error) => {
      // Manejar errores de la solicitud al API aquí
      console.error('Error al obtener datos del cliente:', error);
      // Redirigir al usuario al home
      this.virtualRouter.routerActive = "user-home";
    });
  }
  
  
}
