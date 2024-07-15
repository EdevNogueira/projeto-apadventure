window.addEventListener('scroll', function(){
    const cabecalho = document.querySelector('header');
    const posicaoScroll = window.scrollY || document.documentElement.scrollTop;
    if (posicaoScroll > 10) {
        cabecalho.classList.add('rolagem');
    } else {
        cabecalho.classList.remove('rolagem');
    }
});