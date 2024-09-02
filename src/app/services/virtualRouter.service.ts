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
   routerActive:string= "home ";

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
          case 'file-manager':
            switch (userType) {
              case 'admin':
                this.routerActive = 'file-manager';
                break;
              case 'cliente':
                this.routerActive = 'file-manager';
                break;
              default:
                console.error('Tipo de usuario no reconocido');
            }
            break;
          case 'normativas':
            switch (userType) {
              case 'admin':
                this.routerActive = 'normativas';
                break;
              case 'cliente':
                this.routerActive = 'normativas';
                break;
              default:
                console.error('Tipo de usuario no reconocido');
            }
            break;
            case 'boletines':
              switch (userType) {
                case 'admin':
                  this.routerActive = 'boletines';
                  break;
                case 'cliente':
                  this.routerActive = 'boletines';
                  break;
                default:
                  console.error('Tipo de usuario no reconocido');
              }
              break;
              case 'publicity':
                switch (userType) {
                  case 'admin':
                    this.routerActive = 'publicity';
                    break;
                  case 'cliente':
                    this.routerActive = 'publicity';
                    break;
                  default:
                    console.error('Tipo de usuario no reconocido');
                }
                break;
              case 'jurisprudencia':
              switch (userType) {
                case 'admin':
                  this.routerActive = 'jurisprudencia';
                  break;
                case 'cliente':
                  this.routerActive = 'jurisprudencia';
                  break;
                default:
                  console.error('Tipo de usuario no reconocido');
              }
              break;
              case 'modelos':
                switch (userType) {
                  case 'admin':
                    this.routerActive = 'modelos';
                    break;
                  case 'cliente':
                    this.routerActive = 'modelos';
                    break;
                  default:
                    console.error('Tipo de usuario no reconocido');
                }
                break;
                case 'cursos':
                switch (userType) {
                  case 'admin':
                    this.routerActive = 'cursos';
                    break;
                  case 'cliente':
                    this.routerActive = 'cursos';
                    break;
                  default:
                    console.error('Tipo de usuario no reconocido');
                }
                break;
        case 'settings':
          this.routerActive = 'settings';
          break;
        case 'support':
          switch (userType) {
            case 'admin':
              this.routerActive = 'admin-support';
              break;
            case 'cliente':
              this.routerActive = 'user-support';
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
  

