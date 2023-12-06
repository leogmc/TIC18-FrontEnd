  // Função para limpar a mensagem quando o input recebe foco
  function limparMensagem(input) {
    if (input.value === "Entre com uma tarefa") {
      input.value = '';
    }
  }

  class Tarefa {

    constructor(task){
        this.task = task;
    }

  }

function adicionaTarefaDOM(task){
    let taskItem = document.createElement('li');
    taskItem.textContent = task.description;

    document.getElementById('itemLista').appendChild(itemLista);
}