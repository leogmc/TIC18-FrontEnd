import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {

  @Input() classes: any;
  @Output() classeSelecionada = new EventEmitter<{ classe: string, objetos: any[] }>();

  onSelect(classe: any) {
    const objetosDaclasse = this.classes[classe];
    this.classeSelecionada.emit({ classe: classe, objetos: objetosDaclasse });
  }
  

}
