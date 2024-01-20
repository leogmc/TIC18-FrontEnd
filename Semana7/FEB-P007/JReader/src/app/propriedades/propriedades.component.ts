// propriedades.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: 'propriedades.component.html',
  styleUrls: ['propriedades.component.css']
})
export class PropriedadesComponent{
  @Input() propriedades: any;
  @Output() propriedadeSelecionada = new EventEmitter<any>();

  onSelect(propriedade: any) {
    this.propriedadeSelecionada.emit(propriedade);
  }



}