import { Injectable } from '@angular/core';
import { AuthRESTService } from './auth-rest.service';
@Injectable({
  providedIn: 'root'
})
export class virtualRouter {
  constructor(
    public authRESTService:AuthRESTService
  ){

  }
   routerActive:string= "register";

    setRoute(route: string) {
      const userType = this.authRESTService.getType();
  
      switch (route) {
        case 'home':
          switch (userType) {
            case 'admin':
              this.routerActive = 'admin-home';
              break;
            case 'cliente':
              this.routerActive = 'user-home';
              break;
            default:
              console.error('Tipo de usuario no reconocido');
          }
          break;
        case 'payments':
          switch (userType) {
            case 'admin':
              this.routerActive = 'admin-payments';
              break;
            case 'cliente':
              this.routerActive = 'user-payments';
              break;
            default:
              console.error('Tipo de usuario no reconocido');
          }
          break;
        case 'settings':
          this.routerActive = 'settings';
          break;
        case 'requests':
          switch (userType) {
            case 'admin':
              this.routerActive = 'admin-requests';
              break;
            case 'cliente':
              this.routerActive = 'user-requests';
              break;
            default:
              console.error('Tipo de usuario no reconocido');
          }
          break;
        case 'login': // Agrega la ruta para login
          this.routerActive = 'login';
          break;
        case 'register': // Agrega la ruta para register
          this.routerActive = 'register';
          break;
        default:
          console.error('Ruta no reconocida');
      }
    }
  
  }
  

