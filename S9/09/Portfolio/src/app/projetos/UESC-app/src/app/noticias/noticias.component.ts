import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const noticiasAPI = 'https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=cf6acb99f266408f9697bde3e654b686';
    this.buscarDadosDaAPI(noticiasAPI)
      .then(data => {
        // Lógica para manipular os dados e preencher o componente com as notícias
        this.exibirNoticias(data.articles);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }

  async buscarDadosDaAPI(apiURL: string): Promise<any> {
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Resposta da rede não foi OK.');
      }
      return response.json();
    } catch (error: any) {
      throw new Error('Erro ao buscar dados: ' , error);
    }
  }

  exibirNoticias(articles: any[]): void {
    const noticiasElemento = document.querySelector('.noticias ul');
    if (noticiasElemento) {
      articles.forEach((artigo: any) => {
        const itemLista = document.createElement('li');
        const titulo = document.createElement('h3');
        const link = document.createElement('a');

        titulo.textContent = artigo.title;
        link.href = artigo.url;
        link.textContent = 'Clique aqui e veja!';

        itemLista.appendChild(titulo);
        itemLista.appendChild(link);
        noticiasElemento.appendChild(itemLista);
      });
    } else {
      console.error('Elemento de notícias não encontrado.');
    }
  }
}
