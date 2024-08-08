let num1 = parseFloat(prompt("Digite o primeiro número"))
let num2 = parseFloat(prompt("Digite o segundo número"))
let operacao = prompt(`Digite o número correspondente a operação desejada: \n
1 - Soma \n
2 - Subtração \n
3 - Multiplicação \n
4 - Divisão`)

let resultado

switch(operacao){
    case "1":
        resultado = num1 + num2
        break
    case "2":
        resultado = num1 - num2
        break
    case "3":
        resultado = num1 * num2
        break
    case "4":
        if (num2 !== 0){
            resultado = num1 / num2
        }else{
            alert("Divisão por zero não é permitida")
            resultado = null
        }
        break
    default:
        alert("Operação inválida")
        resultado = null

}

if(resultado !== null){
    // Verificar se o número é par ou impar
    let tipoNumero = (resultado % 2 === 0) ? "par" : "impar"


    //Verifica se é positivo ou negativo
    let sinalNumero = (resultado >= 0) ? "positivo" : "negativo"

    //Verificar se o número é decimal
    let tipoDecimal = (resultado % 1 === 0) ? "inteiro" : "decimal"

    alert(`Resultado: ${resultado} \n O número é: ${tipoNumero}, ${sinalNumero} e ${tipoDecimal}.`)  
}else{
    alert("Programa finalizado")
}




