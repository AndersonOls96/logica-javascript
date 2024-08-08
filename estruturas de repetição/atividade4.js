let numero = Math.floor(Math.random()*10) + 1 // Gerar número inteiro aleatório entre 1 e 10
let tentativas = 0
let palpite

do{
    palpite = parseInt(prompt("Digite o seu palpite ou 0 para desistir"))
    tentativas++

    if(palpite === 0){
        alert("Você desistiu do jogo")
        break
    }

    if(palpite === numero){
        alert("Parabéns, você acertou! O numero era " + numero)
    }else if(palpite > numero){
        alert("Seu palpite foi maior que o número secreto")
    }else{
        alert("Seu palpite foi menor que o número secreto")
    }
}while(palpite !== numero)

alert(`Você fez ${tentativas} tentativas.`)

