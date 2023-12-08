//utilizando async await
//Funções assíncronas sempre retornam Promises.
async function buscaPaises(){
    const resposta = await fetch('https://restcountries.com/v3.1/all');
    const paises = await resposta.json();
    const arrayNomePaises = paises.map( (pais:any) => pais.name.common);
    if(resposta.status !== 200)
        throw new Error("Erro na chamada da API");
    else
        return arrayNomePaises;
}
