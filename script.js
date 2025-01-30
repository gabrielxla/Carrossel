/* Carrossel 
@author Gabriel Lima de Andrade
*/

let indice = 0

const imgs = document.getElementById('imagens')
const imagem = document.querySelectorAll('#imagens img')

function carrossel (){
    indice++
    if (indice >= imagem.length){
        indice = 0
       
    }
    imgs.style.transform = `translateX(${-indice * 100}%)`
}
setInterval(carrossel,1800)