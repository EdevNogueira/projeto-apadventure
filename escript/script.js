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
        setInterval(proximaImagem, 5000);
    }

    const blocoDireito = document.querySelector('#idireita');
    const blocoEsquerdo = document.querySelector('#iesquerda');

    imagemTransicao(blocoDireito);
    imagemTransicao(blocoEsquerdo);
    
});







document.addEventListener('DOMContentLoaded', () => {
    const depoimentos = [
        {
            nome: "Ana Souza",
            texto: "A experiência foi incrível! A equipe foi super profissional e acolhedora.",
            imagem: "imagens/apa-foto-local.jpg"
        },
        {
            nome: "Carlos Silva",
            texto: "Excelente serviço e atendimento. Super recomendo!",
            imagem: "apa-foto-local.jpg"
        },
        {
            nome: "Maria Oliveira",
            texto: "Adorei o resultado final. Muito satisfeito com o trabalho realizado.",
            imagem: "apa-foto-local.jpg"
        }
    ];

    const container = document.getElementById('carrossel-container');

    depoimentos.forEach(dep => {
        const divDepoimento = document.createElement('div');
        divDepoimento.className = 'depoimento';

        const img = document.createElement('img');
        img.src = dep.imagem;
        img.alt = `Imagem de ${dep.nome}`;

        const divInfo = document.createElement('div');
        divInfo.className = 'info';

        const h3 = document.createElement('h3');
        h3.textContent = dep.nome;

        const p = document.createElement('p');
        p.textContent = dep.texto;

        divInfo.appendChild(h3);
        divInfo.appendChild(p);

        divDepoimento.appendChild(img);
        divDepoimento.appendChild(divInfo);

        container.appendChild(divDepoimento);
    });

    let index = 0;

    window.moverCarrossel = function (direcao) {
        const depoimentosCount = container.children.length;
        index = (index + direcao + depoimentosCount) % depoimentosCount;
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    // Move o carrossel automaticamente a cada 10 segundos
    setInterval(() => moverCarrossel(1), 10000);
});