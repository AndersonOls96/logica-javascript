let nomeUsuario = prompt("Digite o seu nome:")
let sobrenomeUsuario = prompt("Digite seu sobrenome:")

dizerOla(nomeUsuario, sobrenomeUsuario)

function dizerOla(nome, sobrenome){
    alert(`Olá ${nome} ${sobrenome}!`)
}
