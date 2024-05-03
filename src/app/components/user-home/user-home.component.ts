import { Component } from '@angular/core';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { Butler } from '@app/services/butler.service';
import { GlobalService } from '@app/services/global.service';
import { PocketAuthService } from '@app/services/pocket-auth.service';
import { ScriptService } from '@app/services/script.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
constructor(
    public AuthRESTService:AuthRESTService,
    public pocketAuthService:PocketAuthService,
    public global:GlobalService,
    public _butler:Butler,
    public script:ScriptService,
    public virtualRouter:virtualRouter,

){

  if(this.AuthRESTService.getStatus()==='pending'){
    this.global.status='pending'
  }
  if(this.AuthRESTService.getStatus()==='active'){
    this.global.status='active'
  }
}
}
