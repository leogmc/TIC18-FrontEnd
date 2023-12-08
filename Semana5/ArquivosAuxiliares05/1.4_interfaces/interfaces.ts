
//definicão de uma interface
//Tudo que um objeto precisa ter para ser considerado um aviao
interface interfaceAviao {
    modelo: string;
    capacidade: number;
    getModelo(): string;
    getCapacidade(): number;
    exibirInformacoes(): void;
}

//definicão de uma classe que implementa a interface Aviao
class Aviao implements interfaceAviao {
    constructor(public modelo: string, public capacidade: number) {}

    getModelo(): string {
        return this.modelo;
    }

    getCapacidade(): number {
        return this.capacidade;
    }

    exibirInformacoes(): void {
        console.log(`Modelo: ${this.modelo}, Capacidade: ${this.capacidade}`);
    }
}


