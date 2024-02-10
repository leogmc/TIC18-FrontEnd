// objetos.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
  @Input() classe: any;
  @Input() objetos: any[] = [];
  @Output() objetoSelecionado = new EventEmitter<any>();


  
  onSelect(objeto: any) {
    this.objetoSelecionado.emit(objeto);
  }
  
}