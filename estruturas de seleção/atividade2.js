// Passo 1 - Receber as duas notas do aluno e calcular a média
// Passo 2 - Atribuir o conceito a partir da média obtida
// Passo 3 - Determinar o status do aluno
// Passo 4 - Exibir as informações

let nota1 = 5
let nota2 = 4

//Calculo da média
let media = (nota1+nota2) / 2

let conceito = '';

// Estrutura de decisão para atribuir o conceito
if (media >= 9.0 && media <= 10){
    conceito = 'A'
}else if(media >= 7.5 && media < 9.0){
    conceito = 'B'
}else if(media >= 6.0 && media < 7.5){
    conceito = 'C'
}else if(media >= 4.0 && media < 6.0){
    conceito = 'D'
}else if(media >= 0 && media < 4.0){
    conceito = 'E'
}

let status = (conceito === 'A' || conceito === 'B' || conceito === 'C') ? "APROVADO" : "REPROVADO"

console.log("Nota 1: " + nota1)
console.log("Nota 2: " + nota2)
console.log("Média: " + media.toFixed(2))
console.log("Conceito: " + conceito)
console.log("Você foi " + status)
