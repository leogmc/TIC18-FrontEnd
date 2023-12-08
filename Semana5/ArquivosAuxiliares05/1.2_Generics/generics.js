var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Generics 1
function funcaoGeneric(arg) {
    //Esta função aceita um argumento 'arg' do tipo 'T' e 
    //retorna um valor do tipo 'T'.
    //Dentro da função, simplesmente retornamos o argumento.
    //Isso pode não parecer muito útil,
    // mas significa que a função funciona para qualquer tipo 'T'.
    return arg;
}
var saida = funcaoGeneric("Olá");
var saida2 = funcaoGeneric(123);
var saida3 = funcaoGeneric(true);
//Generics 2
//a classe DataStorage é um tipo genérico
//ela pode ser usada para armazenar qualquer tipo de dados
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.adicionaItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data = this.data.filter(function (i) { return i !== item; });
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
//cria um objeto DataStorage para armazenar strings
var texto = new DataStorage();
texto.adicionaItem("oi");
texto.adicionaItem("tudo bom");
console.log(texto.getItems()); // saida: ["oi", "tudo bom"]
//cria um objeto DataStorage para armazenar numeros
var numeros = new DataStorage();
numeros.adicionaItem(10);
numeros.adicionaItem(20);
console.log(numeros.getItems()); // saida: [10, 20]
//Generics 3
function getTamanho(arg) {
    // esta função aceita um argumento 'arg' do tipo 'T[]' e retorna um valor do tipo 'number'.
    return arg.length;
}
var arrayTamanho = getTamanho([1, 2, 3, 4, 5]);
console.log(arrayTamanho); // saida: 5
var stringTamanho = getTamanho(['a', 'b', 'c', 'd', 'e']);
console.log(stringTamanho); // saida: 5
//Generics 4
function mergeArrays(array1, array2) {
    return __spreadArray(__spreadArray([], array1, true), array2, true);
}
var mergedArray = mergeArrays([1, 2, 3], ['a', 'b', 'c']);
console.log(mergedArray); // saida: [1, 2, 3, 'a', 'b', 'c']
