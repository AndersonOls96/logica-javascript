let numeroUm = 1
let stringUm = "1"
console.log(numeroUm == stringUm)

let marca = "Apple"
console.log(marca != "Samsung")

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCpfBloqueado = cpfUsuario === cpfBloqueado
console.log("O usuário está bloqueado? " + ehCpfBloqueado)

let cpfPermitido = "222.555.333-02"
let cpfDoUsuario = "222.555.333-02"
let ehPermitido = cpfDoUsuario === cpfPermitido
console.log("É um usuário permitido? " + ehPermitido)

let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)

let idadeDeCorte = 50
let idadeDoUsuario = 50
let idadePermitida = idadeDeCorte <= idadeDoUsuario
console.log(idadePermitida) 