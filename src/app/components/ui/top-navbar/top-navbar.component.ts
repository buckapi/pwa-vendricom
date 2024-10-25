import { Component } from '@angular/core';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { GlobalService } from '@app/services/global.service';
import { PocketAuthService } from '@app/services/pocket-auth.service';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
  constructor(
    public global:GlobalService,
    public authRest:AuthRESTService
  ){}

}
