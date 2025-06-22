function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const lista = document.getElementById('listaTarefas');
    lista.innerHTML = '';
  
    tarefas.forEach((tarefa, index) => {
      const li = document.createElement('li');
      li.textContent = tarefa;
  
      const botoes = document.createElement('div');
  
      const btnEditar = document.createElement('button');
      btnEditar.textContent = 'Editar';
      btnEditar.onclick = () => {
        localStorage.setItem('modoEdicao', 'true');
        localStorage.setItem('indiceEdicao', index);
        window.location.href = 'form.html';
      };
  
      const btnExcluir = document.createElement('button');
      btnExcluir.textContent = 'Excluir';
      btnExcluir.onclick = () => {
        tarefas.splice(index, 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        carregarTarefas();
      };
  
      botoes.appendChild(btnEditar);
      botoes.appendChild(btnExcluir);
      li.appendChild(botoes);
      lista.appendChild(li);
    });
  }
  
  window.onload = carregarTarefas;
  