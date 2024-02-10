import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  styleUrl: './search.component.css',
  template: `<input class="bar" [(ngModel)]="searchTerm" placeholder="O que você está buscando hoje?"/>
             <button (click)="search(searchTerm)">Buscar</button>`,
})
export class SearchComponent {
  searchTerm: string = '';
  @Output () searchEvent = new EventEmitter<string>();

  search(term: string) {
    this.searchEvent.emit(this.searchTerm);
  }

}
