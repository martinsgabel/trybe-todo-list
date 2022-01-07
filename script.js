//ADICIONANDO TAREFAS
let tarefaButton = document.getElementById("criar-tarefa");

tarefaButton.addEventListener("click", addTarefaButton);

function addTarefaButton() {
    if (document.getElementById("texto-tarefa").value != "") {
        let novaTarefa = document.getElementById("texto-tarefa").value;

        let tarefaList = document.getElementById("lista-tarefas");
        let tarefaItem = document.createElement('li');
        tarefaItem.innerText = novaTarefa;

        tarefaList.appendChild(tarefaItem);

        //ajuda para limpar o campo do input através do link https://stackoverflow.com/questions/4135818/how-to-clear-a-textbox-using-javascript
        document.getElementById("texto-tarefa").value = ""; 
        
        /*let vazioHolder = document.querySelector(".vazio");
        tarefaList.removeChild(vazioHolder);*/
    }
}

//APAGANDO TAREFAS
let deleteButton = document.getElementById("apaga-tudo");
let deleteItems = document.getElementsByTagName("li");
tarefaList = document.getElementById("lista-tarefas");

deleteButton.addEventListener("click", deleteTarefaButton);

/*let vazioPlaceHolder = document.createElement('p');
vazioPlaceHolder.classList.add(".vazio");
vazioPlaceHolder.innerText = "Lista Vazia";*/

function deleteTarefaButton () {
    for (let i = 0; i < deleteItems.length; i += 1) {
        let deletation = deleteItems[i];    
        tarefaList.removeChild(deletation); 
    }    
}

//ALTERANDO A COR DE FUNDO DO ITEM LISTA
let itensLista = document.querySelectorAll("li");

for (i = 0; i < itensLista.length; i += 1) {
    itensLista[i].addEventListener('change', alteraCor);
}

function alteraCor() {
    
}