let pesoPeixe = parseFloat(prompt("Digite o peso do peixe!"))
let pesoLimite = 50
let excesso = 0
let multa = 0

if(pesoPeixe > pesoLimite){
    excesso = pesoPeixe - pesoLimite
    multa = excesso * 4

    alert(`Peso: ${pesoPeixe.toFixed(2)}\n
    Quantidade excedente: ${excesso.toFixed(2)}\n
    Valor da multa: R$${multa}`)
}else{
    alert("O seu peixe não excedeu o limite! Não será necessário pagar multa!")
}
