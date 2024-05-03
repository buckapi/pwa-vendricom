import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-vertical-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-nav.component.html',
  styleUrl: './vertical-nav.component.css'
})
export class VerticalNavComponent {
 constructor(
  public global:GlobalService,
  public auth:AuthRESTService,
  public virtualRouter:virtualRouter
 ){

 }
}
