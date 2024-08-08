let valorProduto1 = parseFloat(prompt("Digite o preço do primeiro produto"))
let valorProduto2 = parseFloat(prompt("Digite o preço do segundo produto"))
let valorProduto3 = parseFloat(prompt("Digite o preço do terceiro produto"))

if(valorProduto1 < valorProduto2 && valorProduto1 < valorProduto3){
    alert("O produto 1 é o mais barato")
}else if(valorProduto2 < valorProduto1 && valorProduto2 < valorProduto3){
    alert("O produto 2 é o mais barato")
}else{
    alert("O produto 3 é o mais barato")
}
