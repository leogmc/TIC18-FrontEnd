import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-atendimento',
  templateUrl: './editar-atendimento.component.html',
  styleUrl: './editar-atendimento.component.css'
})
export class EditarAtendimentoComponent {

  atendimentoForm!: FormGroup;
  id:string = '';
  editadoSucesso:boolean = false;

  constructor(private formConstrutor: FormBuilder, private dataBaseService:DataBaseService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.atendimentoForm = this.formConstrutor.group({
      nomeCliente: ['', Validators.required],
      email: ['', Validators.required, EmailValidator],
      telefone: ['', Validators.required],
      nomeAnimal: ['', Validators.required],
      especieAnimal: ['', Validators.required],
      racaAnimal: ['', Validators.required],
      descricaoAtendimento: ['', Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getAtendimento(this.id);

  }

  getAtendimento(id: any){
    console.log("id-->"    + id);
    this.dataBaseService.getAtendimento(id).subscribe(responseData => {
      console.log(responseData);
      this.atendimentoForm.setValue(responseData);
    })
  }

  salvarAtendimento(){
    console.log("salvar atendimento: " + this.atendimentoForm.value);
    this.dataBaseService.editarAtendimento(this.id, this.atendimentoForm.value).subscribe(responseData => {
      if(responseData.status == 200){
        this.editadoSucesso = true;
        this.redirecionaPrincipal();
      }
    });
  }

redirecionaPrincipal(){
  setTimeout(() => {
    this.rotas.navigate(['listarAtendimentos']);
  }, 2000);
}

  


}
