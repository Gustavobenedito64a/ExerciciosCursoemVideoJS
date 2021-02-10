// sobre a menagem
function carregar(){
    var header = window.document.getElementById("header");
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    //alteraçao do header
    if(hora >=5 && hora < 12){
        //BOM DIA!
        header.innerHTML = "Hora do Dia";
    }else if(hora >=12 && hora <= 18){
        // BOA TARDE!
        header.innerHTML = "Hora da tarde";

    }
    else{
        //BOA NOITE!
        header.innerHTML = "Hora da noite"
    }

    // imagem
    msg.innerHTML = "Agora são " + hora + " horas."
    if(hora >=5 && hora < 12){
        //BOM DIA!
        document.body.style.background = "#e2cd9f";
        img.src = 'imagens/manha.png'
    }else if(hora >=12 && hora <= 18){
        // BOA TARDE!
        document.body.style.background = "#b9846f"
        img.src ='imagens/tarde.png'

    }
    else{
        //BOA NOITE!
        document.body.style.background= "#515154"
        img.src = 'imagens/noite.png'
    }
}