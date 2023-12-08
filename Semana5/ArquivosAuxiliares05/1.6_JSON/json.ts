//objeto JS
const Aviao = {
    nome: 'Avião',
    preco: 3000000,
    caracteristicas: {
        motor: '5000cc',
        portas: 4
    }
};

//converte o objeto JS para JSON
//no caso, o objeto Aviao
const JSONAviao = JSON.stringify(Aviao);

//imprime o objeto JSON
console.log(JSONAviao);

//converte o JSON para objeto JS
const objetoJS = JSON.parse(JSONAviao);



