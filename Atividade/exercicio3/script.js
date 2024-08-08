let ganhoPorHora = parseFloat(prompt("Digite o valor ganho por hora"))
let horasTrabalhadas = parseFloat(prompt("Digite o total de horas trabalhadas"))

let salarioBruto = ganhoPorHora * horasTrabalhadas

let impostoDeRenda = salarioBruto * 0.11
let inss = salarioBruto * 0.08
let sindicato = salarioBruto * 0.05

let salarioLiquido = salarioBruto - impostoDeRenda - inss - sindicato

let msg = `Informações sobre o salário: \n
Salário Bruto: R$${salarioBruto.toFixed(2)} \n
Desconto Imposto de Renda: R$${impostoDeRenda.toFixed(2)} \n
Desconto INSS: R$${inss.toFixed(2)} \n
Desconto Sindicato: R$${sindicato.toFixed(2)} \n
Salário Liquido: R$${salarioLiquido.toFixed(2)}`

alert(msg)