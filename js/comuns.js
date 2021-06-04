//no JS as variaveis nao sao tipaveis
// as variaveis terao tres formas de serem declaradas
//var -> mais antiga = escopo //PEDE-SE PARA EVITAR O VAR
//let -> bloco - vai enxergar aonde ela foi definida
//conts -> constante = não sofre alteração

let nome = 'Fernando Bueno Sanches'; //string
let idade = 50; //number
let endereco = 'Rua 1 - Casa 2;' //string
let sabado = true; //boolean

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof endereco);
console.log(typeof sabado);

//concatenar string + variavel
console.log(nome, idade, endereco, sabado);
console.log('Nome: ' + nome);
console.log('Idade: ' + idade);
console.log('Endereço: ' + endereco);
console.log('Hoje é sabado: ' + sabado);

//template string - usar o sinal de crase no lugar das aspas simples ou duplas
console.log(`nome: ${nome} moro na rua ${endereco}
            é verdade que hoje é sábado ${sabado}`);

//Declarando array            
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
console.log(pessoas);
console.log(typeof pessoas);

const coisas = ['Fernando', 50, true, 999.99, 'JavaScript']
console.log(coisas);

function mensagem(){
    alert('Oi');
}

//pegando o botão pelo ID
document.querySelector('#btn-1').addEventListener('click', mensagem);
document.querySelector('#btn-2').addEventListener('dblclick', mensagem);
document.querySelector('#btn-3').addEventListener('mouseover', mensagem);
document.querySelector('#btn-4').addEventListener('mouseout', mensagem);

//alterando algum conteúdo na página
//recuperar o botão - criar uma função que executará essa mudança
document.querySelector('#alterarConteudo').addEventListener('click',() =>{
    // pegar o conteúdo a ser inserido - pegar o elemento inserido
    const novoConteudo = document.querySelector('#conteudo');
    //pegar o value da TAG
    const conteudo = document.querySelector('#dados').value;
    //inserir o conteudo
    //novoConteudo.innerHTML = conteudo; - forma não recomendada pois há risco de segurança
    novoConteudo.textContent = conteudo;
});

//inserir na página - pegao o botão
document.querySelector('#insereConteudo').addEventListener('click', () =>{
    //pegar o campo do form
    const conteudo = document.querySelector('#novosDados').value;
    // recuperar o elemento HTML onde o conteúdo será inserido
    const nova = document.querySelector('#novaTag');
    //criar um H2 que será inserido dentro da DIV
    const novoH2 = document.createElement('h2');
    //passar para o novo H2 o conteúdo que foi recuperado
    novoH2.textContent = conteudo;
    //adicionar o título no elemento HTML - documento
    nova.appendChild(novoH2);
});







