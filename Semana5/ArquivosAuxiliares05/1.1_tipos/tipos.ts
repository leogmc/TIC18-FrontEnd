//Tipos primitivos
let cpf:number = 12345678900;
let endereco: string = "Rua dos bobos, 0";
let booleano: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;
let numero: number = 3.14;

//Union Types
let cpf2: number | string = 12345678900;
cpf2 = "123.456.789-00";
//Está ok, pois pode ser number ou string

//Tipos Complexos
//Array
let avioesww2: string[] = ["Spitfire", "Mustang", "Zero"];
//Object
let pessoa: {nome: string, idade: number} = {nome: "João", idade: 20};
//cria a pessoa2 objeto
let pessoa2: {
    nome: string,
    idade: number
};
pessoa2 = {
    nome: "João",
    idade: 20
};
//Array de objetos
let Pessoas: {
    nome: string,
    idade: number
}[] = [pessoa, pessoa2];

console.log(Pessoas);
console.log(Pessoas[0]);
console.log(Pessoas[1]);
console.log(Pessoas[0].nome);
console.log(Pessoas[0].idade);  
console.log(Pessoas[1].nome);
console.log(Pessoas[1].idade);

//Type Alias
type Pessoa = {
    nome: string,
    idade: number
};

let pessoa3: Pessoa = {
    nome: "João",
    idade: 20
};

type Motor = {
    potencia: number,
    cilindrada: number
};

//Type Alias
let motor: Motor = {
    potencia: 1000,
    cilindrada: 1000
};

//Função que retorna um número
function multi2Numeros(a: number, b:number): number{
    return a * b;
}

//Função que retorna void
function imprimeTexto(texto: string): void{
    console.log(texto);
}


