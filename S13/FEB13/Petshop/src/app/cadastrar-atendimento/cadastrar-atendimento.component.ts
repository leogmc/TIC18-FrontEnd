import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-atendimento',
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrl: './cadastrar-atendimento.component.css'
})
export class CadastrarAtendimentoComponent {

  submitForm() {
    // Aqui você pode processar os dados do formulário, como enviar para um serviço de backend
    console.log("Formulário enviado!");
  }

}
