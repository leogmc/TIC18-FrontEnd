function logConstructor(constructor: Function) {
    console.log('A classe foi criada.', constructor);
    console.log('Modelo: ', constructor.prototype);
};


//decorator só é chamado quando a classe é definida
@logConstructor
class Aviao {
    constructor(public modelo: string, public capacidade: number) {
        this.modelo = modelo;
        this.capacidade = capacidade; 
    }

    public voar() {
        console.log('Voando...');
    };

    public aterrissar() {
        console.log('Aterrissando...');
    };
}

//decorator não é chamado quando a classe é instanciada
let aviao = new Aviao('Boeing 777', 500);

aviao.capacidade = 600;

// //##################################Decoratores Factory #######################################

// function logMessage(message: string) {
//     return function(constructor: Function) {
//         console.log(`${message} ${constructor}`); 
//         console.log('A classe foi criada.', constructor);

//     }
// }

// @logMessage('Definindo a classe:')
// class Airplane {
//     constructor(public modelo: string, public capacidade: number) {}
// }

// let planador = new Airplane('Planador', 1);


