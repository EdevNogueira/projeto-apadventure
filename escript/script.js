document.addEventListener('scroll', function(){
    const cabecalho = document.querySelector('header');
    const posicaoScroll = window.scrollY || document.documentElement.scrollTop;
    if (posicaoScroll > 50) {
        cabecalho.classList.add('rolagem');
    } else {
        cabecalho.classList.remove('rolagem');
    }
});

document.addEventListener('DOMContentLoaded', function(){
    function imagemTransicao(bloco){
        const imagem = bloco.querySelectorAll('img');
        let transicaoAtual = 0;

        function proximaImagem() {
            imagem[transicaoAtual].classList.remove('ativo');
            transicaoAtual = (transicaoAtual + 1) % imagem.length;
            imagem[transicaoAtual].classList.add('ativo');
        }

        imagem[transicaoAtual].classList.add('ativo');
        setInterval(proximaImagem, 3000);
    }

    const blocoDireito = document.querySelector('#idireita');
    const blocoEsquerdo = document.querySelector('#iesquerda');

    imagemTransicao(blocoDireito);
    imagemTransicao(blocoEsquerdo);
    
});