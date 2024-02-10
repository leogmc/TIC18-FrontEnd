import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiAppComponent } from './projetos/Wiki/src/app/app.component';
import { JReaderAppComponent } from './projetos/JReader/src/app/app.component';
import { UescAppComponent } from './projetos/UESC-app/src/app/app.component';

const routes: Routes = [
  {path: 'uesc', component: UescAppComponent },
  {path: 'wiki', component: WikiAppComponent },
  {path: 'jreader', component: JReaderAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
