class Aviao {
    
    // Define as propriedades ou insere os modificadores no construtor 
    //que automaticamente cria as propriedades
    //private modelo: string;
    //private capacidade: number;


    // Define o construtor
    constructor(private modelo: string, private capacidade: number) {
        this.modelo = modelo;
        this.capacidade = capacidade;
    }

    // Define um método para obter o modelo
    getModelo(): string {
        return this.modelo;
    }

    // Define um método para obter a capacidade
    getCapacidade(): number {
        return this.capacidade;
    }

    // Define um método para exibir informações do avião
    exibirInformacoes(): void {
        console.log(`Modelo: ${this.modelo}, Capacidade: ${this.capacidade}`);
    }
}

// Cria uma instância da classe Aviao
let aviao = new Aviao("Boeing 747", 366);
let aviao2 = new Aviao("Boeing 777", 550);
let ww2Aviao = new Aviao("Spitfire", 1);

console.log(aviao.getModelo());
console.log(aviao.getCapacidade());
