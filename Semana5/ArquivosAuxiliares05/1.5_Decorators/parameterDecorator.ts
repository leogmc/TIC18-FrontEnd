function parametroDecorator(target: any, propertyKey: string, parameterIndex: number) {
    console.log('Parametro Decorator Chamado');
    console.log('Target: ', target);
    console.log('PropertyKey: ', propertyKey);
    console.log('ParameterIndex: ', parameterIndex);
}

class PC {
    public modelo: string;
    constructor(modelo: string) {
        this.modelo = modelo;
        this.displayModelo(modelo);
    }

    displayModelo(@parametroDecorator modelo: string) {
        console.log(`Modelo: ${modelo}`);
    }
}

var notebook = new PC('Compaq'); 