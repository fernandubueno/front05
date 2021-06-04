//pegando pelo ID
const personagens = document.getElementById('personagensDados');

//pegando pelo ID - usando querySelector
const personagens = document.querySelector('#personagensDados');
console.log(personagens);

//pegando pela Classe
//querySelectorAll - pega todos os elementos daquele seletor
const nomesPersonagens = document.querySelector('.nome-personagem');
console.log(nomesPersonagens);

//outra forma de pegar pela classe - forma mais antiga
const poderPersonagem = document.getElementsByClassName('poder-personagem');
console.log(poderPersonagem);

//pegando pela TAG
const todasTDs = document.querySelectorAll('td');
console.log(todasTDs);

//outra forma de pegar TAGs
const todasTRs = document.getElementsByTagName('tr');
console.log(todasTRs);

// DOM - Document Object Model = cópia da estrutura do HTML montado para manipulação, ele entende a estrutura HTML como uma grande árvore - início da árvore (nó principal) TAG HTML
// Manipular qualquer elemento dentro da página


