import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passagem-area-form',
  templateUrl: './passagem-area-form.component.html',
  styleUrls: ['./passagem-area-form.component.css']
})
export class PassagemAreaFormComponent implements OnInit{
  bilheteAereoForm!: FormGroup;
  fOnFocus:Boolean = false;
  fonChange:Boolean = false;
  nomeDoPassageiro: string = '';
  tempNomePassageiro: string = '';

  constructor(private formConstrutor: FormBuilder) { }
  
  ngOnInit() {
    this.bilheteAereoForm = this.formConstrutor.group({
      NomePassageiro: ['', Validators.required],
      numeroVoo: ['', Validators.required],
      dataPartida: ['', Validators.required],
      dataChegada: ['', Validators.required],
      aeroportoPartida: ['', Validators.required],
      aeroportoChegada: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.bilheteAereoForm.value);
  }

  onFocus(){
    this.fOnFocus = true;
  }

  onBlur(){
    this.fOnFocus = false;
  }

  onChange(event:any){
    this.nomeDoPassageiro = event.target ? event.target.value : null;
    this.fonChange= true;
    console.log(event.target);
  }

  onInput(event:any){
    this.tempNomePassageiro = event.target ? event.target.value : null;
  }


}
