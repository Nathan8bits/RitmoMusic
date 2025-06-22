/*const simbolos = ['𝄻', '𝄼', '𝄽', '𝄾', '𝄿', '𝅝', '𝅗𝅥', '𝅘𝅥', '𝅘𝅥𝅮', '𝅘𝅥𝅯'];

const container = document.querySelector('.ritmos');

// Limpa a div inicialmente (opcional)
container.textContent = '';

const botoes = document.querySelectorAll('#containerBotoes button');

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    const simbolo = btn.getAttribute('data-simbolo');

    // Adiciona o símbolo ao final do conteúdo da div
    container.textContent += simbolo + ' ';
  });
});

*/

const simbolos = {
  soo: ['𝅝', 16],  // semibreve
  mio: ['𝅗𝅥', 8],  // mínima
  seo: ['𝅘𝅥', 4],  // semínima
  coo: ['𝅘𝅥𝅮', 2],  // colcheia
  sco: ['𝅘𝅥𝅯', 1],  // semicolcheia

  spo: ['𝄻', 16],  // pausa semibreve
  mpo: ['𝄼', 8], // pausa mínima
  sep: ['𝄽', 4], // pausa semínima
  cpo: ['𝄾', 2],  // pausa colcheia
  scp: ['𝄿', 1]  // pausa semicolcheia
};

const container = document.querySelector('.ritmos');
container.textContent = '';

const botoes = document.querySelectorAll('#containerBotoes button');

var musica = {
  notas: [],
  valor: 0
}

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    const codigo = btn.getAttribute('data-simbolo');
    const simboloReal = simbolos[codigo]?.[0];
    musica.push(codigo);

    if (simboloReal) {
      container.textContent += simboloReal + ' ';
    }
    console.log(musica)
  });
});

document.getElementById('apagar').addEventListener('click', () => {
  // Divide a string corretamente em "caracteres visuais"
  const chars = Array.from(container.textContent.trimEnd());

  // Remove o último caractere visual
  chars.pop();

  // Atualiza o conteúdo
  container.textContent = chars.join('').trimEnd();
});


