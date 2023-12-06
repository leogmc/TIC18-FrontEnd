//exemplo do método querySelector
document.querySelector('h1').textContent = 'Diga ae, DOM!';
document.querySelector('p').textContent = 'Estou aprendendo javascript!';


//Exemplo do método createElement
let novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Esse parágrafo foi criado com javascript!';
//document.querySelector('body').appendChild(novoParagrafo);
document.body.appendChild(novoParagrafo);

//Exemplo do método innerHTML
let div = document.createElement('div');
div.innerHTML = '<h2>Este é um exemplo de heading</h2><p>Parágrafo criado com javascript utilizando innerHTML</p>';
document.body.appendChild(div);

//exemplo do método getElementById
let myDiv = document.getElementById('myDiv');
myDiv.textContent = 'texto configurado utilizando o método getElementById';

//exemplo do método getElementsByClassName
let elementos = document.getElementsByClassName('minhaClasse');

for(let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = 'Texto gerado utilizando o método getElementsByClassName.';
}

//exemplo do método getElementsByTagName
//esse metodo retorna um HTMLCollection, que na verdade não é um array, mas pode ser convertido em um 
//array utilizando o método Array.from()

let paragrafos = document.getElementsByTagName('p');

Array.from(paragrafos).forEach(elemento => {
    elemento.textContent = 'Texto gerado utilizando o método getElementsByTagName.';
});
//ou
//[...paragrafos].forEach(elemento => {
//    elemento.textContent = 'Texto gerado utilizando o método getElementsByTagName.';
//});

//exemplo do método querySelectorAll
let images = document.querySelectorAll('.imagensClasses');

images.forEach((image, index) => {
    image.alt = `Esta é a imagem número ${index + 1} configurada pelo JavaScript utilizando o método querySelectorAll.`
});

//exemplo do método replaceChild
let minhaDiv = document.getElementById('minhaDiv');
let oldP = document.getElementById('oldP');

let novoP = document.createElement('p');
novoP.textContent = 'Este é um novo paragráfo para substituir o parágrafo antigo.';

minhaDiv.replaceChild(novoP, oldP);

//exemplo do metódo getAttribute
let minhaImagem = document.getElementById('minhaImagem');
let src = minhaImagem.getAttribute('src');

alert(src); //

//exemplo do método setAttribute
let minhaImagem2 = document.getElementById('minhaImagem2');
minhaImagem2.setAttribute('src', './assets/imgs/uesc.jpg'); //altera o valor do atributo src da imagem