import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JReader';

  // Variável de controle para determinar se o componente deve ser exibido
  componenteVisivel: boolean = false;

  // Método para ser chamado quando o botão for clicado
  exibirComponente() {
    this.componenteVisivel = true;
  }
}
