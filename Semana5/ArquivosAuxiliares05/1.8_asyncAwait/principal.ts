// //Promise
 fetch('https://restcountries.com/v3.1/all')
 .then (function response(resposta){
     return resposta.json();
 })
 .then(function (paises){
     let arrayNomePaises =  paises.map( (pais:any) => pais.name.common);
     return arrayNomePaises;
 })
 .then(function (paises){
     paises.forEach((elemento:any) => console.log("pais: "+elemento));
 })
 .catch(function (error){
        console.error('Erro com a chamada fetch: ', error);
 });

//utilizando promise e arrow function
fetch('https://restcountries.com/v3.1/all')
.then (resposta => resposta.json())
.then(paises => paises.map( (pais:any) => pais.name.common))
.then (paises => paises.forEach((elemento:any) => console.log("p::=> "+elemento)))
.catch(error => console.error('Erro com a chamada fetch: ', error));

//utilizando async await
//Funções assíncronas sempre retornam Promises.
async function buscaPaises(){
    try{
        const resposta = await fetch('https://restcountries.com/v3.1/all');
        const paises = await resposta.json();
        const arrayNomePaises = paises.map( (pais:any) => pais.name.common);
        return arrayNomePaises;
    }
    catch(error){
        console.error('Erro com a chamada fetch: ', error);
    }
}

//utilizando async await
//Funções assíncronas sempre retornam Promises.
//Versão 2 com tratamento de erro diferente
async function buscaPaises2(){
    const resposta = await fetch('https://restcountries.com/v3.1/all');
    const paises = await resposta.json();
    const arrayNomePaises = paises.map( (pais:any) => pais.name.common);
    if(resposta.status !== 200)
        throw new Error("Erro na chamada da API");
    else
        return arrayNomePaises;
}

//chamada da funcao buscaPaises
buscaPaises().then(paises => paises.forEach((elemento:any) => console.log("P==>: "+elemento)));



