let notas = [8.5, 6.3, 9.0, 5.5, 7.0, 4.9, 10, 6.8, 7.5, 3.2]

let aprovado = 0;
let reprovado = 0;

for(let i = 0; i < notas.length; i++){
    if(notas[i] >= 7){
        aprovado++
    }else{
        reprovado++
    }
}
console.log("Número de alunos aprovados: " + aprovado)
console.log("Número de alunos reprovados: " + reprovado)
