import { Component, OnInit } from '@angular/core';
import { AutenticaService } from '../autentica.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  private inscricao!: Subscription;
  estaAutenticado = false;

  constructor(private autenticaService: AutenticaService) { }


  ngOnInit(): void {
    this.inscricao = this.autenticaService.usuario.subscribe(
      usuario => {
        this.estaAutenticado = !usuario ? false : true;
      });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  logout() {
    this.autenticaService.logout();
    console.log('logout');
  }
}
