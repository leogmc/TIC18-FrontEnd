import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormAdicionarService } from './form-adicionar.service';

@Component({
  selector: 'app-form-adicionar',
  templateUrl: './form-adicionar.component.html',
  styleUrl: './form-adicionar.component.css',
})
export class FormAdicionarComponent implements OnInit {
  cadastroDeCarroForm!: FormGroup;

  ngOnInit(): void {
    this.cadastroDeCarroForm = new FormGroup({
      marca: new FormControl(''),
      modelo: new FormControl(''),
      ano: new FormControl(''),
      valor: new FormControl(''),
      cor: new FormControl(''),
      foto: new FormControl(''),
    });
  }

  constructor(private formAdicionarService: FormAdicionarService) {}

  onSubmit() {
    console.log(this.cadastroDeCarroForm?.value);

    const informacoes = this.cadastroDeCarroForm.value;
    this.formAdicionarService.adicionarInformacoes(informacoes);
    this.cadastroDeCarroForm.reset(); // Limpa o formulário após o envio

  }


}
