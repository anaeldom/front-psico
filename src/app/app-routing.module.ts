import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgendaComponent } from './component/add-agenda/add-agenda.component';
import { AddAntecedentesComponent } from './component/add-antecedentes/add-antecedentes.component';
import { AddCitasComponent } from './component/add-citas/add-citas.component';
import { AddEspecialidadComponent } from './component/add-especialidad/add-especialidad.component';
import { AddMedicoComponent } from './component/add-medico/add-medico.component';
import { AddPacienteComponent } from './component/add-paciente/add-paciente.component';
import { AddTranstornoComponent } from './component/add-transtorno/add-transtorno.component';
import { AddUsuarioComponent } from './component/add-usuario/add-usuario.component';
import { HomeComponent } from './component/home/home.component';
import { ListAgendaComponent } from './component/list-agenda/list-agenda.component';
import { ListAntecedentesComponent } from './component/list-antecedentes/list-antecedentes.component';
import { ListCitasComponent } from './component/list-citas/list-citas.component';
import { ListEspecialidadComponent } from './component/list-especialidad/list-especialidad.component';
import { ListMedicoComponent } from './component/list-medico/list-medico.component';
import { ListPacienteComponent } from './component/list-paciente/list-paciente.component';
import { ListTranstornoComponent } from './component/list-transtorno/list-transtorno.component';
import { ListUsuarioComponent } from './component/list-usuario/list-usuario.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './component/login/login.component';
import { SignupP1Component } from './component/signup-p1/signup-p1.component';
import { SignupP2Component } from './component/signup-p2/signup-p2.component';
import { ViewPacienteComponent } from './component/view-paciente/view-paciente.component';
import { CrearCitaComponent } from './component/crear-cita/crear-cita.component';
import { SignupM1Component } from './component/signup-m1/signup-m1.component';
import { SignupM2Component } from './component/signup-m2/signup-m2.component';
import { ViewMedicoComponent } from './component/view-medico/view-medico.component';
import { PerfilPComponent } from './component/perfil-p/perfil-p.component';
import { PerfilMComponent } from './component/perfil-m/perfil-m.component';

const routes: Routes = [
  { path: '', component: HomeComponent},   
  { path: 'medico', component: ListMedicoComponent, canActivate: [AuthGuard]},
  { path: 'medico/add-medico', component: AddMedicoComponent},
  { path: 'medico/edit-medico/:id', component: AddMedicoComponent},

  { path: 'usuario', component: ListUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'usuario/add-usuario', component: AddUsuarioComponent},
  { path: 'usuario/edit-usuario/:id', component: AddUsuarioComponent},

  { path: 'paciente', component: ListPacienteComponent, canActivate: [AuthGuard]},
  { path: 'paciente/add-paciente', component: AddPacienteComponent},
  { path: 'paciente/edit-paciente/:id', component: AddPacienteComponent},

  { path: 'antecedentes', component: ListAntecedentesComponent, canActivate: [AuthGuard]},
  { path: 'antecedentes/add-antecedentes', component: AddAntecedentesComponent},
  { path: 'antecedentes/edit-antecedentes/:id', component: AddAntecedentesComponent},

  { path: 'citas', component: ListCitasComponent, canActivate: [AuthGuard]},
  { path: 'citas/add-citas', component: AddCitasComponent},
  { path: 'citas/edit-citas/:id', component: AddCitasComponent},

  { path: 'especialidad', component: ListEspecialidadComponent, canActivate: [AuthGuard]},
  { path: 'especialidad/add-especialidad', component: AddEspecialidadComponent},
  { path: 'especialidad/edit-especialidad/:id', component: AddEspecialidadComponent},

  { path: 'agenda', component: ListAgendaComponent,canActivate: [AuthGuard]},
  { path: 'agenda/add-agenda', component: AddAgendaComponent},
  { path: 'agenda/edit-agenda/:id', component: AddAgendaComponent},

  { path: 'transtorno', component: ListTranstornoComponent,canActivate: [AuthGuard]},
  { path: 'transtorno/add-transtorno', component: AddTranstornoComponent},
  { path: 'transtorno/edit-transtorno/:id', component: AddTranstornoComponent},
  
  { path: 'login', component: LoginComponent},
  
  { path: 'reg1', component: SignupP1Component},
  { path: 'reg2', component: SignupP2Component},
  { path: 'homeu', component: ViewPacienteComponent,canActivate: [AuthGuard]},
  { path: 'profileu', component: PerfilPComponent,canActivate:[AuthGuard]},
  { path: 'generarCita/:id',component:CrearCitaComponent},

  { path: 'regm1', component: SignupM1Component},
  { path: 'regm2', component: SignupM2Component},
  { path: 'homem', component: ViewMedicoComponent,canActivate:[AuthGuard]},
  { path: 'profilem', component: PerfilMComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
