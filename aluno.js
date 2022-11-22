
class Aluno {

    nome;
    matricula;
    nota1;
    nota2;
    nota3;
  
     constructor(nome, matricula, n1, n2, n3) {
  
       this.nome = nome;
       this.matricula = matricula;
       this.nota1 = n1;
       this.nota2 = n2;
       this.nota3 = n3;
  
    }
  
     exibeInfo() {
  
      return `Aluno: ${this.nome} - 
              mat: ${this.matricula}
              Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
              Média:${this.calculaMedia()}`;
  
    }
  
     calculaMedia() {
  
       return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
  
    }
  
  }

  let form = document.querySelector('form');
  let ul = document.querySelector('ul');

  form.onsubmit = function(evento) {
    evento.preventDefault();

    let nome = document.querySelector('.nome').value;
    let matricula = document.querySelector('.matricula').value;
    let nota1 = parseFloat(document.querySelector('.nota1').value);
    let nota2 = parseFloat(document.querySelector('.nota2').value);
    let nota3 = parseFloat(document.querySelector('.nota3').value);
    let lista = document.querySelector('.lista');
    let input = form.querySelectorAll('input');

    let aluno = new Aluno(nome, matricula, nota1, nota2, nota3);

    let liNome = document.createElement('li');
    liNome.textContent = "Aluno: " + aluno.nome;
    let botao = document.createElement('button');
    botao.textContent = 'X';
    botao.setAttribute('class', 'botao');

    let ulAluno = document.createElement('ul');

    let liMatricula = document.createElement('li');
    liMatricula.textContent = "Matricula: " + aluno.matricula;
    let liNota1 = document.createElement('li');
    liNota1.textContent = "Nota1: "+ aluno.nota1;
    let liNota2 = document.createElement('li');
    liNota2.textContent = "Nota2: "+ aluno.nota2;
    let liNota3 = document.createElement('li');
    liNota3.textContent = "Nota3: "+ aluno.nota3;
    let liMedia = document.createElement('li');
    liMedia.textContent = "Média: "+ aluno.calculaMedia();

    ulAluno.appendChild(liMatricula);
    ulAluno.appendChild(liNota1);
    ulAluno.appendChild(liNota2);
    ulAluno.appendChild(liNota3);
    ulAluno.appendChild(liMedia);

    liNome.appendChild(ulAluno);
    liNome.appendChild(botao);

    for (i=0; i <input.length; i++){
      input[i].value = "";
    }

    lista.appendChild(liNome);

  }

  ul.onclick = (evento) => {
    console.log(evento.target);
    console.log(evento.currentTarget);
    if(evento.target.classList.contains('botao')) {
        if(confirm('Deseja apagar este item?')) {
            console.log('Removendo item!');
            evento.target.parentElement.remove();
        }
    }
}
  