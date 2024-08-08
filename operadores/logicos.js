let expA = 5
let expB = 10

let resultado = (expA >= 5) || (expB <= 5)


let idade = 18
let vistoVerificado = false
let resposta = (idade >= 18)  && (vistoVerificado === true)
console.log(resposta)

let moedasColetadas = 100
let item = "estrela"
let res = (moedasColetadas >= 100) && (item === "estrela")
console.log(res)


let tempo = "chuva"
let objeto = "guarda chuva"
let podeSair = (tempo !== "chuva") || (objeto === "guarda chuva")
console.log("Posso sair? " + podeSair)

let clima = "chuva"
let horario = 8
let result = !((tempo !== "chuva") && (horario>6))
// tempo !== chuva = F && horario>6 = V = !FALSE = TRUE
console.log(result) 

let weather = "chuva"
let resp = weather === "chuva"
console.log(!!resp)

