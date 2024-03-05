import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListarAtendimentosComponent } from './listar-atendimentos/listar-atendimentos.component';
import { EditarAtendimentoComponent } from './editar-atendimento/editar-atendimento.component';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento/cadastrar-atendimento.component';
import { DetalharAtendimentoComponent } from './detalhar-atendimento/detalhar-atendimento.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

//Imports da biblioteca Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { AutenticaInterceptor } from './autentica.interceptor';


  const routes: Routes = [
    { path: 'cadastrarAtendimento', component: CadastrarAtendimentoComponent },
    { path: 'listarAtendimentos', component: ListarAtendimentosComponent },
    { path: 'editarAtendimento/:id', component: EditarAtendimentoComponent},
    { path: 'detalharAtendimento/:id', component: DetalharAtendimentoComponent },
    { path: 'autenticacao', component : AutenticacaoComponent},
    { path: '', redirectTo: '/autenticacao', pathMatch: 'full' },
  ];


@NgModule({
  declarations: [
    AppComponent,
    ListarAtendimentosComponent,
    EditarAtendimentoComponent,
    CadastrarAtendimentoComponent,
    DetalharAtendimentoComponent,
    AutenticacaoComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    provideAnimationsAsync(),
    {provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
