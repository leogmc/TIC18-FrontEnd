import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../services/data-base.service';

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

  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService) { }
  
  ngOnInit() {
    this.bilheteAereoForm = this.formConstrutor.group({
      NomePassageiro: ['', Validators.required],
      numeroVoo: ['', Validators.required],
      dataPartida: ['', Validators.required],
      dataChegada: ['', Validators.required],
      aeroportoPartida: ['', Validators.required],
      aeroportoChegada: ['', Validators.required],
    });
    this.bancoService.getTickets();
  }

  onSubmit() {
    console.log(this.bilheteAereoForm.value);
  }

  adicionarBilhete() {
    console.log(this.bilheteAereoForm.value);
    this.bancoService.addTicket(this.bilheteAereoForm.value);
    this.bilheteAereoForm.reset();
  }

  


}
