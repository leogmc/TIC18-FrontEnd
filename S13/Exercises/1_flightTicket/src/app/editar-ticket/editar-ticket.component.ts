import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../services/data-base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-ticket',
  templateUrl: './editar-ticket.component.html',
  styleUrls: ['./editar-ticket.component.css']
})
export class EditarTicketComponent {

  bilheteAereoForm!: FormGroup;
  id:string = '';
  editadoSucesso:boolean = false;

  /*
   constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }
  */

  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bilheteAereoForm = this.formConstrutor.group({
      NomePassageiro: ['', Validators.required],
      numeroVoo: ['', Validators.required],
      dataPartida: ['', Validators.required],
      dataChegada: ['', Validators.required],
      aeroportoPartida: ['', Validators.required],
      aeroportoChegada: ['', Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getTicket(this.id);
  }

  getTicket(id: any) {
    console.log("id-->"    + id);
    this.bancoService.getTicket(id).subscribe(responseData => {
      console.log(responseData);
      this.bilheteAereoForm.setValue(responseData);
    });
  }

  salvarTicket() {
    console.log("salvar ticket: " + this.bilheteAereoForm.value);
    this.bancoService.editarTicket(this.id, this.bilheteAereoForm.value).subscribe(responseData => {
      if(responseData.status == 200){
        this.editadoSucesso = true;
        this.rediracionaPrincipal();
      }
    });
  }

  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['listarTicket']);
    }, 2000);
    
  }


}
