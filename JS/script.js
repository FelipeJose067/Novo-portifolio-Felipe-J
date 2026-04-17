// if (!nome || !mensagem) {
//     alert("Preencha todos os campos!");
//     return;
// }

// function enviarWhats(event) {

//     // nao deixa a tela recaregar
//     event.preventDefault()

//     const nome = document.getElementById('nome').value;
//     const mensagem = document.getElementById('mensagem').value;
//     const telefone = '5567991258341'

//     const texto = `Olá! Me chamo ${nome}, ${mensagem}`
//     const msgFormatada = encodeURIComponent(texto)

//     const url = `https://wa.me/${telefone}?text=${msgFormatada}`


//     console.log(url)

//         window.open(url, '_blank')
// }


function enviarWhats(event) {

    // não deixa a tela recarregar
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5567991258341';

    // validação no lugar certo
    if (!nome || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url);

    window.open(url, '_blank');
}