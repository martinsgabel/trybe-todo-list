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




//APAGANDO TAREFAS (10)
function deleteTarefa () {
    // for (let i = tarefaList.length-1; i >= 0; i--){
    //     // let deletation = deleteItems[i];    
    //     // tarefaList.removeChild(deletation); 
    //     console.log(deleteItems);
    //     deleteItems[i].remove();
    // }

    tarefaList.innerHTML = "";
}

let deleteButton = document.getElementById("apaga-tudo");

deleteButton.addEventListener("click", deleteTarefa);

tarefaList = document.getElementById("lista-tarefas");




//CLICANDO NA TAREFA, FUNDO CINZA (7)
function clickedTarefa (event) {
    let tarefaItem = document.getElementsByTagName("li");

    for (let x of tarefaItem) {
        x.classList.remove('clicked-item');
    }

    // for (let x = 0; x < tarefaItem.lenght; x++) {
    //     tarefaItem[x].classList.remove('clicked-item');
    // }

    let tarefa = event.target;
    tarefa.classList.add('clicked-item');
}

tarefaList.addEventListener("click", clickedTarefa);



//RISCAR TAREFA (9)
function riscarTarefa (event) {
    let tarefaItem = document.getElementsByTagName("li");

    for (let x of tarefaItem) {
        x.classList.remove('clicked-item');
    }

    let tarefa = event.target;
    tarefa.classList.add('completed');
}

tarefaList.addEventListener("dblclick", riscarTarefa);



//REMOVER RISCADO (11)**

function deleteTarefaCompleted () {
    

    console.log(document.getElementsByClassName("completed"));
}

let deleteCompleted = document.getElementById("remover-finalizados");

deleteCompleted.addEventListener("click", deleteTarefaCompleted);

tarefaList = document.getElementById("lista-tarefas");
