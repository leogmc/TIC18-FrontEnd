import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Atendimento } from '../atendimento.model';

@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrl: './listar-atendimentos.component.css'
})
export class ListarAtendimentosComponent implements OnInit {

  loadedAtendimentos: Atendimento[] = [];
  constructor(private dataBaseService:DataBaseService) { }

  ngOnInit():void{
    this.getAtendimentos();
  }

  getAtendimentos(){
    this.dataBaseService.getAtendimentos().subscribe((responseData : Atendimento[]) => {
      console.log(responseData);
      this.loadedAtendimentos = responseData;
      console.log(this.loadedAtendimentos);     
    });
  }

  

}
