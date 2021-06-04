//recuperar o tbody - aqui que os dados ficarão
const tbody = document.querySelector('tbody');

//recuperar o form de envio e cancelar o evento padrão = submit dentro de form a ideia é enviar os dados
//cancelar esse envio
document.querySelector('form').addEventListener('submit', function (event) {
    //cancelar o evento
    event.preventDefault();

    // criar a tr para receber os dados
    const tr = document.createElement('tr');

    // recuperar os dados digitados - Array
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];


    // usaremos um forEach - percorre uma coleção de elementos - cada vez que ele encontra um item, será executada a função - a função aqui será a criação das TDs, uma para cada campo
    campos.forEach((campo) => {
        //criar a TD
        const td = document.createElement('td');
        //passar para a TD o valor que foi digitado
        td.textContent = campo.value;
        //adicionar a nova TD na TR
        tr.appendChild(td);
    });

    //adicionar a TR criada ao TBODY
    tbody.appendChild(tr);

    //limpar o form
    this.reset();

    campos[0].focus();
})