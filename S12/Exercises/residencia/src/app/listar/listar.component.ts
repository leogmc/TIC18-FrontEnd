import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormAdicionarService } from '../form-adicionar/form-adicionar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})

export class ListarComponent implements OnInit {
  informacoes$!: Observable<any[]>;

  constructor(private formuAdicionarService: FormAdicionarService) {}

  ngOnInit(): void {
    this.informacoes$ = this.formuAdicionarService.informacoes$;
  }
}
