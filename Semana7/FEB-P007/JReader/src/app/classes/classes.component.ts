import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit {

  @Input() classes: any;
  @Input() objetos: any[] = [];
  @Output() classeSelecionada = new EventEmitter<{ classe: string, objetos: any[] }>();

  ngOnInit(): void {}


  onSelect(classe: any) {
    const objetosDaCategoria = this.classes[classe];
    this.classeSelecionada.emit({ classe: classe, objetos: objetosDaCategoria });
  }
  

}
