function parametroDecorator(target, propertyKey, parameterIndex) {
    console.log('Parametro Decorator Chamado');
    console.log('Target: ', target);
    console.log('PropertyKey: ', propertyKey);
    console.log('ParameterIndex: ', parameterIndex);
}
var PC = /** @class */ (function () {
    function PC(modelo) {
        this.modelo = modelo;
        this.displayModelo(modelo);
    }
    PC.prototype.displayModelo = function (modelo) {
        console.log("Modelo: ".concat(modelo));
    };
    return PC;
}());
var notebook = new PC('Compaq');
