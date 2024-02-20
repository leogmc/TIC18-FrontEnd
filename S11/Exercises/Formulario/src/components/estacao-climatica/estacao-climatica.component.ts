import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estacao-climatica',
  templateUrl: './estacao-climatica.component.html',
  styleUrl: './estacao-climatica.component.css'
})
export class EstacaoClimaticaComponent implements OnInit {

  exemploForm: FormGroup;

  constructor() { 
    this.exemploForm = new FormGroup({
      'nomeEstacao': new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'senha': new FormControl(null,  [Validators.required, Validators.minLength(8)]),
      'localizacao' : new FormControl(null, Validators.required)

    });
  }


  executarAcao() {
    console.log('Valores do formulário:', this.exemploForm.value); // Exiba os valores do formulário no console
  }

  onSubmit(){
    console.log(this.exemploForm);
    console.log(this.exemploForm.value);
  }

  ngOnInit()
  {}

}


  






