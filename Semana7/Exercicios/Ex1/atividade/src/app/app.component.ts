import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Componente Pai (App)</h2>
    <input type="text" [(ngModel)]="mensagem">
    <button (click)="enviarMensagemParaFilho()">Enviar Mensagem para Filho</button>
    <app-filho [mensagemDoPai]="mensagem" (mensagemParaPai)="receberMensagemDoFilho($event)"></app-filho>
  `,
})
export class AppComponent {
  mensagem: string = '';
  mensagemRecebidaDoFilho: string = '';

  enviarMensagemParaFilho() {
    // Não é necessário enviar a mensagem neste exemplo, mas você pode fazer algo aqui
  }

  receberMensagemDoFilho(mensagem: string) {
    this.mensagemRecebidaDoFilho = mensagem;
  }
}
