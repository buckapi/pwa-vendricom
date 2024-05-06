import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup,ReactiveFormsModule , Validators} from '@angular/forms';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { Butler } from '@app/services/butler.service';
import { GlobalService } from '@app/services/global.service';
import { PocketAuthService } from '@app/services/pocket-auth.service';
import { ScriptService } from '@app/services/script.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { NgxSpinnerModule } from 'ngx-spinner';
import PocketBase from 'pocketbase';
import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { UploaderCaptions } from 'ngx-awesome-uploader';
@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    FilePickerModule,
    FormsModule ,
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {
  public captions: UploaderCaptions = {
    dropzone: {
      title: 'Imágenes del producto',
      or: '.',
      browse: 'Cargar',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Borrar',
      uploadError: 'error',
    },
  };
  pb: any; // Variable para la instancia de PocketBase
  status: any = "";
  address: string = ""; // Propiedad para almacenar la dirección del usuario
  phone: string = ""; // Propiedad para almacenar el teléfono del usuario
  ngForm: FormGroup;
  submitted = false;
  public isError = false;
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    private formBuilder: FormBuilder, 
    public AuthRESTService: AuthRESTService,
    public pocketAuthService: PocketAuthService,
    public global: GlobalService,
    public http:HttpClient,
    public _butler: Butler,
    public script: ScriptService,
    public virtualRouter: virtualRouter,
  ) {
    this.ngForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.pb = new PocketBase('https://db.buckapi.com:8090'); // Inicializar la instancia de PocketBase
    this.status = this.getStatusFromLocalStorage();
    this.check();
  }

  ngOnInit(): void {
    // this.check();
  }

  getStatusFromLocalStorage(): any {
    // Recuperar el valor de 'status' del localStorage
    let status = localStorage.getItem('status');
    console.log("status: " + status)
    return status;
  }

  check() {
    if (this.pocketAuthService.isLoggedIn()) {
      this.virtualRouter.setRoute('home')
    } else {
      this.virtualRouter.setRoute('login')
      // El usuario no está logueado, puedes redirigirlo a la página de inicio de sesión o realizar otras acciones
    }
  }
  async updateUserData() {
    this.submitted = true;
    // if (this.ngForm.invalid) {
    //   return;
    // }
  
    // Obtener los datos del formulario
    const { address, phone } = this.ngForm.value;
  
    // Obtener los datos del usuario almacenados en localStorage
    const clientCardString = localStorage.getItem('clientCard');
  
    // Verificar si clientCardString no es nulo
    if (!clientCardString) {
      console.error('No se encontraron datos del cliente en localStorage.');
      return;
    }
  
    // Parsear los datos del usuario como JSON
    const clientCard = JSON.parse(clientCardString);
  
    // Construir el objeto data con los campos que deseas actualizar
    const data = {
      "address": this.ngForm.value.address, // Utiliza el valor de address del formulario
      "phone": this.ngForm.value.phone, // Utiliza el valor de phone del formulario
      "status": "active" // Actualizar el estado a "active"
      // Otros campos que desees actualizar...
    };
    console.log("DATA: "+JSON.stringify(data))
  
    try {
      // Actualizar el registro del usuario en la colección 'vendricomClients'
      const record = await this.pb.collection('vendricomClients').update(clientCard.id, data);
      console.log('Registro actualizado exitosamente:', record);
  
      // Actualizar el valor de "status" en localStorage a "active"
      localStorage.setItem('status', 'active');
      console.log('El valor de "status" en localStorage se ha actualizado a "active".');
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
    }
  }
  

}
