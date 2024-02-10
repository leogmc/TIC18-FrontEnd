import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() projetoSelecionado: string = '';

  constructor(private router: Router) {}

  selecionarProjeto(projeto: string): void {
    this.projetoSelecionado = projeto;
    this.router.navigate([projeto]);
  }
}