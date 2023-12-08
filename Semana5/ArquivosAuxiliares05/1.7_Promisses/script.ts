//temperatura
//https://thingspeak.com/channels/1898908/field/2.json

// Cria uma nova Promise: Estado: pending
let buscaDados = new Promise((resolve, reject) => {
    // Busca dados da api do microclima da CEPLAC
    //simulando uma requisição assíncrona
    fetch('https://thingspeak.com/channels/1898908/field/2.json')
        .then(response => {
            //https://developer.mozilla.org/pt-BR/docs/Web/API/Response
            // se o response for ok, resolve the Promise com os dados do response convertidos para json
            if (response.ok) {
                //tipo unknown: Estado: resolved
                return response.json();
            } else {
                // Se o response não esta ok, rejeita a Promise com o status do response
                throw new Error(response.statusText);
            }
        })
        //tipo unknown: Estado: resolved
        .then(data => resolve(data))
        //Estado: rejected
        .catch(error => reject(error));
});

//usar a Promise
buscaDados.then(data => {
    //imprime o objeto JSON
    try{
        //convert data unkown to object
        const json = JSON.stringify(data);
        const objetoJS = JSON.parse(json);
        //imprime a temperatura e a data
        console.log("Temperatura: "+ objetoJS.feeds[0].field2 + " Data: " + objetoJS.feeds[0].created_at);
    }
    catch(error){
        console.log(error);
    }
}).catch(error => console.log(error));

