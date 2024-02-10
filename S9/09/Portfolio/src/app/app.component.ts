import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  projetoSelecionado: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.definirProjetoSelecionado(event.urlAfterRedirects);
      }
    });
  }

  definirProjetoSelecionado(url: string): void {
    this.projetoSelecionado = url.split('/')[1];
  }
}