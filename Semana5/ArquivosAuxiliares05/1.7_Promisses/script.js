//temperatura
//https://thingspeak.com/channels/1898908/field/2.json
// Cria uma nova Promise: Estado: pending
var buscaDados = new Promise(function (resolve, reject) {
    // Busca dados da api do microclima da CEPLAC
    //simulando uma requisição assíncrona
    fetch('https://thingspeak.com/channels/1898908/field/2.json')
        .then(function (response) {
        //https://developer.mozilla.org/pt-BR/docs/Web/API/Response
        // se o response for ok, resolve the Promise com os dados do response convertidos para json
        if (response.ok) {
            //tipo unknown: Estado: resolved
            return response.json();
        }
        else {
            // If the response is not ok, reject the Promise with the status text
            throw new Error(response.statusText);
        }
    })
        //tipo unknown: Estado: resolved
        .then(function (data) { return resolve(data); })
        //Estado: rejected
        .catch(function (error) { return reject(error); });
});
//usar a Promise
buscaDados.then(function (data) {
    //imprime o objeto JSON
    try {
        //convert data unkown to object
        var json = JSON.stringify(data);
        var objetoJS = JSON.parse(json);
        //imprime a temperatura e a data
        console.log("Temperatura: " + objetoJS.feeds[0].field2 + " Data: " + objetoJS.feeds[0].created_at);
    }
    catch (error) {
        console.log(error);
    }
}).catch(function (error) { return console.log(error); });
