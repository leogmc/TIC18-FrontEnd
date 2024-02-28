import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../services/data-base.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formContato: FormGroup;
  constructor(private formBuilder: FormBuilder, private bancoService:DataBaseService) {
    this.formContato = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formContato.value);
    this.bancoService.addMensagem(this.formContato.value);
    this.formContato.reset();
  }

}
