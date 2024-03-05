import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';


@Component({
  selector: 'app-cadastrar-atendimento',
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrl: './cadastrar-atendimento.component.css'
})
export class CadastrarAtendimentoComponent implements OnInit{

  constructor(private dataBaseService:DataBaseService){}



  ngOnInit(): void {
    this.dataBaseService.getAtendimentos();
  }

  addAtendimento(atendimentoForm: any){
    // Obtenha os valores do formulário
    const atendimentoData = atendimentoForm.value;
    // Envie apenas os dados inseridos para o serviço
    //Apenas enviando os dados inseridos, sem nenhuma validação.
    this.dataBaseService.addAtendimento(atendimentoData);
  }



 

}
