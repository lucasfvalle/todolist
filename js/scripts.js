document.addEventListener("DOMContentLoaded", () => {
    

    console.log("DOM carregado!");

    const newTask = document.getElementById('new-task');
    const newTaskButton = document.getElementsByTagName("button")[0];
    const toDoList = document.getElementById('todo-list');
    var TaskName;
    var itemId = 0;
    let nullList = document.getElementById('null-list');
    
    // Valor do Input
    newTask.addEventListener("input",() =>{
        TaskName = newTask.value;
    });
    newTaskButton.addEventListener("click", () =>{
        if(TaskName == "" || TaskName == null || TaskName == " "){
            alert("Insira o nome da tarefa!")
        }else{
            // Indice do item
            itemId++;
            // Cria o item da lista
            let listItem = document.createElement('li');

            // Icone da tarefa
            let taskIcon = document.createElement('i');
            taskIcon.classList = "bi bi-list";

            // Nome da tarefa
            let taskNameSpan = document.createElement('span');
            taskNameSpan.appendChild(document.createTextNode(TaskName));

            // Checkbox da tarefa
            let checkDone = document.createElement('input');
            checkDone.type = 'checkbox';
            checkDone.classList = "done-check";
            checkDone.innerHTML = "Concluída";


            // Botão de excluir tarefa
            let deleteButton = document.createElement('button');
            deleteButton.classList = "delete-button";
            let deleteIcon = document.createElement('i');
            deleteIcon.classList = "bi bi-trash";
            deleteButton.appendChild(deleteIcon);
            deleteButton.setAttribute("id", "delete-button");

            // Adiciona classe ao item da lista 
            listItem.className = "todo-item";
            // Adiciona os elementos que compoe um item
            listItem.appendChild(taskIcon);
            listItem.appendChild(taskNameSpan);
            listItem.appendChild(checkDone);
            listItem.appendChild(deleteButton);

            listItem.setAttribute('id', itemId);

            // Adiciona o item a lista
            toDoList.appendChild(listItem);
            newTask.value = "";

            // Verifica tarefa concluída
           checkDone.addEventListener("change", () =>{
            console.log("teste");
            listItem.classList.toggle('done');
           })

            // Deleta tarefa
            deleteButton.addEventListener("click", () =>{
                var idPai = listItem.getAttribute('id');
                var deletaPai = document.getElementById(idPai);
                // Exibe id do elemento pai a ser deletado (id da li)
                console.log("Id elemento pai: " + idPai)
                // Remove o item da lista
                toDoList.removeChild(deletaPai);
            })



            
       

        }
    });
})


    
