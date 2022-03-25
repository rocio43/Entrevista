function invertido(){
    var invert = document.getElementsByName("frase");
    valor = invert.item(0).value.toString().split("");
    normal = valor.reverse().join("");
    document.body.innerHTML += normal + "<br/>";
}
