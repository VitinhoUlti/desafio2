function msk(){
let msg = window.document.getElementById("msg")
let imagem = window.document.getElementById("foto")
let data = document.getElementById("idate");
let ano = new Date()
let anov = ano.getFullYear()
let valor = anov - Number(data.value)
msg.innerText = `Você tem ${valor} anos`
let sex = document.getElementsByName("sexo");
var genero = ''

if(sex[0].checked){
    var genero = 'masculino'
}
if(sex[1].checked){
    var genero = 'feminino'
}
msg.style.opacity = 2
foto.style.opacity = 2
if(Number(data.value)>anov){
        window.alert('[ERRO] data invalida!')
}
if(valor<=11 && valor>-1 && genero=='masculino'){
    imagem.style.backgroundImage = `url(imagens/menino.jpg)`
}
if(valor<=11 && valor>-1 && genero=='feminino'){
    imagem.style.backgroundImage = `url(imagens/menina.jpg)`
    imagem.style.backgroundPosition = 'center'
}
else if(valor<18 && valor>11 && genero=='masculino'){
    imagem.style.backgroundImage = `url(imagens/oadoles.jpg)`
}
if(valor<18 && valor>11 && genero=='feminino'){
imagem.style.backgroundImage = `url(imagens/aadoles.jpg)`
imagem.style.backgroundPosition = 'center'
}
else if(valor<50 && valor>=18 && genero=='masculino'){
    imagem.style.backgroundImage = `url(imagens/adulto.jpg)`
}
if(valor<50 && valor>=18 &&  genero=='feminino'){
    imagem.style.backgroundImage = `url(imagens/adulta.jpg)`
}
else if(valor>=50  && genero=='masculino'){
    imagem.style.backgroundImage = `url(imagens/idoso.jpg)`
}
else if(valor>=50 && genero=='feminino'){
    imagem.style.backgroundImage = `url(imagens/idosa.jpg)`
    imagem.style.backgroundPosition = 'center'
}
}