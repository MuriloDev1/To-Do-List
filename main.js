/* Armazena valores de input, buttons (addTask) e lista (taskList) */
const inputTask = document.getElementById("newTask");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  newTask = inputTask.value.trim();

  if (newTask !== "") {
    // Cria o elemento de li a lista
    const itemTask = document.createElement("li");
    // Cria o icone ao li
    const ellipsisIcon = document.createElement("i");
    ellipsisIcon.classList.add("fa-solid", "fa-ellipsis");
    // Cria menu
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.style.visibility = "hidden";

    // Adiciona opções de editar e excluir menu
    const editOption = document.createElement("i");
    editOption.classList.add("fa-solid", "fa-pen-to-square");
    menu.appendChild(editOption);

    const deleteOption = document.createElement("span");
    deleteOption.classList.add("fa-solid", "fa-trash");
    menu.appendChild(deleteOption);

    itemTask.textContent = newTask;

    taskList.appendChild(itemTask);
    itemTask.appendChild(ellipsisIcon);
    taskList.appendChild(menu);

    ellipsisIcon.addEventListener("click", () => {
      menu.style.visibility = "visible";
    });

    // Limpa o campo de entrada após adicionar
    inputTask.value = "";
  } else {
    alert("Adicione uma tarefa!");
  }
});
