// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JReader';
  dados: any;
  file: File | undefined;
  classes: string[] | undefined;
  objetos: any[] = [];
  nomes: string[] | undefined;
  propriedades: any;
  propriedade: any;

  onFileSelected(event: any) {
    this.file = (event.target as HTMLInputElement)?.files?.[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.dados = JSON.parse((e.target as FileReader).result as string);
    };

    if (this.file) {
      reader.readAsText(this.file);
    } else {
      console.error('No file selected');
    }
}

  onLoad() {
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = reader.result?.toString();
        this.dados = JSON.parse(text || ''); 
        this.classes = Object.keys(this.dados);
      };
      reader.readAsText(this.file);
    }
  }
 

  onClasseSelecionada(event: { classe: string, objetos: any[] }) {
    this.objetos = this.dados[event.classe];
  }
  
  
  onObjetoSelecionado(objeto: any) {
    this.nomes = this.objetos.map((objeto: any) => objeto.Name);
    this.propriedades = objeto;
    this.classes = objeto;
  }


  onPropriedadeSelecionada( propriedade: string) {
    this.propriedade = propriedade;
   }





}