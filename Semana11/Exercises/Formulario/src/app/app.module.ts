import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstacaoClimaticaComponent } from '../components/estacao-climatica/estacao-climatica.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EstacaoClimaticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
