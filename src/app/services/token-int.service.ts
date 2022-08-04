import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginSignupService } from './login-signup.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIntService implements HttpInterceptor{

  constructor(private authS:LoginSignupService) { }

  intercept(req:any,next:any) {
    const tokenI = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.authS.getToken()}`
      }
    })
    return next.handle(tokenI);
  }
  
}
