import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { ImageUploadService } from '@app/services/image-upload.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  constructor(
  
    public global: GlobalService,
    public imageUpload:ImageUploadService
  ){}
}
