import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  termoPesquisa : string = '';

 @Output() getPalavraChave(){
     return this.termoPesquisa;  
  }
}
