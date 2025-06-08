function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}h${minuto}min`
    
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
}