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
import { Butler } from './butler.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  private apiUrl = 'http://localhost:8090/api/collections/images/records';

  isInfoActive=false;
  private apirestUrl = 'https://db.buckapi.com:8090/api/';
  clientes: any[] = [];
  documents: any[] = [];
  configs: any[] = [];
status:string="";
  info: any[] = [];
  categories: any[] = [];
  temas: any[] = [];
  currentPage: number = 1;
  clients: any;
  device: string = '';
  currentUser: any;
  ordersSize = 0;
  selectedFile: File | null = null;
  modaltitle="Modal";
  docummentSelected={};
  newCategory:any;
  newTema:any;
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
    public _butler:Butler,
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
  getCategories(): Observable<any> {
    return this.http.get<any>(this.apirestUrl + 'collections/vendricomCategories/records');
  }
  getTemas(): Observable<any> {
    return this.http.get<any>(this.apirestUrl + 'collections/vendricomTemas/records');
  }

  getDocuments(): Observable<any> {
    return this.http.get<any>(this.apirestUrl + 'collections/vendricomDocuments/records');
  }
 uploadDocument(){
  
 }
  activateInfo() {
    this.isInfoActive = true;
  }
  iactivateInfo() {
    this.isInfoActive = false;
  }

  saveCategory() {
    let category = { name: this.newCategory };

    this.dataApiService.saveCategory(category).subscribe(
      (response) => {
        console.log("categoria guardada correctamente:", JSON.stringify(response));
        // Agregar la categoria de la respuesta al array de categorias
        this.categories.push(response);
        this.categories = [...this.categories];

        // console.log(JSON.stringify(this.yeoman.categorys))
        // Limpiar los valores para futuros usos
        this.newCategory = "";
        // this.activeModal.close();
      },
      (error) => {
        console.error("Error al guardar la categoria:", error);
      }
    );
  }
  saveTema() {
    let tema = { name: this.newTema };

    this.dataApiService.saveTema(tema).subscribe(
      (response) => {
        console.log("Tema guardado correctamente:", JSON.stringify(response));
        // Agregar la marca de la respuesta al array de marcas
        this.temas.push(response);
        this.temas = [...this.temas];

        // console.log(JSON.stringify(this.yeoman.brands))
        // Limpiar los valores para futuros usos
        this.newTema = "";
        // this.activeModal.close();
      },
      (error) => {
        console.error("Error al guardar el tema:", error);
      }
    );
  }

  getClass(){
    return {
      'fmapp-wrap': !this.isInfoActive,
      'fmapp-wrap fmapp-info-active': this.isInfoActive
    };
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
    console.log(JSON.stringify(this._butler.uploaderImages))
    console.log( "esta es la imagen:"+this.selectedFile);
    if (!this.selectedFile) {
      console.error('No se ha seleccionado ningún archivo.');
      return;
    }

    this.imageUploadService.uploadImage(this.selectedFile).subscribe(
      response => {
        const imageUrl = response.id;
        // console.log('Imagen subida correctamente:', response);
        let imageComplete =
        "https://db.vendricom.com:8091/api/files/" +
        response.collectionId +
        "/" +
        imageUrl +
        "/" +
        response.file;
      // console.log("imageURL: " + imageComplete);
      this._butler.uploaderImages.push(imageComplete);
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
      this.onUpload();
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
