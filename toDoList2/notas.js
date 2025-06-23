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



// Cada Nota é representada como um vetor de strings
class Nota {
  constructor() {
    this.atomo = [];
    this.simbolo = [];
  }
  adicionarNota(valor) {
    //this.atomo.push([])
    this.atomo.push(valor[1]);
    this.simbolo.push(valor[0]);
    //this.compassos[this.indexCompasso].notas.push(new Nota());
  }
}

// Um compasso é um vetor de notas
class Compasso {
  constructor() {
    this.notas = [new Nota([])]
    //this.notas = notas.map(n => new Nota(n)); // cria Notas a partir dos vetores de string
  }
}

// Uma música tem um vetor de compassos e um título
class Musica {
  constructor(titulo = "") {
    this.titulo = titulo;
    this.compassos = [
      new Compasso([])
    ]; // vetor de objetos Compasso
    this.indexCompasso = 0;
    this.indexNota = 0;
    this.somaCompasso = 0;
    this.somaNota = 0;
    this.ultimoAtomo = 0;
  }

  adicionarCompasso(compasso) {
    this.compassos.push(compasso);
  }

  proximoCompasso() {
    this.indexCompasso++;
    this.indexNota = 0;
    this.somaCompasso = 0;
    this.somaNota = 0;
    this.ultimoAtomo = 0;
    container.textContent += '| ';
    console.log("barra de compasso")
    
    this.compassos.push(new Compasso());
  }

  proximaNota() {
    this.indexNota++;
    this.ultimoAtomo = 0;
    this.somaNota = 0;

    this.compassos[this.indexCompasso].notas.push(new Nota());
  }

  agrupar(atomo) {

    //this.compassos[n].notas[m].adicionar(atomo)
    if (atomo[1] <= 16 && atomo[1] >= 4 && (atomo[1] + this.somaCompasso) == 16)  
    {
      container.textContent += atomo[0];
      console.log('opcao 1')
      this.compassos[this.indexCompasso].notas[this.indexNota].adicionarNota(atomo);
      this.proximoCompasso();
    }
    else if(atomo[1] <= 16 && atomo[1] >= 4 && (atomo[1] + this.somaCompasso) < 16) 
    {
      container.textContent += atomo[0];
      console.log('opcao 2')
      this.compassos[this.indexCompasso].notas[this.indexNota].adicionarNota(atomo);
      this.somaCompasso += atomo[1];   
      this.proximaNota();
    } 
    else if ((atomo[1] == 2 || atomo[1] == 1) && (atomo[1] + this.somaNota) == 4 && (atomo[1] + this.somaCompasso == 16))
    {
      container.textContent += atomo[0];
      console.log("opcao 3")
      this.compassos[this.indexCompasso].notas[this.indexNota].adicionarNota(atomo);
      this.proximoCompasso();
    }
    else if ((atomo[1] == 2 || atomo[1] == 1) && (atomo[1] + this.somaNota) == 4 && (atomo[1] + this.somaCompasso < 16)) 
    { //completando uma nota
      container.textContent += atomo[0];
      console.log("opcao 4")
      this.compassos[this.indexCompasso].notas[this.indexNota].adicionarNota();
      this.somaCompasso += atomo[1];
      this.proximaNota();
    }
    else if ((atomo[1] == 2 || atomo[1] == 1) && (this.somaNota + atomo[1]) < 4 && (atomo[1] + this.somaCompasso < 16)) 
    {
      container.textContent += atomo[0];
      console.log("opcao 5")
      this.compassos[this.indexCompasso].notas[this.indexNota].adicionarNota();
      this.somaCompasso += atomo[1];
      this.somaNota += atomo[1];
    }

    
    console.log(this)
    console.log(`atomo: ${atomo[1]}, somaCompasso: ${this.somaCompasso}`)
  }
}


var musicaAtual = new Musica('teste')

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    const codigo = btn.getAttribute('data-simbolo');
    
    musicaAtual.agrupar(simbolos[codigo]);
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