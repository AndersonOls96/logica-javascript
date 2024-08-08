function addPorcentagem(valor, porcentagem){
    let porcentagemDecimal = porcentagem / 100

    let acrescimo = valor * porcentagemDecimal
    
    let valorAdicionado = acrescimo + valor

    return valorAdicionado
}

console.log(addPorcentagem(1500, 15))