import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormService } from './form-service.service';
import { uppercaseValidator } from './uppercase-validator';
import { symbolValidator } from './symbol-validator';
import { fullNameValidator } from './full-name-validator';
import { brazilianPhoneValidator } from './brazilian-phone-validator';
import { addressValidator } from './address-validator';
import { eighteenYearsOldValidator } from './eighteen-years-old-validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  exemploForm: FormGroup;

  mostrarOtherComponent = false;

  constructor(private fb: FormBuilder, private formService: FormService) {
    // Criar o formulário utilizando FormBuilder
    this.exemploForm = this.fb.group({
      nomeUsuario: [null, [
        Validators.required,
        Validators.maxLength(12),
        Validators.pattern(/^\S*$/),
      ]],
      senha: [null, [
        Validators.required,
        Validators.minLength(4),
        uppercaseValidator(),
        symbolValidator(),
      ]],
      email: [null, [
        Validators.required,
        Validators.email,
      ]],
      nome: [null, [
        Validators.required,
        fullNameValidator(),
      ]],
      telefone: [null, [
        Validators.required,
        brazilianPhoneValidator(),
      ]],
      endereco: [null, [
        Validators.required,
        addressValidator(),
        Validators.minLength(10),
      ]],
      dataNascimento: [null, [
        Validators.required,
        eighteenYearsOldValidator(),
      ]],
      genero: [null, Validators.required],
      profissao: [null, Validators.required],
    });

    // Atualize o serviço com os valores e status do formulário
    this.exemploForm.valueChanges.subscribe(data => {
      this.formService.updateFormData(data);
    });

    this.exemploForm.statusChanges.subscribe(status => {
      this.formService.updateFormStatus(status);
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
    this.mostrarOtherComponent = true;

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
}
