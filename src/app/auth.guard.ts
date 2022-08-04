import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginSignupService } from './services/login-signup.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authS: LoginSignupService,private router:Router){}
  
  canActivate(): boolean{
    if(this.authS.loggedIn()){ //Verifica si esta logueado  
      return true; //Esta logueado
    }

    this.router.navigate(['/']); //Ruta a donde lo quiero mandar si no esta logueado
    return false;
  }
  
}
