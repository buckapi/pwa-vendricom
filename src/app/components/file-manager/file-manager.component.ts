import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { Butler } from '@app/services/butler.service';
import { GlobalService } from '@app/services/global.service';
import { PocketAuthService } from '@app/services/pocket-auth.service';
import { ScriptService } from '@app/services/script.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { ImageUploadService } from '@app/services/image-upload.service';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [
    FilePickerModule,
    FormsModule

  ],
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.css'
})
export class FileManagerComponent {
  formData: any = {};
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
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  
  constructor(
    public imageUpload:ImageUploadService,
    private formBuilder: FormBuilder, 
    public AuthRESTService: AuthRESTService,
    public pocketAuthService: PocketAuthService,
    public global: GlobalService,
    public http:HttpClient,
    public _butler: Butler,
    public script: ScriptService,
    public virtualRouter: virtualRouter,
  ){}
  submitForm() {
    // Aquí puedes manejar los datos del formulario, por ejemplo, enviarlos a un servicio o imprimirlos en la consola.
    console.log(this.formData);
    // Limpia el formulario después de enviarlo.
    this.formData = {};
  }
}
