// sobre a menagem
function carregar(){
    var header = window.document.getElementById("header");
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var footer = window.document.getElementById("footer");
    var span = window.document.getElementById("span")
    //alteraçao do header


    // imagem
    if(hora >=5 && hora < 12){
        //BOM DIA!
        header.innerHTML = "Hora do Dia";
        header.style.color = "black";
        footer.style.color = "black";
        document.body.style.background = "#e2cd9f";
        img.src = 'imagens/manha.png';
        msg.innerHTML = "Agora são " + hora + " horas da manhã."
        span.style.color = "black";
        span.style.color.hover = "white"

    }else if(hora >=12 && hora <= 18){
        // BOA TARDE!
        header.innerHTML = "Hora da tarde";
        document.body.style.background = "#b9846f"
        img.src ='imagens/tarde.png'
        msg.innerHTML = "Agora são " + hora + " horas da tarde."


    }
    else{
        //BOA NOITE!
        header.innerHTML = "Hora da noite"
        document.body.style.background= "#515154"
        img.src = 'imagens/noite.png'
        msg.innerHTML = "Agora são " + hora + " horas da noite."

    }
}