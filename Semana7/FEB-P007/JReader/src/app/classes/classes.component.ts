import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {

  @Input() listaVeiculos: any[] = [];
  @Output() veiculoSelecionado = new EventEmitter<any>();

  selecionarClasse(objeto: any): void {
    this.veiculoSelecionado.emit(objeto);
  }
  

}
