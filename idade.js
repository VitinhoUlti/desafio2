let msg = window.document.getElementById("msg")
let imagem = window.document.getElementById("foto")
let date = window.document.getElementById("idate")
let datev = Number(`date.value`)
let ano = 2023
let valor = ano-datev
msg.innerText = `Você tem ${valor} anos`

if(valor<11){
    imagem.style.backgroundImage
}