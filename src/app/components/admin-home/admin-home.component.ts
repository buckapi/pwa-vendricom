import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { ImageUploadService } from '@app/services/image-upload.service';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
constructor(
  
  public global: GlobalService,
  public imageUpload:ImageUploadService
){}
}
