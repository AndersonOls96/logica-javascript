let frutas = ["Maçã", "Banana", "Laranja"]
let pessoas = ["José", "Maria", "João"]
let notas = [8.5, 10, 9.5,"Aluno1", "Aluno2"]

console.log(frutas[1])
console.log(pessoas[1])
console.log(notas[4])

console.log(pessoas.indexOf("Maria"))
//Adicionar item no final da lista
frutas.push("Manga")
console.log(frutas)
// Remover item no final da lista
frutas.pop()
console.log(frutas)
// Remover o primeiro item da lista
frutas.shift()
console.log(frutas)

//Substituir um elemento da lista por outro
frutas[1] = "Pêra"
console.log(frutas)

//Exibir quantidade de itens ou tamanho do array
console.log(pessoas.length)
