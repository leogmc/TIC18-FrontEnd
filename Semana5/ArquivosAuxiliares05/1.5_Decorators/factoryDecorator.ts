function criarElementoDOM(tag: string, content: string) {
    return function(constructor: Function) {
        let elemento = document.createElement(tag);
        let elemento2 = document.createElement(tag);
        //elemento.textContent = `${content} ${constructor.name} ${constructor.length}`;
        elemento.textContent = content + ":" + constructor.name;
        elemento2.textContent = "Numero de parâmtro da classe: " + constructor.length
        document.body.appendChild(elemento);
        document.body.appendChild(elemento2);
    }
}

@criarElementoDOM('h1', 'Nome da classe')
class Ultraleve {
    constructor(public model: string, public capacity: number) {}
}

let plane = new Ultraleve('Boeing 777', 500);
let plane2 = new Ultraleve('pilatus', 2);
let plane3 = new Ultraleve('Cirrus', 4);