import { Component, OnInit } from '@angular/core';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { Butler } from '@app/services/butler.service';
import { GlobalService } from '@app/services/global.service';
import { ScriptService } from '@app/services/script.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PocketAuthService } from '@app/services/pocket-auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgxSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngFormLogin: FormGroup;
  submitted = false;
  returnUrl: any;
  public isError = false;
  public isLogged =false;
  message:any="Error en datos de acceso"; 
  constructor(
    private spinner: NgxSpinnerService,
    public AuthRESTService:AuthRESTService,
    public pocketAuthService:PocketAuthService,

    public global:GlobalService,
    public _butler:Butler,
    public script:ScriptService,
    public virtualRouter:virtualRouter,
    private formBuilder: FormBuilder,
  ) { 
    if(
      this.AuthRESTService.getCurrentUser()
    ){
      // this.virtualRouter.routerActive="home";
    }
    this.ngFormLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
    this.ngFormLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ngFormLogin.controls;
  }
  onIsError(): void {
    // this.ngxService.stop("loader-02");
  this.isError = true;
  // this.ngxService.stop("loader-02");
  setTimeout(() => {
    this.isError = false;
  }, 4000);
}
  onLoggedin(e: Event) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin')) {
      // this.router.navigate(['']);
    }
  }
  onLogin(){
    this.submitted = true;
    if (this.ngFormLogin.invalid) {
      return;
    } 
    //  this.ngxService.start("loader-02");
    // this.spinner.show();
    return this.pocketAuthService.loginUser(
      this.ngFormLogin.value.email, 
      this.ngFormLogin.value.password
    )
    .subscribe( 
      data => {
        // console.log("hey"+JSON.stringify(data.record.type))
        this.pocketAuthService.setUser(data.record);
        const token = data.token;
        const { username, email, id, type } = data.record;
        this.global.currentUser={ username, email, id, type };
        console.log(JSON.stringify(this.global.currentUser))
        // this.yeoman.user=data;
        this.pocketAuthService.setToken(token);
     
        let typeAct=data.record.type;
        this.isError = false;
        switch(typeAct) {
          case 'admin':
            this.virtualRouter.routerActive = "admin-home";
            break;
          case 'cliente':
            this.virtualRouter.routerActive = "user-home";
            break;
          default:
            this.virtualRouter.routerActive = "user-home";

            // Código a ejecutar si typeAct no coincide con ninguno de los casos anteriores
            break;
        }
        
        // this.spinner.hide();
        // this.ngxService.stop("loader-02");
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('type', typeAct);
        this.global.ClientFicha();
        // this.router.navigate(['']);      
      },
       error => this.onIsError()
    ); 
  }


}
