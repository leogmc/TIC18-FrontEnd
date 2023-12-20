import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {

  buscarDadosDaAPI(apiURL: string): Promise<any> {
    return fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Resposta da rede não foi OK.');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        throw error;
      });
  }

  ngOnInit(): void {
    // Preenchendo o quadro "Serviços" com dados da API de previsão do tempo
    const previsaoTempoAPI = 'https://api.openweathermap.org/data/2.5/weather?lat=-14.796611189986773&lon=-39.173822287008235&appid=c2d36d6ea27efa208a2ffbc6f6e35a2f&lang=pt_br';
    this.buscarDadosDaAPI(previsaoTempoAPI)
      .then(data => {
        const servicosElemento = document.querySelector('.servicos p');

        if (servicosElemento) {
          const climaTitulo: HTMLHeadingElement = document.createElement('h3');
          climaTitulo.textContent = 'Clima:';
          servicosElemento.appendChild(climaTitulo);

          const nome = document.createElement('h3');
          const temperatura = document.createElement('h2');
          const descricao = document.createElement('h3');

          nome.textContent = `Cidade: ${data.name}`;
          temperatura.textContent = `Temperatura: ${data.main.temp}°C`;
          descricao.textContent = `Descrição: ${data.weather[0].description}`;

          // Adicionando os elementos criados ao elemento pai (servicosElemento)
          servicosElemento.appendChild(nome);
          servicosElemento.appendChild(temperatura);
          servicosElemento.appendChild(descricao);

          // // Atualizando o texto do elemento servicosElemento
          // servicosElemento.textContent = `Previsão do tempo: ${data.previsao}, ${data.weather[0]}`;
        } else {
          console.error('Elemento de serviços não encontrado.');
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API de previsão do tempo:', error);
      });
  }
}
