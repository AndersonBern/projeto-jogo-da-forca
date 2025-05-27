let imagem = document.getElementById('imagem');
let mensagem = document.getElementById('tentativa');
let mostraPalavra = document.getElementById('palavra');
let mostraLetra = document.getElementById('letra');
let input = document.getElementById('chute');

let btnVerificar = document.getElementById('botao');

//Lista de palavras.
let lista = ['pai', 'mamae', 'vovo', 'vo'];

//Para sortear uma palavra dentro do array.
let palavra = lista[Math.floor(Math.random() * lista.length)];

//Para transformar a palavra em um array.
let arrayPalavra = palavra.split('');

//Array para ter o mesmo numero de carcteres que a palavra.
let arrayTracos = [];

//Para mostrar os traços na tela.
for (let cont = 0; arrayPalavra.length > cont; cont++) {
    arrayTracos.push(' _ ')
    mostraPalavra.innerHTML += arrayTracos[cont];
}

//Contador de erros.
let erros = 0;

function mudaImagem() {
    imagem.style.backgroundImage = `url(imagens/nivel-${erros}.png)`;
}

//Variáveis para validação dos caracteres.
let letra = '';
let letrasErradas = [];
let letrasCertas = [];

function verificar() {
    //Adicionando o valor do input a variavel letra.
    letra = String(input.value);

    //Verificando se é vazio, nulo, indefinido ou numero.
    if (letra == '' || letra == null || letra == undefined || parseInt(letra) >= 0) {
        window.alert('Digite um valor válido!');
    }

    //Verificando se a letra já foi testada.
    else if(letrasErradas.indexOf(letra) >= 0 || letrasCertas.indexOf(letra) >= 0) {
        window.alert('Essa já foi! Tente outra letra.'); 
    }
    else {
        //Chama a função para iniciar jogo.
        jogo();
    }

    input.value = ''
    input.focus();
    
}

function jogo () {
    //Laço para percorrer as letras da palavra.
    for (let indice in arrayPalavra) {
        if (arrayPalavra[indice] == letra) {

        //Adicionando as letras certas ao array de verificação e ao array de output.
        arrayTracos[indice] = letra;
        letrasCertas.push(letra);
        }

        //Mostrando as letras corretas.
        mostraPalavra.innerHTML = arrayTracos.join(' ');
    }

    //Se a letra não existe na palavra...
    if (arrayPalavra.indexOf(letra) == -1){
        //Incremento ao erro.
        erros += 1;

        //Adicionando a letra ao array de letras erradas
        letrasErradas.push(letra);

        mudaImagem();

        mensagem.innerHTML = `Tentativa ${erros}`;

        mostraLetra.innerHTML += ' ' + letra;
    }
    //Chama a função resultado.
    let chamadaResultado = setTimeout(resultado, 1000);
   
}

function resultado() {
    //Se tiver 7 erros...
    if (erros >= 7) {
        mensagem.innerHTML = 'Você PERDEU!'

        //Bloqueia o input.
        input.disabled = true;

        //Bloquia o botão verificar.
        btnVerificar.disabled = true;

        //Mostra o botão de reiniciar.
        reiniciar.style.display = 'block'

        //Muda a cor de fundo.
        imagem.style.backgroundColor = '#fc8e8e';
    }
    //Se o tamanho do array das letras certas for igual ao tamanho do array da palavra...
    if (letrasCertas.length == arrayPalavra.length) {
        mensagem.innerHTML = 'Parabéns, você GANHOU! '
        
        //Bloqueia o input.
        input.disabled = true;

        //Bloqueia o botão verificar.
        btnVerificar.disabled = true;

        //Mostra o botão de reiniciar.
        reiniciar.style.display = 'block';

        //Muda a cor de fundo.
        imagem.style.backgroundColor = '#9efcab';
    }
}

