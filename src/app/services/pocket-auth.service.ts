import PocketBase from 'pocketbase';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { UserInterface } from '@app/interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class PocketAuthService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('https://db.buckapi.com:8090');
  }


  
  registerUser(email: string, password: string, type:string, name:string): Observable<any> {
    const data = {
        "email": email,
        "password": password,
        "passwordConfirm": password,
        "type": type,
        "username": name,
        "name":name
    };
    return from(this.pb.collection('users').create(data));
}

  loginUser(email: string, password: string): Observable<any> {
    return from(this.pb.collection('users').authWithPassword(email, password));
  }

  logoutUser(): Observable<any> {
    // Limpiar la autenticación almacenada
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('dist');
    localStorage.removeItem('userId');
    localStorage.removeItem('type');
    localStorage.removeItem('clientCard');
    localStorage.removeItem('clientFicha');
    this.pb.authStore.clear();
    return new Observable<any>(observer => {
      observer.next(); // Indicar que la operación de cierre de sesión ha completado
      observer.complete();
    });
  }
  setToken(token:any): void{
    localStorage.setItem("accessToken",token);
  }
  setUser(user:UserInterface):void{
    let user_string = JSON.stringify(user);
    let type = JSON.stringify(user.type);
    localStorage.setItem("currentUser",user_string);
  localStorage.setItem("type",type);
  }
}
