import { Component } from '@angular/core';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { GlobalService } from '@app/services/global.service';
import { PocketAuthService } from '@app/services/pocket-auth.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
constructor(
  public virtualRouter: virtualRouter,
  public global: GlobalService,
  public auth:AuthRESTService ,
  public pocketAuthService: PocketAuthService
){}
}
