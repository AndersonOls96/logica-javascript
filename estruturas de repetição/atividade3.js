let gabarito = ["A", "B", "C", "D","E","E", "D", "C","B", "A"]
let notas = []
let continuar = true

while(continuar){
    let acertos = 0
    let nota = 0

    for(let i = 0; i < 10; i++){
        let resposta = prompt(`Digite a resposta da questão ${i+1}`)
        if(resposta === gabarito[i]){
            acertos++
        }
    }

    nota = acertos
    notas.push(nota)

    alert(`Você acertou ${acertos} questões e sua nota é ${notas}.`)

    let resposta = prompt("Outro aluno vai usar o sistema? (S/N)")

    if (resposta === "N" || resposta === "n" ){
        continuar = false
    }
}

let maior = Math.max(...notas)
let menor = Math.min(...notas)
let total = notas.length

alert(`Maior acerto: ${maior} \n
Menor acerto: ${menor} \n
Total de alunos: ${total}`)