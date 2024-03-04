import { Component, OnInit } from '@angular/core';
import { BancoService } from '../banco.service';
import { Peca } from '../peca.model';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.css']
})
export class PecasComponent implements OnInit{
  loadedPecas:Peca[] = [];

  constructor(private bancoService: BancoService) {}

  ngOnInit(): void {
    this.getPecas();
  }

  getPecas() {
    this.bancoService.getPecas().subscribe(responseData => {
      console.log(responseData);
      this.loadedPecas = responseData;
      console.log(this.loadedPecas);
    });
  }

}
