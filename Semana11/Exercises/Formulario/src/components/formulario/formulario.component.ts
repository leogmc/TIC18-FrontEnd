import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  exemploForm: FormGroup;

  constructor() { 
    this.exemploForm = new FormGroup({
      'login': new FormControl(null, Validators.required),
      'senha': new FormControl(null,  [Validators.required, Validators.minLength(8)]),
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





 

