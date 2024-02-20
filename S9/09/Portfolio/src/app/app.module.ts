import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { JReaderAppModule } from './projetos/JReader/src/app/jreader-app.module';
import { UescAppModule } from './projetos/UESC-app/src/app/uesc-app.module';
import { WikiAppModule } from './projetos/Wiki/src/app/wiki-app.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    JReaderAppModule,
    UescAppModule,
    WikiAppModule
  ],
  exports: [
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
