var formulario = document.getElementById('formulario');

// Adiciona um ouvinte de evento 'submit' no formulário
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    inserirInformacoes(); // Chama a função para inserir as informações
});


function inserirInformacoes() {

    //Captura os valores inseridos pelo usuário
    var imagem = document.getElementById('imagem').value;
    var titulo = document.getElementById('titulo').value;

    // Captura o valor do campo de radio selecionado
    var tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
    var tipo = tipoSelecionado ? tipoSelecionado.value : 'Nenhum selecionado';

    var diaria = document.getElementById('diaria').value;
    var adicional = document.getElementById('adicional').value;
    var preco = document.getElementById('preco').value;

    // Captura o valor do campo de radio selecionado
    var taxaSelecionada = document.querySelector('input[name="taxa"]:checked');
    var taxa = taxaSelecionada ? taxaSelecionada.value : 'Nenhum selecionado';

    var parcela = document.getElementById('parcela').value;

    // Cria uma string com as informações para serem inseridas no HTML
    var informacoesHTML = "<br> <div class= 'x'>" +
        "<div class='destino'> <img class='foto' src=" + imagem + ">" +
        "<h3 class='titulo'>" + titulo + "</h3>" +
        "<ul class='check'>" +
        "<li>" + tipo + "</li>" +
        "<li>" + diaria + " diárias</li>" +
        "<li>" + adicional + "</li>" +
        "</ul>" +
        "<h2 class='preco'>R$" + preco + "</h2>" +
        "<h5 class='taxa'>" + taxa + "</h5>" +
        "<h5 class='vezes'>Em até " + parcela + "x sem Juros</h5>" +
        "<input type='button' value='Comprar' class='botao'>" +
        "</div>" +
        "</div>";

    // Insere as informações na div com id "destinos"
    document.getElementById('destinos').innerHTML = informacoesHTML;

}