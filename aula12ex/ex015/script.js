function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var FAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (FAno.value.length == 0 || Number(FAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(FAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/hcriança.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/hjovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/hadulto.jpg')
            }
            else {
                img.setAttribute('src', 'imagens/hidoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/mcriança.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/mjovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/madulta.jpg')
            } else {
                img.setAttribute('src', 'imagens/midosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

