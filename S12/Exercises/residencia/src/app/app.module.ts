import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAdicionarComponent } from './form-adicionar/form-adicionar.component';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: 'form-adicionar', component: FormAdicionarComponent },
  { path: 'listar', component: ListarComponent },
  { path: '', redirectTo: '/form-adicionar', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    FormAdicionarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
