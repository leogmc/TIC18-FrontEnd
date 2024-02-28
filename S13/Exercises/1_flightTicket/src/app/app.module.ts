import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PassagemAreaFormComponent } from './passagem-area-form/passagem-area-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShowTicketsComponent } from './show-tickets/show-tickets.component';
import { AutenticaInterceptor } from './autentica.interceptor';
import { EspionandoInterceptor } from './espionando.interceptor';

import {HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { EditarTicketComponent } from './editar-ticket/editar-ticket.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContatoComponent } from './contato/contato.component';



const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'adicionaTicket', component: PassagemAreaFormComponent },
  { path: 'listarTicket', component: ShowTicketsComponent },
  { path: 'contato', component: ContatoComponent},
  { path: 'editarTicket/:id', component: EditarTicketComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PassagemAreaFormComponent,
    ShowTicketsComponent,
    EditarTicketComponent,
    PrincipalComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    //ordem de execução dos interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticaInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EspionandoInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
