let imagem = document.getElementById('imagem');
let mensagem = document.getElementById('tentativa');
let mostraPalavra = document.getElementById('palavra');
let mostraLetra = document.getElementById('letra');
let input = document.getElementById('chute');

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

let erros = 0;

function mudaImagem() {
    imagem.style.backgroundImage = `url(imagens/nivel-${erros}.png)`;
    console.log(erros);
}

function verificar() {
    let letra = String(input.value);

    for (let indice in arrayPalavra) {
        if (arrayPalavra[indice] == letra) {

            arrayTracos[indice] = letra;
            console.log(arrayTracos);

        }
        else {
           
        }
        
        mostraPalavra.innerHTML = arrayTracos.join(' ');
        console.log(arrayTracos[indice]);
    }

    if (arrayPalavra.indexOf(letra) == -1){
        erros += 1;
        mudaImagem();

        mensagem.innerHTML = `Tentativa ${erros}`;

        mostraLetra.innerHTML += ' ' + letra;

        if (erros >= 7) {
            mensagem.innerHTML = `Você PERDEU!`;
            return;
        }
            
    }
    
}

