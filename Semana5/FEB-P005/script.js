function buscarDadosDaAPI(apiURL) {
    return fetch(apiURL)
        .then(function (response) {
        if (!response.ok) {
            throw new Error('Resposta da rede não foi OK.');
        }
        return response.json();
    })
        .catch(function (error) { return console.error('Erro ao buscar dados:', error); });
}
// Preenchendo o quadro "Notícias" com dados de uma API de notícias
var noticiasAPI = 'https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=cf6acb99f266408f9697bde3e654b686';
buscarDadosDaAPI(noticiasAPI)
    .then(function (data) {
    var noticiasElemento = document.querySelector('.noticias ul');
    if (noticiasElemento) {
        // Manipulando os dados para preencher as notícias no formato desejado
        data.articles.forEach(function (artigo) {
            var itemLista = document.createElement('li');
            var titulo = document.createElement('h3');
            var link = document.createElement('a');
            titulo.textContent = artigo.title;
            link.href = artigo.url;
            link.textContent = 'Clique aqui e veja!';
            itemLista.appendChild(titulo);
            itemLista.appendChild(link);
            noticiasElemento.appendChild(itemLista);
        });
    }
    else {
        console.error('Elemento de notícias não encontrado.');
    }
});
;
// // Preenchendo o quadro "Serviços" com dados da API de previsão do tempo
var previsaoTempoAPI = 'https://api.openweathermap.org/data/2.5/weather?lat=-14.796611189986773&lon=-39.173822287008235&appid=c2d36d6ea27efa208a2ffbc6f6e35a2f&lang=pt_br&units=metric';
buscarDadosDaAPI(previsaoTempoAPI)
    .then(function (data) {
    var servicosElemento = document.querySelector('.servicos p');
    if (servicosElemento) {
        var climaTitulo = document.createElement('h2');
        climaTitulo.textContent = 'Clima:';
        servicosElemento.appendChild(climaTitulo);
        var nome = document.createElement('h3');
        var temperatura = document.createElement('h2');
        var descricao = document.createElement('h3');
        nome.textContent = data.name;
        temperatura.textContent = data.main.temp + "\u00B0C";

        descricao.textContent = data.weather[0].description;
        // Adicionando os elementos criados ao elemento pai (servicosElemento)
        servicosElemento.appendChild(nome);
        servicosElemento.appendChild(temperatura);
        servicosElemento.appendChild(descricao);

    }
    else {
        console.error('Elemento de serviços não encontrado.');
    }
});
// // ... Continue a buscar e preencher outros quadros com dados de outras APIs
