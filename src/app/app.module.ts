import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicoComponent } from './component/add-medico/add-medico.component';
import { ListMedicoComponent } from './component/list-medico/list-medico.component';
import { HomeComponent } from './component/home/home.component';
import { AppLayoutComponent } from './component/app-layout/app-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListUsuarioComponent } from './component/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './component/add-usuario/add-usuario.component';
import { AddPacienteComponent } from './component/add-paciente/add-paciente.component';
import { ListPacienteComponent } from './component/list-paciente/list-paciente.component';
import { AddAntecedentesComponent } from './component/add-antecedentes/add-antecedentes.component';
import { ListAntecedentesComponent } from './component/list-antecedentes/list-antecedentes.component';
import { AddCitasComponent } from './component/add-citas/add-citas.component';
import { ListCitasComponent } from './component/list-citas/list-citas.component';
import { ListEspecialidadComponent } from './component/list-especialidad/list-especialidad.component';
import { AddEspecialidadComponent } from './component/add-especialidad/add-especialidad.component';
import { AddAgendaComponent } from './component/add-agenda/add-agenda.component';
import { ListAgendaComponent } from './component/list-agenda/list-agenda.component';
import { AddTranstornoComponent } from './component/add-transtorno/add-transtorno.component';
import { ListTranstornoComponent } from './component/list-transtorno/list-transtorno.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth.guard';
import { TokenIntService } from './services/token-int.service';
import { ViewPacienteComponent } from './component/view-paciente/view-paciente.component';
import { SignupP1Component } from './component/signup-p1/signup-p1.component';
import { SignupP2Component } from './component/signup-p2/signup-p2.component';
import { CrearCitaComponent } from './component/crear-cita/crear-cita.component';
import { SignupM1Component } from './component/signup-m1/signup-m1.component';
import { SignupM2Component } from './component/signup-m2/signup-m2.component';
import { ViewMedicoComponent } from './component/view-medico/view-medico.component';
import { PerfilPComponent } from './component/perfil-p/perfil-p.component';
import { PerfilMComponent } from './component/perfil-m/perfil-m.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMedicoComponent,
    ListMedicoComponent,
    HomeComponent,
    AppLayoutComponent,
    ListUsuarioComponent,
    AddUsuarioComponent,
    AddPacienteComponent,
    ListPacienteComponent,
    AddAntecedentesComponent,
    ListAntecedentesComponent,
    AddCitasComponent,
    ListCitasComponent,
    ListEspecialidadComponent,
    AddEspecialidadComponent,
    AddAgendaComponent,
    ListAgendaComponent,
    AddTranstornoComponent,
    ListTranstornoComponent,
    LoginComponent,
    ViewPacienteComponent,
    SignupP1Component,
    SignupP2Component,
    CrearCitaComponent,
    SignupM1Component,
    SignupM2Component,
    ViewMedicoComponent,
    PerfilPComponent,
    PerfilMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
