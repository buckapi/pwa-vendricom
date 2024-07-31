import { HttpClient } from '@angular/common/http';
import { Component,OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

import { FormBuilder, FormsModule } from '@angular/forms';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { Butler } from '@app/services/butler.service';
import { GlobalService } from '@app/services/global.service';
import { PocketAuthService } from '@app/services/pocket-auth.service';
import { ScriptService } from '@app/services/script.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { DemoFilePickerAdapter } from '@app/file-picker.adapter';
import { ImageUploadService } from '@app/services/image-upload.service';
import {
  IDropdownSettings,
  NgMultiSelectDropDownModule,
} from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { DataApiService } from '@app/services/data-api-service';
interface NormativaInterface {
  categories: any[];
  temas: any[];
  files: string[];
  issue: string;
  image: string;
  serial: string;
  receiver: string;
  subject: string;
  entity: string;
  status: string;
}
@Component({
  selector: 'app-normativa',
  standalone: true,
  imports: [
    CommonModule,
    FilePickerModule,
    FormsModule,
    NgMultiSelectDropDownModule,
  ],
  templateUrl: './normativa.component.html',
  styleUrl: './normativa.component.css'
})
export class NormativaComponent {
  @ViewChild('infoDiv', { static: true }) infoDiv!: ElementRef;
  years: number[] = [];

  data = {
    categories: [] as any[],
    temas: [] as any[],
    files: [] as string[],
    issue: '',
    image: '',
    serial: '',
    receiver: '',
    subject: '',
    entity: '',
    status: '',
  };
  
docummentSelected: NormativaInterface = {
  categories: [],
  temas: [],
  files: [],
  issue: '',
  image: '',
  serial: '',
  receiver: '',
  subject: '',
  entity: '',
  status: ''
};
  dropdownSettings: IDropdownSettings = {};
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
  adapter = new DemoFilePickerAdapter(this.http, this._butler, this.global);

  constructor(
    public imageUpload: ImageUploadService,
    private formBuilder: FormBuilder,
    public AuthRESTService: AuthRESTService,
    public pocketAuthService: PocketAuthService,
    public global: GlobalService,
    public http: HttpClient,
    public _butler: Butler,
    public script: ScriptService,
    public virtualRouter: virtualRouter,
    private renderer: Renderer2,
    public dataApi: DataApiService
  ) {
    
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Seleccionar todo',
      unSelectAllText: 'Deseleccionar todo',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  close() {
    // Aquí va tu lógica para la acción
    this.renderer.removeClass(this.infoDiv.nativeElement, 'fmapp-info-active');
    // Luego de la acción, agregar la clase
    this.renderer.addClass(this.infoDiv.nativeElement, 'fmapp-wrap');
  }
  open(option:string){
    this.global.modaltitle=option;
  }
  setPreview(selected:any){
    
    this.docummentSelected=selected;
  }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 40; i++) {
      this.years.push(currentYear - i);
    }
  }
  submitForm() {
    // Aquí puedes manejar los datos del formulario, por ejemplo, enviarlos a un servicio o imprimirlos en la consola.
    console.log(this.formData);
    // this.dataApi.saveDocument(this.formData).subscribe(){};
    this.data.entity = this.formData.entidadRegulatoria;
    this.data.subject = this.formData.asunto;
    this.data.receiver = this.formData.nombreReceptor;
    this.data.issue = this.formData.fechaEmision;
    this.data.serial = this.formData.serial;
    this.data.files = this._butler.uploaderImages;
    this.dataApi.saveNormativa(this.data).subscribe(
      (response) => {
        this.global.normativas.push(this.data);
        this.global.normativas=[...this.global.normativas];
        this.global.filteredNormativas=this.global.normativas;
        this.global.filteredNormativas=[...this.global.filteredNormativas];
        this.data = {
          categories: [],
          temas: [],
          files: [],
          issue: '',
          image: '',
          serial: '',
          receiver: '',
          subject: '',
          entity: '',
          status: ''
        };  
        // this.temas = [...this.temas];
        this._butler.uploaderImages=[];
        console.log('documento cargado con éxito:', response);
        // Agregar la marca de la respuesta al array de marcas, si es necesario

        // Limpiar los valores para futuros usos
        // this.global.newBrand = '';
        // this.yeoman.brands.push(response);
        // this.yeoman.brands = [...this.yeoman.brands];
        // Cerrar el modal
        // this.activeModal.close();
      },
      (error) => {
        console.error('Error al guardar la marca:', error);
      }
    );
    // Limpia el formulario después de enviarlo.
    this.formData = {};
  }
}
