window.onload = function () {
  const modoEdicao = localStorage.getItem('modoEdicao') === 'true';
  const titulo = document.getElementById('titulo');
  const input = document.getElementById('inputTarefa');

  if (modoEdicao) {
    const index = localStorage.getItem('indiceEdicao');
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    input.value = tarefas[index];
    titulo.textContent = "Editar Tarefa";
  } else {
    titulo.textContent = "Nova Tarefa";
  }
};

function salvarTarefa() {
  const input = document.getElementById('inputTarefa');
  const texto = input.value.trim();
  if (!texto) return;

  const modoEdicao = localStorage.getItem('modoEdicao') === 'true';
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  if (modoEdicao) {
    const index = localStorage.getItem('indiceEdicao');
    tarefas[index] = texto;
  } else {
    tarefas.push(texto);
  }

  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  localStorage.removeItem('modoEdicao');
  localStorage.removeItem('indiceEdicao');

  window.location.href = 'index.html';
}
