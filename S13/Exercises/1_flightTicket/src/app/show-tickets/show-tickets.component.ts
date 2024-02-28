import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.css']
})
export class ShowTicketsComponent implements OnInit{
  loadedTickets:Ticket[] = [];
  constructor(private bancoService:DataBaseService) { }

  ngOnInit(): void {
    this.getTickets();
  }



  getTickets() {
    this.bancoService.getTickets().subscribe(responseData => {
      console.log(responseData);
      this.loadedTickets = responseData;
      console.log(this.loadedTickets);
    });
  }

  editarBilhete(id:any){
    console.log(id);

  }

  apagarTudo(){
    this.bancoService.apagarTodosTickets().subscribe( () => {
      console.log('Apagou tudo');
      this.loadedTickets = [];
    });
  }
  

}
