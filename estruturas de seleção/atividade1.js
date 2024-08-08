// Passo 1 -  receber o salário do colaborador
// Passo 2 - determinar o percentual do reajuste com base no salário
// Passo 3 - calcular o valor do aumento e do novo salário
// Passo 4 - Exibir os resultados

let salarioAtual = 1200.00

let percentualReajuste = 0
let valorAumento = 0
let novoSalario = 0
//Determinando o percentual de reajuste
if(salarioAtual <= 280){
    percentualReajuste = 20
}else if(salarioAtual > 280 && salarioAtual <= 700){
    percentualReajuste = 15
}else if(salarioAtual > 700 && salarioAtual <= 1500){
    percentualReajuste = 10
}else{
    percentualReajuste = 5
}

// Calcular valor do aumento e novo salário
valorAumento = salarioAtual *(percentualReajuste / 100)
novoSalario = salarioAtual + valorAumento

// Exibir os resultados
console.log("Salario antes do reajuste: R$" + salarioAtual.toFixed(2))
console.log("Percentual de aumento: " + percentualReajuste + "%")
console.log("Valor do aumento: R$" + valorAumento.toFixed(2))
console.log("Novo salário: R$" + novoSalario.toFixed(2))