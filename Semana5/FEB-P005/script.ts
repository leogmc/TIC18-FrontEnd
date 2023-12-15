function buscarDadosDaAPI(apiURL: string): Promise<any> {
    return fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Resposta da rede não foi OK.');
            }
            return response.json();
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
}



// Preenchendo o quadro "Notícias" com dados de uma API de notícias
const noticiasAPI = 'https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=cf6acb99f266408f9697bde3e654b686';
buscarDadosDaAPI(noticiasAPI)
    .then(data => {
        const noticiasElemento = document.querySelector('.noticias ul');
        if (noticiasElemento) {
            // Manipulando os dados para preencher as notícias no formato desejado
            data.articles.forEach((artigo: any) => {
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
    });

;

// // Preenchendo o quadro "Serviços" com dados da API de previsão do tempo
const previsaoTempoAPI = 'https://api.openweathermap.org/data/2.5/weather?lat=-14.796611189986773&lon=-39.173822287008235&appid=c2d36d6ea27efa208a2ffbc6f6e35a2f&lang=pt_br';
buscarDadosDaAPI(previsaoTempoAPI)
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

        
        // Atualizando o texto do elemento servicosElemento
        servicosElemento.textContent = `Previsão do tempo: ${data.previsao}, ${data.weather[0]}`;

    } else {
        console.error('Elemento de serviços não encontrado.');
    }

    });

    
// // ... Continue a buscar e preencher outros quadros com dados de outras APIs
