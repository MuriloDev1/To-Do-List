/* Armazena valores de input, buttons (addTask) e lista (taskList) */
const inputTask = document.getElementById("newTask");
const addTask = document.getElementById("addTask");
const listTask = document.getElementById("listTask");
const clearAll = document.getElementById("clearAll");

// Array dinâmico para armazenar as tarefas
let arrayTasks = [];

// Adicionar tarefa
addTask.addEventListener("click", () => {
  const newTask = inputTask.value.trim();

  if (newTask !== "") {
    // Criar a tarefa e armazenar no array
    const taskObject = { id: Date.now(), text: newTask };
    arrayTasks.push(taskObject);

    // Criar o elemento li da lista
    const itemTask = document.createElement("li");
    const textSpan = document.createElement("span"); // Para armazenar apenas o texto
    textSpan.textContent = newTask;
    itemTask.setAttribute("data-id", taskObject.id); // Adiciona um identificador único

    // Criar o ícone de opções
    const ellipsisIcon = document.createElement("i");
    ellipsisIcon.classList.add("fa-solid", "fa-ellipsis");

    // Criar menu de opções
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.style.visibility = "hidden";

    // Opções do menu: Editar e Excluir
    const editOption = document.createElement("i");
    editOption.classList.add("fa-solid", "fa-pen-to-square");
    editOption.style.color = "green";

    const deleteOption = document.createElement("span");
    deleteOption.classList.add("fa-solid", "fa-trash");
    deleteOption.style.color = "red";

    // Adiciona opções ao menu
    menu.appendChild(editOption);
    menu.appendChild(deleteOption);

    // Adiciona elementos à tarefa
    itemTask.appendChild(textSpan);
    itemTask.appendChild(ellipsisIcon);
    itemTask.appendChild(menu);
    listTask.appendChild(itemTask);

    // Evento para mostrar o menu ao clicar no ícone
    ellipsisIcon.addEventListener("click", () => {
      menu.style.visibility = "visible";
      ellipsisIcon.style.visibility = "hidden";
      menu.style.position = "absolute";
      menu.style.right = "0";
      menu.style.margin = "0 30px";
    });

    // Esconder o menu ao clicar fora
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && event.target !== ellipsisIcon) {
        menu.style.visibility = "hidden";
        ellipsisIcon.style.visibility = "visible";
      }
    });

    // Função para excluir tarefa
    deleteOption.addEventListener("click", () => {
      const taskId = itemTask.getAttribute("data-id");
      arrayTasks = arrayTasks.filter((task) => task.id != taskId); // Remove do array
      itemTask.remove(); // Remove do DOM
    });

    // Função para editar tarefa
    editOption.addEventListener("click", () => {
      const newText = prompt(`Edite sua tarefa: ${textSpan.textContent}`);
      if (newText) {
        textSpan.textContent = newText;

        // Atualiza o array
        const taskId = itemTask.getAttribute("data-id");
        arrayTasks = arrayTasks.map((task) =>
          task.id == taskId ? { ...task, text: newText } : task
        );
      }
    });

    // Limpa o input
    inputTask.value = "";
  } else {
    alert("Adicione uma tarefa!");
  }
});

// Clear All (Limpar todas as tarefas)
clearAll.addEventListener("click", () => {
  listTask.innerHTML = ""; // Remove todas as tarefas do DOM
  arrayTasks = []; // Esvazia o array
});
