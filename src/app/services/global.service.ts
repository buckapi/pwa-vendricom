import { Injectable } from '@angular/core';
import { Yeoman } from './yeoman.service';
import { DataApiService } from './data-api-service';
import { virtualRouter } from './virtualRouter.service';
import { AuthRESTService } from './auth-rest.service';
import { Catalogo } from './catalogo.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Apollo, gql } from 'apollo-angular';
import { PocketAuthService } from '@services/pocket-auth.service';
import { ImageUploadService } from '@services/image-upload.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  private apiUrl = 'http://localhost:8090/api/collections/images/records';

  
  private apirestUrl = 'https://db.buckapi.com:8090/api/';
  clientes: any[] = [];
  configs: any[] = [];
status:string="";
  info: any[] = [];
  categories: any[] = [];
  currentPage: number = 1;
  clients: any;
  device: string = '';
  currentUser: any;
  ordersSize = 0;
  selectedFile: File | null = null;

 
  clientDetail: { clrepresentante: any }[] = [];
  constructor(
    private apollo: Apollo,
    public catalogo: Catalogo,
    public pocketAuthService: PocketAuthService,
    public authRESTService: AuthRESTService,
    public http: HttpClient,
    public virtuallRouter: virtualRouter,
    public yeoman: Yeoman,
    public dataApiService: DataApiService,
    private imageUploadService: ImageUploadService
  ) {}
  

  //################## INICIO FUNCIONES NUEVAS ########################################################################
 
  getConfig(): Observable<any | boolean> {
    return this.http.get<any>(this.apirestUrl + 'configs').pipe(
      map(response => {
        return response.length > 0; // Devuelve true si hay al menos un atributo en la respuesta
      })
    );
  }
  getClientes(): Observable<any> {
    return this.http.get<any>(this.apirestUrl + 'collections/vendricomClients/records');
  }
 


  isLogin() {
    // Obtener el valor de isLoggedin del localStorage
    const isLoggedIn = localStorage.getItem('isLoggedin');
    const type = localStorage.getItem('type');
    const settings = localStorage.getItem('settings');
  
    this.getConfig().subscribe(config => {
      if (isLoggedIn === null || isLoggedIn === undefined) {
        // Si no existe, redirigir a la página de inicio de sesión
        this.virtuallRouter.routerActive = "login";
      } else {
        // Si existe, verificar el valor de type
        if (type === 'admin') {
          // Si es admin, redirigir a la página de inicio de administrador
          this.virtuallRouter.routerActive = "admin-home";
        } else if (type === 'cliente') {
          // Si es empleado, redirigir a la página de inicio de usuario
          this.virtuallRouter.routerActive = "user-home";
        } else {
          // Si es un valor diferente, también puedes redirigir a una página predeterminada o manejarlo de otra manera según sea necesario
          console.error("Tipo de usuario desconocido");
        }
      }
  
      if (!config) {
        this.virtuallRouter.routerActive = "settings";
      }
    });
    // No hacer nada si isLoggedin es true (ya logueado)
  }
  //################## FIN FUNCIONES NUEVAS ########################################################################
  goToPage(page: number): void {
    this.currentPage = page;
  }

 

  
  onUpload() {
    console.log( "esta es la imagen:"+this.selectedFile);
    if (!this.selectedFile) {
      console.error('No se ha seleccionado ningún archivo.');
      return;
    }

    this.imageUploadService.uploadImage(this.selectedFile).subscribe(
      response => {
        console.log('Imagen subida correctamente:', response);
        // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito
      },
      error => {
        console.error('Error al subir imagen:', error);
        // Aquí puedes manejar cualquier error que ocurra durante la carga de la imagen
      }
    );
    }
    onFileChanged(event:Event) {
      this.selectedFile = (event.target as HTMLInputElement).files?.[0] || null;
    }
  
    

  ClientFicha(): any {
    let client_string = localStorage.getItem('clientFicha');
    if (client_string) {
      let client: any = JSON.parse(client_string!);
      return client;
    } else {
      return { cldisponible: 0 };
    }
  }
  type(): string | null {
    const typeString = localStorage.getItem('type');
    if (typeString) {
      try {
        return typeString;
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
        return null;
      }
    }
    return null;
  }
  getClientDetail(url: any, cliCodigo: any) {
    this.dataApiService.getCliente(url, cliCodigo).subscribe((res: any) => {
      this.clientDetail = res[0];
      localStorage.setItem('clientFicha', JSON.stringify(res));
      this.obtenerFichaCliente();
    });
  }
  obtenerFichaCliente() {
    let clientFichaString = localStorage.getItem('clientFicha');
    if (clientFichaString !== null) {
      let clienteFicha = JSON.parse(clientFichaString);
      this.yeoman.clientFicha = clienteFicha;
    }
  }

  setClient(i: any) {
    this.yeoman.origin.restUrl = this.clients[i].RestUrl;
    this.dataApiService.getAllProducts().subscribe((response) => {
      this.yeoman.products = response;
      this.yeoman.products.reverse();
      this.yeoman.config.clientSelected = i;
    });
  }

  signOut() {
    this.pocketAuthService.logoutUser();
    this.yeoman.reset();
    this.virtuallRouter.routerActive = 'login';
  }
}
