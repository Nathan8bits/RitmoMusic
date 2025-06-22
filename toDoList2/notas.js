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
  soo: '𝅝',  // semibreve
  mio: '𝅗𝅥',  // mínima
  seo: '𝅘𝅥',  // semínima
  coo: '𝅘𝅥𝅮',  // colcheia
  sco: '𝅘𝅥𝅯',  // semicolcheia

  spo: '𝄻',  // pausa semibreve
  mpo: '𝄼',  // pausa mínima
  sep: '𝄽', // pausa semínima
  cpo: '𝄾',  // pausa colcheia
  scp: '𝄿'  // pausa semicolcheia
};

const container = document.querySelector('.ritmos');

// Limpa a div inicialmente (opcional)
container.textContent = '';

const botoes = document.querySelectorAll('#containerBotoes button');

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    const codigo = btn.getAttribute('data-simbolo');
    const simboloReal = simbolos[codigo];

    if (simboloReal) {
      container.textContent += simboloReal + ' ';
    }
  });
});

document.getElementById('apagar').addEventListener('click', () => {
  const atual = container.textContent.trimEnd();

  // Remove o último caractere visível (símbolo)
  container.textContent = atual.slice(0, atual.length - 1).trimEnd();
});

