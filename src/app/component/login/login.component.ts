import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../../services/login-signup.service';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    correo:'',
    contrasena:''
  };

  loginForm : UntypedFormGroup;

  constructor(private authService: LoginSignupService,
    private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) { 
      this.loginForm = this.fb.group({
        correo:[ '', Validators.required],
        contra:[ '', Validators.required],
      })
    }

  ngOnInit(): void {
  }

  camposVacios(){
    if(this.loginForm.get('correo')?.value == "")
      return true;
    if(this.loginForm.get('contra')?.value == "")
      return true;
    return false;
  }
  login(){
    if(!this.camposVacios()){ // Verificamos si no esta vacio para no mandar un error
      this.authService.login(this.user).subscribe(res=>{
        console.log(res);
        if(!(res.message == 'Not Found User' || res.message == 'No Coincide contrasena')){
          localStorage.setItem('token',res.token);
          localStorage.setItem('rol',res.rol);
          localStorage.setItem('id',res.id);
          if(res.rol == "paciente")
            this.router.navigate(['/homeu']); //La ruta donde ira el paciente
          if(res.rol == "medico")
            this.router.navigate(['/homem']);
          if(res.rol == "administrador")
            this.router.navigate(['/']);  
        }else{
          this.toastr.error('Algo salio mal.','Error');
        }
      },error =>{
        console.log(error);
        this.loginForm.reset();
      })
    }else{
      this.toastr.success('Faltan campos por llenar.','Mensaje');
    }
    
  }

}
