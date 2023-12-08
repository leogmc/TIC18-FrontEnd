function propertyDec(target: any, propertyKey: string) {
    console.log('Property Decorator!');
    console.log('Target: ', target);
    console.log('PropertyKey: ', propertyKey);
}

class Car {
    @propertyDec
    public fabricante: string; 
    private _modelo: string; 
    public year: number;
    constructor(fabricante: string, model: string, year: number) {
            this.fabricante = fabricante;
            this._modelo = model;
            this.year = year;
        }

    displayCarInfo() {
        console.log(`Fabricante: ${this.fabricante}, 
                        Model: ${this.modelo},
                        Year: ${this.year}`
                    );
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(novoModelo: string) {
        if (!novoModelo) {
            throw new Error('Modelo inválido.');
        }
        this._modelo = novoModelo;
    }
}

let carro1 = new Car('Ford', 'Super Deluxe', 1941);
let carro2 = new Car('Chevrolet', 'Special Deluxe', 1940);
carro1.modelo = 'Mustang';

