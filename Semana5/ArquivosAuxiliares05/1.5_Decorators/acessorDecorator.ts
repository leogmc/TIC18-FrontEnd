//Neste exemplo, LogAcessor é um decorator para modificadores de acesso (set, get)
// que envolve o getter e setter do modelo com funcionalidade de log.
// O decorator registra uma mensagem no console sempre que o getter ou setter é chamado.
// The Property Descriptor will be undefined if your script target is less than ES5.
function LogAcessor(target: any, nomePropriedade: string, descritor: PropertyDescriptor) {
   console.log('LogAcessor decorator chamado!');
   console.log('Target: ', target);
    console.log('Nome da propriedade: ', nomePropriedade);
    console.log('Descritor: ', descritor);
    return descritor;
}

class Carro {
    private _modelo: string;

    constructor(modelo: string) {
        this._modelo = modelo;
    }

    @LogAcessor
    get modelo() {
        return this._modelo;
    }

    set modelo(valor: string) {
        if (!valor) {
            throw new Error('Modelo inválido.');
        }
        this._modelo = valor;
    }
}

let carro = new Carro('Ford');
carro.modelo = 'Chevrolet'; // Logs: Definindo modelo para Chevrolet
console.log(carro.modelo); // Logs: Obtendo modelo



