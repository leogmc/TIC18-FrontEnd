import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { PecasComponent } from './pecas/pecas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPecasComponent } from './form-pecas/form-pecas.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AutenticaInterceptor } from './autentica.interceptor';


const rotas: Routes = [
  { path: 'autentica', component: AuthComponent },
  { path: 'adicionaPeca', component: FormPecasComponent },
  { path: 'pecas', component: PecasComponent },
  { path: '', redirectTo: '/autentica', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    PecasComponent,
    FormPecasComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rotas)
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
