function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var title = window.document.getElementById('título')
    
    //var hora = 20
     msg.innerHTML =`Agora são ${hora} horas`
    if(hora>=0 && hora < 12){
        title.innerHTML = 'Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#f7ec52'
    }else if(hora>=12 && hora<=18){
        title.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#ff7e33'
    }else{
        title.innerHTML = 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#0d1640'
    }
}
