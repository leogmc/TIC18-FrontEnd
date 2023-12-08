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
function metodoDecorator(target, propertyKey, descriptor) {
    console.log('Método decorator!');
    console.log('Target: ', target);
    console.log('PropertyKey: ', propertyKey);
    console.log('Descriptor: ', descriptor);
}
var Carros = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _drive_decorators;
    return _a = /** @class */ (function () {
            function Carros(modelo) {
                this.modelo = (__runInitializers(this, _instanceExtraInitializers), modelo);
            }
            Carros.prototype.drive = function (speed) {
                console.log("".concat(this.modelo, " est\u00E1 dirigindo a ").concat(speed, " km/h"));
            };
            return Carros;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _drive_decorators = [metodoDecorator];
            __esDecorate(_a, null, _drive_decorators, { kind: "method", name: "drive", static: false, private: false, access: { has: function (obj) { return "drive" in obj; }, get: function (obj) { return obj.drive; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var car = new Carros('Ford');
car.drive(100);
car.drive(200);
// Note que o decorator de método é chamado quando o método é definido na classe
// e não quando é chamado.
