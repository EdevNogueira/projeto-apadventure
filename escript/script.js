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
            nome: "Sargento Adiel (Bombeiro)",
            texto: "Eu acho que organizar um triathlon em uma cidade que ainda não tem tradição nesse tipo de evento pode ser uma ideia fantástica. Pode revitalizar a cidade, promover um estilo de vida saudável entre os moradores e até mesmo atraindo os turistas e atletas profissionais.",
            imagem: "imagens/image.png"
        },
        {
            nome: "Raimundo  Soares (Pescador e Vendedor)",
            texto: "A proposta de uma IA para escaneamento de peixes é bastante inovadora e promete ser extremamente útil. A ideia de identificar espécies e fornecer informações detalhadas sobre benefícios nutricionais e características dos peixes é fascinante.Embora ainda esteja no estágio conceitual, o potencial para aplicações práticas e educativas é evidente. Estou ansioso para ver essa ideia se desenvolver e se tornar uma ferramenta real e acessível!",
            imagem: "imagens/Imagem do WhatsApp de 2024-07-30 à(s) 10.09.54_7618e509.jpg"
        },
        {
            nome: "Eva (Vendedora de Peixes)",
            texto: "O marido gostava de caminhar lá antes, mas que depois que ficou no estado que tá, ele não vai mais por medo de se machucar. Então o Percurso dele agora costuma ser até o Outeiro do Finca. E disse também que a restauração traria vários benefícios porque é um lugar onde se pode ter contato com a natureza.",
            imagem: "imagens/Imagem do WhatsApp de 2024-07-30 à(s) 10.09.27_5902c50d.jpg"
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