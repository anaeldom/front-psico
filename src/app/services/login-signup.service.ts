import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  url = 'http://localhost:4000/api/rol/';
  constructor(private http: HttpClient,private router: Router) { }

  login(usuario: any){ //Aqui mandamos un JSON para que lo lea y pueda hacer el LOGIN.
    return this.http.post<any>(this.url + "login", usuario);
  }
  
  signup(usuario: any){ //Después aqui simplemente registramos nuevos usuarios(pacientes)
    return this.http.post(this.url + "signup", usuario);
  }

  signupm(usuario:any){ //Después aqui simplemente registramos nuevos usuarios(médico)
    return this.http.post(this.url + "signupm", usuario);
  }

  loggedIn(){
    return !!localStorage.getItem('token'); //Sirve para saber si estoy realmente logueado o no. De acuerdo con el token si lo obtuve o no.
  }

  getToken(){ //Verificamos si hay token para acceder al servicio.
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token'); //Eliminamos los token's para que no acceda al contenido normal.
    localStorage.removeItem('rol');
    localStorage.removeItem('id');
    localStorage.removeItem('nombreMedico');
    localStorage.removeItem('nombrePaciente');
    this.router.navigate(['/']); //Lo mandamos a la pantalla que querramos.
  }

}
