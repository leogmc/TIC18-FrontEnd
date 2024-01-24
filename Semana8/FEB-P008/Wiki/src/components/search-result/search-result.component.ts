import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
})

export class SearchResultComponent {

  constructor(){}

    @Input() result : string = '';

  ngOnInit(): void {
   this.result = `Resultados para "${this.result}" `

}

}