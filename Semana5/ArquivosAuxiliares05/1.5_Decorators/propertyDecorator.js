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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
function propertyDec(target, propertyKey) {
    console.log('Property Decorator!');
    console.log('Target: ', target);
    console.log('PropertyKey: ', propertyKey);
}
var Car = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _fabricante_decorators;
    var _fabricante_initializers = [];
    return _a = /** @class */ (function () {
            function Car(fabricante, model, year) {
                this.fabricante = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _fabricante_initializers, void 0));
                this.fabricante = fabricante;
                this._modelo = model;
                this.year = year;
            }
            Car.prototype.displayCarInfo = function () {
                console.log("Fabricante: ".concat(this.fabricante, ", \n                        Model: ").concat(this.modelo, ",\n                        Year: ").concat(this.year));
            };
            Object.defineProperty(Car.prototype, "modelo", {
                get: function () {
                    return this._modelo;
                },
                set: function (novoModelo) {
                    if (!novoModelo) {
                        throw new Error('Modelo inválido.');
                    }
                    this._modelo = novoModelo;
                },
                enumerable: false,
                configurable: true
            });
            return Car;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _fabricante_decorators = [propertyDec];
            __esDecorate(null, null, _fabricante_decorators, { kind: "field", name: "fabricante", static: false, private: false, access: { has: function (obj) { return "fabricante" in obj; }, get: function (obj) { return obj.fabricante; }, set: function (obj, value) { obj.fabricante = value; } }, metadata: _metadata }, _fabricante_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var carro1 = new Car('Ford', 'Super Deluxe', 1941);
var carro2 = new Car('Chevrolet', 'Special Deluxe', 1940);
carro1.modelo = 'Mustang';
