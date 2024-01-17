// objetos.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent  implements OnInit {
  @Input() classe: any;
  @Input() objetos: any[] = [];
  @Output() objetoSelecionado = new EventEmitter<any>();
  dados: any;
  constructor() { }

  ngOnInit(): void {
  }

  // onSelect(objeto: any) {
  //   this.objetoSelecionado.emit(objeto);
  // }
  
  onSelect(objeto: any) {
    this.objetoSelecionado.emit(objeto);
  }
  
}