
// OCULTAR-MOSTRAR ASIDE TEXT Y IMG
const imgButton = document.getElementById('imageButton')
const textButton = document.getElementById('textButton')
const asideImg = document.getElementById('imgOpt')
const asideText = document.getElementById('textOpt')


imgButton.addEventListener('click', () =>showImgSide())
const showImgSide = ()=> {
    asideImg.classList.remove('imageOptions')
    asideText.classList.add('textOptions')    
}

textButton.addEventListener('click', ()=> showTextSide())
const showTextSide = ()=> {
    asideText.classList.remove('textOptions')
    asideImg.classList.add('imageOptions')
}
// -------------------------------------------------------------------


// MODO CLARO-OSCURO
const darkLigthMode = document.getElementById('ligthDarkMode')
console.log(darkLigthMode)
const ligthBody = document.getElementsByTagName('body')
console.log(ligthBody[0])
const ligthHeader = document.getElementsByTagName('header')
console.log(ligthHeader[0])
const ligthAsideImg = document.getElementById('imgOpt')
console.log(ligthAsideImg)
const ligthAsideText = document.getElementById('textOpt')


darkLigthMode.addEventListener('click', ()=>changeToLigthMode())
const changeToLigthMode = ()=>{
    ligthBody[0].classList.add('ligthModeBody')
    ligthHeader[0].classList.add('ligthModeHeader')
    ligthAsideImg.classList.add('ligthModeAsideImg')
    ligthAsideText.classList.add('ligthModeAsideText')
}
// --------------------------------------------------------------

// TOMAR EL URL Y PONERLO EN EL FONDO