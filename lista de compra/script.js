let frutas = []
let laticinios = []
let frios = []
let variados = []

function adicionarItem(item, categoria){
    switch(categoria){
        case "1":
            frutas.push(item)
            break
        case "2":
            laticinios.push(item)
            break
        case "3":   
            frios.push(item)
            break
        case "4":
            variados.push(item)
            break
         default:
            alert("Categoria não encontrada")        
    }
}

function botaoAdicionar(){
    let adicionarMais = true

    while(adicionarMais){
        let item = prompt("Digite o nome do item para adicionar na lista")
        let categoria = prompt(`Digite o número correspondente a categoria\n
        1-Frutas | 2-Laticinios | 3-Frios | 4-Variados`)
        adicionarItem(item, categoria)

        let escolha = prompt("Adicionar outro item? sim/não")
        if(escolha === "não" || escolha === null){
            adicionarMais = false
        }
    }
    adicionarMais = true
}

function exibirLista(){
    alert(`Lista de Compras\n
    Frutas: ${frutas.join(", ")}\n
    Laticinios: ${laticinios.join(", ")}\n
    Frios: ${frios.join(", ")}\n
    Variados: ${variados.join(", ")}
    `)
}

function removerItem(item, categoria){
    let array

    switch(categoria){
        case "1":
            array = frutas
            break
        case "2":
            array = laticinios
            break
        case "3":
            array = frios
            break
        case "4":
            array = variados
            break
        default:
            alert("Categoria não encontrada")
            return        
    }
    let indice = array.indexOf(item)
    if(indice !== -1){
        array.splice(indice, 1)
        alert(`Item ${item} removido da categoria ${categoria}`)
    }else{
        alert(`Item ${item} não encontrado na categoria ${categoria}`)
    }
}

function botaoRemover(){
    let item = prompt("Digite o nome do item para remover da lista")
    let categoria = prompt(`Digite o número correspondente a categoria\n
    1-Frutas | 2-Laticinios | 3-Frios | 4-Variados`)
    removerItem(item, categoria)
}



