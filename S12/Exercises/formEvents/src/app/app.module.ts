import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrdemServicoFormComponent } from './ordem-servico-form/ordem-servico-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassagemAreaFormComponent } from './passagem-area-form/passagem-area-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdemServicoFormComponent,
    PassagemAreaFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
