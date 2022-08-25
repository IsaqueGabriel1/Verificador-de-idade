function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById("txtNas")
    let res = document.getElementById("resp")

    if (fAno.value.length == 0 || fAno.value > ano){
        alert("Verifique os cados e tente novamente")
    }else{
        let fsex = document.getElementsByName('radSex')
        let idade = ano - Number(fAno.value)
        let genero = ""
        let img = document.getElementById('foto')
        img.style.display = ""
        if (fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                //criança
                img.src = './img/homemCria.jpg'
            }else if (idade < 21){
                //jovem
                './img/homemJov.jpg'
                img.src = './img/homemJov.jpg'
            }else if (idade < 50){
                //adulto
                img.src = './img/homemAdult.jpg'
            }else{
                //idoso
                img.src = './img/homemIdoso.jpg'
            }
        }else{
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                //criança
                img.src = './img/mulherCria.jpg'
            }else if (idade < 21){
                //jovem
                img.src = './img/mulherJov.jpg'
            }else if (idade < 50){
                //adulto
                img.src = './img/mulherAdult.jpg'
            }else{
                //idoso
                img.src = './img/mulherIdosa.jpg'
            }
        }
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`

    }
}

function carregar(){
    let img = document.getElementById('foto')
    img.style.display = "none"
}