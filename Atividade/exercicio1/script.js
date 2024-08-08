let salario = parseFloat(prompt("Digite o salario do funcionário"))
let percentualAumento = parseFloat(prompt("Digite o valor do percentual"))

console.log("Valor do salário: " + salario)
console.log("Valor do percentual: " + percentualAumento)

let aumento = salario * percentualAumento/100

console.log("Valor do aumento: " +  aumento)

let novoSalario = salario + aumento // "2000" + "200" = 2000200 

console.log("Valor do novo salário: " + novoSalario)

alert("O salário com reajuste é de: R$" + novoSalario)