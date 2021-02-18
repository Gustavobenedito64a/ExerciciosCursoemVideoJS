function contar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("falta preencher algum campo!");
    }else{
        resultado.innerHTML = "contando: <br>"
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if(p <= 0){
            window.alert("Passo invalido!");
            p = 1;
        }
        if(i < f){
            for(var c = i; c <= f; c+= p){
                resultado.innerHTML += c + '\u{1F449}';
            }
            resultado.innerHTML += '\u{1F3C1}';
        }else{
            for(var c = i; c >= f; c-= p){
                resultado.innerHTML += c + '\u{1F449}';
            }
        }
    }
}