import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  nome:string = 'Arara';
  descricao:string = 'A Arara-canindé.';

  urlEren: string = 'https://steamuserimages-a.akamaihd.net/ugc/816684360488897531/FB56E07168A5F3BC20E0BACC168101924901010F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
  tamanhoGIF: string = '200';

  public getToString(): string {
    return this.nome + ' - ' + this.descricao;
  }

  public onClick(): void {
    alert('Clicou em mim');
  }

  public entrouBotao(): void {
    
  }





}
