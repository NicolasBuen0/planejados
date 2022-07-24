//menu
const btn = document.querySelector(".btn-menu");
const nav = document.querySelector("nav");


function toggle() {
    nav.classList.toggle("ativo");
}


btn.addEventListener("click", toggle);

function scroll () {
    if(btn.getBoundingClientRect().top < -50){
        nav.classList.remove("ativo");
    }
    console.log(btn.getBoundingClientRect().top)
}
console.log(btn.getBoundingClientRect().top)
window.addEventListener("scroll", scroll)
//ativar links do menu
const links = document.querySelectorAll(".header-menu a");
const linkAtual = window.location.href;

function clicou(link) {
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("ativo");
    }


}
links.forEach(clicou)


//ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) elemento.checked = true;


}
parametros.forEach(ativarProduto);


//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);

}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);

}
perguntas.forEach(eventosPerguntas);



//galeria

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    console.log(media)
    if (media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);

}

galeria.forEach(eventosGaleria)