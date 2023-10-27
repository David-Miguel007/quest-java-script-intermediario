const conteudo = document.querySelectorAll(".paisagem")
const setaDaEsquerda = document.querySelector('.esquerda')
const setaDaDireita = document.querySelector('.direita')

let indice = 0

const quantidadeDeSlides = conteudo.length -1

setaDaDireita.addEventListener('click', () => {
    if (indice==quantidadeDeSlides) return
    avancarSlides()
    if (indice==quantidadeDeSlides) {
        setaDaDireita.classList.add('opacidade')
    }
    conteudo[indice].classList.add('transicao')
})

setaDaEsquerda.addEventListener('click', () => {
    if (indice==0) return
    voltarSlides()
    if (indice==0) {
        setaDaEsquerda.classList.add('opacidade')
    }
})
function avancarSlides() {
    conteudo[indice].classList.remove('selecionada')
    indice++
    conteudo[indice].classList.add('selecionada')

    setaDaEsquerda.classList.remove('opacidade')
}
function voltarSlides() {
    conteudo[indice].classList.remove('selecionada')
    indice--
    conteudo[indice].classList.add('selecionada')

    setaDaDireita.classList.remove('opacidade')
}