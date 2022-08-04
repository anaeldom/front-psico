import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { LoginSignupService } from 'src/app/services/login-signup.service'; 
import Validation from '../../validation/validation';

@Component({
  selector: 'app-signup-m2',
  templateUrl: './signup-m2.component.html',
  styleUrls: ['./signup-m2.component.css']
})
export class SignupM2Component implements OnInit {

  signup2 : UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _authService: LoginSignupService) { 
    this.signup2 = this.fb.group({
      nombreu:[ '', Validators.required],
      contrau:[ '', Validators.required],
      confirmcontrau:['', Validators.required],
      correou:[ '', Validators.required, Validators.email],
      tipou:[ '', Validators.required]
    },{
      validators:[Validation.match('contrau','confirmcontrau')]
    })
  }

  ngOnInit(): void { }

  signupUsuario(){
    const USUARIO: Usuario = {
        nombreUsuario: this.signup2.get('nombreu')?.value,
        contrasena: this.signup2.get('contrau')?.value,
        correo: this.signup2.get('correou')?.value,
        tipoUsuario: this.signup2.get('tipou')?.value,
        idTipoUsuario: '',
    }

    this._authService.signupm(USUARIO).subscribe(data => {
      this.toastr.success('El usuario fue agregado.','Notificación');
      this.router.navigate(['/']) //Ponemos la ruta que me dirigira a home
    }, error =>{
      console.log(error);
      this.signup2.reset();
    })
  }
}
