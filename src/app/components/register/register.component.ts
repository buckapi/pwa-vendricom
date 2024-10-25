import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { PocketAuthService } from '@app/services/pocket-auth.service';
import { CommonModule } from '@angular/common';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxSpinnerModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  ngFormRegister: FormGroup = new FormGroup({});
  submitted = false;
  isError = false;
  errorMessage = '';
  constructor(
    private spinner: NgxSpinnerService,
    private pocketAuthService: PocketAuthService,
    private formBuilder: FormBuilder,
    public virtualrouter: virtualRouter
  ) {}

  ngOnInit(): void {
    this.ngFormRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', Validators.required],
      name: ['', Validators.required],
    });
  }
  get f() {
    return this.ngFormRegister.controls;
  }
  onRegister() {
    this.submitted = true;

    // // Stop here if form is invalid
    // if (this.ngFormRegister.invalid) {
    //   return;
    // }

    // Verificar si las contraseñas coinciden
    if (this.f['password'].value !== this.f['passwordConfirm'].value) {
      this.errorMessage = 'Las contraseñas no coinciden';
      this.isError = true;
      return;
    }

    this.spinner.show();
    let email = this.ngFormRegister.value.email;
    let password = this.ngFormRegister.value.password;
    let type = 'cliente'; // Esto debería ser 'employee' si es un empleado
    let name = this.ngFormRegister.value.name;

    this.pocketAuthService.registerUser(email, password, type,name).subscribe(
      (data) => {
        // Registro exitoso, puedes redirigir al usuario a una página de inicio de sesión o mostrar un mensaje de éxito
        this.spinner.hide();
        console.log('Registro exitoso', data);
        // Setear el usuario y el token
        this.pocketAuthService.setUser(data);
        this.pocketAuthService.setToken(data.token);
        // Establecer que el usuario ha iniciado sesión
        localStorage.setItem('isLoggedin', 'true');
        // Establecer el tipo de usuario
        localStorage.setItem('type', type);
        // Redirigir al usuario según el tipo de usuario registrado
        switch (type) {
          case 'admin':
            this.virtualrouter.routerActive = 'admin-home';
            break;
          case 'cliente':
            this.virtualrouter.routerActive = 'user-home';
            break;
          default:
            console.error('Tipo de usuario no reconocido');
        }
        this.virtualrouter.setRoute('home')
      },
      (error) => {
        this.spinner.hide();
        this.errorMessage = 'Error al registrar usuario';
        this.isError = true;
      }
    );
  }
}
