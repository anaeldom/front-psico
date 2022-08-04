import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-p1',
  templateUrl: './signup-p1.component.html',
  styleUrls: ['./signup-p1.component.css']
})
export class SignupP1Component implements OnInit {
  signup1 : UntypedFormGroup;

  constructor(private _pacienteService: PacienteService,
    private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) { 
      this.signup1 = this.fb.group({
        nombrep:[ '', Validators.required],
        apepp:[ '', Validators.required],
        apemp:[ '', Validators.required],
        fechanacp:[ '', Validators.required],
        telp:[ '', Validators.required],
      })
    }

  ngOnInit(): void {
  }

  signupPaciente(){
    const PACIENTE: Paciente = {
      nombrePaciente:this.signup1.get('nombrep')?.value,
      apellidoPatPaciente:this.signup1.get('apepp')?.value,
      apellidoMatPaciente:this.signup1.get('apemp')?.value,
      fechaNacimiento:this.signup1.get('fechanacp')?.value,
      antecedentes:'',
      telefono:this.signup1.get('telp')?.value
    }
    
    this._pacienteService.savePaciente(PACIENTE).subscribe(data => {
      this.toastr.success('El paciente fue agregado.','Notificación');
      this.router.navigate(['/reg2']) //Ponemos la ruta que me dirigira a signup2
    }, error =>{
      console.log(error);
      this.signup1.reset();
    })
  }
}
