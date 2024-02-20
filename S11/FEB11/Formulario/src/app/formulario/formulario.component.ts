import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { uppercaseValidator } from './uppercase-validator'; // Validador personalizado de letra maiúscula
import { symbolValidator } from './symbol-validator'; // Validador personalizado de simbolos
import { fullNameValidator } from './full-name-validator'; // Validador personalizado de nome completo
import { brazilianPhoneValidator } from './brazilian-phone-validator';
import { addressValidator } from './address-validator';
import { eighteenYearsOldValidator } from './eighteen-years-old-validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  exemploForm: FormGroup;

  constructor() {
    this.exemploForm = new FormGroup({
      nomeUsuario: new FormControl(null, [
        Validators.required,
        Validators.maxLength(12),
        Validators.pattern(/^\S*$/),
      ]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        uppercaseValidator(),
        symbolValidator(),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      nome: new FormControl(null, [Validators.required, fullNameValidator()]),
      telefone: new FormControl(null, [
        Validators.required,
        brazilianPhoneValidator(),
      ]),
      endereco: new FormControl(null, [
        Validators.required,
        addressValidator(),
        Validators.minLength(10),
      ]),
      dataNascimento: new FormControl(null, [
        Validators.required,
        eighteenYearsOldValidator(),
      ]),
      genero: new FormControl(null, Validators.required),
      profissao: new FormControl(null, Validators.required),
    });
  }

  executarAcao(): void {
    //Atribuindo as informações preenchidas pelo usuário as variáveis
    const nomeUsuario = this.exemploForm.get('nomeUsuario');
    const senha = this.exemploForm.get('senha');
    const email = this.exemploForm.get('email');
    const nome = this.exemploForm.get('nome');
    const telefone = this.exemploForm.get('telefone');
    const endereco = this.exemploForm.get('endereco');
    const dataNascimento = this.exemploForm.get('dataNascimento');
    const genero = this.exemploForm.get('genero');
    const profissao = this.exemploForm.get('profissao');

    if (
      nomeUsuario &&
      senha &&
      email &&
      nome &&
      telefone &&
      endereco &&
      dataNascimento &&
      genero &&
      profissao &&
      this.exemploForm.valid
    ) {
      const dadosUsuario = {
        nomeUsuario: nomeUsuario.value,
        senha: senha.value,
        email: email.value,
        nome: nome.value,
        telefone: telefone.value,
        endereco: endereco.value,
        dataNascimento: dataNascimento.value,
        genero: genero.value,
        profissao: profissao.value,
      };
      console.log('Dados do usuário:', dadosUsuario);
      // Aqui você pode executar a ação desejada com os dados do usuário, como enviar para o servidor
    } else {
      console.log('Formulário inválido, verifique os campos.');
    }
  }

  onSubmit() {
    console.log(this.exemploForm);
    console.log(this.exemploForm.value);
  }

  ngOnInit() {}
}
