import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  template: `
    <h3>Componente Filho</h3>
    <p>Mensagem recebida do pai: {{ mensagemDoPai }}</p>
    <button (click)="enviarMensagemParaPai()">Enviar Mensagem para Pai</button>
  `,
})
export class ComponenteFilho {
  @Input() mensagemDoPai: string = '';
  @Output() mensagemParaPai = new EventEmitter<string>();

  enviarMensagemParaPai() {
    this.mensagemParaPai.emit('Mensagem do filho para o pai');
  }
}
