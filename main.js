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
    editOption.style.color="green"
    menu.appendChild(editOption);

    const deleteOption = document.createElement("span");
    deleteOption.classList.add("fa-solid", "fa-trash" );
    deleteOption.style.color="red"
    menu.appendChild(deleteOption);

    itemTask.textContent = newTask;

    taskList.appendChild(itemTask);
    itemTask.appendChild(ellipsisIcon);
    itemTask.appendChild(menu);

    ellipsisIcon.addEventListener("click", () => {
      menu.style.visibility = "visible";
      menu.style.position = "absolute";
      menu.style.right = "0";
      menu.style.margin = "0 25px";
      ellipsisIcon.style.visibility = "hidden";
    });

    // Ao clicar fora, volta para o ícone de elipsis
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && event.target !== ellipsisIcon) {
        menu.style.visibility = "hidden"; // Esconde o menu
        ellipsisIcon.style.visibility = "visible"; // Mostra o ícone de elipsis novamente
      }
    });

    deleteOption.addEventListener("click", () => {
      itemTask.remove();
      menu.remove();
    });

    editOption.addEventListener("click", () => {});

    // Limpa o campo de entrada após adicionar
    inputTask.value = "";
  } else {
    alert("Adicione uma tarefa!");
  }
});
