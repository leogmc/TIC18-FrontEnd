import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../banco.service';

@Component({
  selector: 'app-form-pecas',
  templateUrl: './form-pecas.component.html',
  styleUrls: ['./form-pecas.component.css']
})
export class FormPecasComponent implements OnInit{


  pecaForm!: FormGroup;

  constructor(private formConstrutor: FormBuilder, private servico: BancoService) { }

  ngOnInit() {
    this. pecaForm = this.formConstrutor.group({
      nome: ['', Validators.required],
      fabricante: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      preco: ['', Validators.required],
      garantia: ['', Validators.required],
      observacoes: ['', Validators.required],
    });
  }

  adicionarPeca(): void {
    console.log(this.pecaForm.value);
    this.servico.adicionarPeca(this.pecaForm.value);
    this.pecaForm.reset();
  }


}
