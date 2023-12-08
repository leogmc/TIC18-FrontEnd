
//Generics 1
function funcaoGeneric<T>(arg: T): T {
    //Esta função aceita um argumento 'arg' do tipo 'T' e 
    //retorna um valor do tipo 'T'.
    //Dentro da função, simplesmente retornamos o argumento.
    //Isso pode não parecer muito útil,
    // mas significa que a função funciona para qualquer tipo 'T'.
    return arg;
}

let saida = funcaoGeneric<string>("Olá");
let saida2 = funcaoGeneric<number>(123);
let saida3 = funcaoGeneric<boolean>(true);


//Generics 2
//a classe DataStorage é um tipo genérico
//ela pode ser usada para armazenar qualquer tipo de dados
class DataStorage<T> {
    private data: T[] = [];

    adicionaItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data = this.data.filter(i => i !== item);
    }

    getItems() {
        return [...this.data];
    }
}

//cria um objeto DataStorage para armazenar strings
let texto = new DataStorage<string>();
texto.adicionaItem("oi");
texto.adicionaItem("tudo bom");
console.log(texto.getItems()); // saida: ["oi", "tudo bom"]

//cria um objeto DataStorage para armazenar numeros
let numeros = new DataStorage<number>();
numeros.adicionaItem(10);
numeros.adicionaItem(20);
console.log(numeros.getItems()); // saida: [10, 20]

//Generics 3

function getTamanho<T>(arg: T[]): number {
    // esta função aceita um argumento 'arg' do tipo 'T[]' e retorna um valor do tipo 'number'.
    return arg.length;
}

let arrayTamanho = getTamanho<number>([1, 2, 3, 4, 5]);
console.log(arrayTamanho); // saida: 5

let stringTamanho  = getTamanho<string>(['a', 'b', 'c', 'd', 'e']);
console.log(stringTamanho); // saida: 5

//Generics 4
function mergeArrays<T, U>(array1: T[], array2: U[]): (T | U)[] {
    return [...array1, ...array2];
}

let mergedArray = mergeArrays<number, string>([1, 2, 3], ['a', 'b', 'c']);
console.log(mergedArray); // saida: [1, 2, 3, 'a', 'b', 'c']


