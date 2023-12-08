var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
//Neste exemplo, LogAcessor é um decorator para modificadores de acesso (set, get)
// que envolve o getter e setter do modelo com funcionalidade de log.
// O decorator registra uma mensagem no console sempre que o getter ou setter é chamado.
// The Property Descriptor will be undefined if your script target is less than ES5.
function LogAcessor(target, nomePropriedade, descritor) {
    console.log('LogAcessor decorator chamado!');
    console.log('Target: ', target);
    console.log('Nome da propriedade: ', nomePropriedade);
    console.log('Descritor: ', descritor);
    return descritor;
}
var Carro = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _get_modelo_decorators;
    return _a = /** @class */ (function () {
            function Carro(modelo) {
                this._modelo = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this._modelo = modelo;
            }
            Object.defineProperty(Carro.prototype, "modelo", {
                get: function () {
                    return this._modelo;
                },
                set: function (valor) {
                    if (!valor) {
                        throw new Error('Modelo inválido.');
                    }
                    this._modelo = valor;
                },
                enumerable: false,
                configurable: true
            });
            return Carro;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _get_modelo_decorators = [LogAcessor];
            __esDecorate(_a, null, _get_modelo_decorators, { kind: "getter", name: "modelo", static: false, private: false, access: { has: function (obj) { return "modelo" in obj; }, get: function (obj) { return obj.modelo; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var carro = new Carro('Ford');
carro.modelo = 'Chevrolet'; // Logs: Definindo modelo para Chevrolet
console.log(carro.modelo); // Logs: Obtendo modelo
