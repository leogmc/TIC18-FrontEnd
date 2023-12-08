function metodoDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Método decorator!');
    console.log('Target: ', target);
    console.log('PropertyKey: ', propertyKey);
    console.log('Descriptor: ', descriptor);
}

class Carros {
    constructor(public modelo: string) {}

    @metodoDecorator
    drive(speed: number) {
        console.log(`${this.modelo} está dirigindo a ${speed} km/h`);
    }
}

let car = new Carros('Ford');
car.drive(100);
car.drive(200);
// Note que o decorator de método é chamado quando o método é definido na classe
// e não quando é chamado.