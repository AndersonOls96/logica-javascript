let lado1 = parseFloat(prompt("Digite o primeiro lado"))
let lado2 = parseFloat(prompt("Digite o segundo lado"))
let lado3 = parseFloat(prompt("Digite o terceiro lado"))

if(lado1 + lado2 > lado3 && lado1+lado3 > lado2 && lado2 + lado3 > lado1){
    if(lado1 == lado2 && lado2 == lado3){
        alert("Triângulo equilatero")
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        alert("Triângulo isosceles")
    }else{
        alert("Triângulo escaleno")
    }
}else{
    alert("Os valores fornecidos não formam um triângulo")
}