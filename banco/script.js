let nome = "Anderson"
let idade = 27
let tipoPix = "Email"
let chavePix = "pix@email.com"
let valorConta = 1200.00
let agencia = "0001"
let conta = "123456-9"

function mostrarDados(){
    alert(`Agência: ${agencia}\n
    Conta: ${conta}\n
    Titular: ${nome}\n
    Saldo: R$${valorConta.toFixed(2)}\n
    Chave Pix: ${chavePix}`)
}

function addValor(valor){
    valorConta += valor
    console.log("Valor em conta: " + valorConta)
}

function subValor(valor){
    if(valor <= valorConta){
        valorConta -= valor;
        console.log("Pix realizado com sucesso!")
        console.log("Valor em conta" + valorConta)
        return true
    }else{
        console.log("Saldo insuficiente para realizar a transação!")
    }
}

function mudarChave(tipo, chave){
    chavePix = chave
    tipoPix = tipo
    console.log("Nova chave pix: " + chavePix )
}


function acessar(){
    let loop = true
    while(loop){
        let escolha = prompt("Escolha uma das opções")

        switch(escolha){
            case "0":
            case null:
                loop = false
                alert("Sessão finalizada!")
                break
            case "1":
                mostrarDados()
                break
            case "2":
                let novoValor = parseFloat(prompt("Digite o valor que deseja depositar na conta"))
                addValor(novoValor)
                alert(`Depósito no valor de R$${novoValor.toFixed(2)} realizado com sucesso!`)
                break
            case "3":
                let pix = parseFloat(prompt("Digite o valor que deseja enviar"))
                let chave = prompt("Digite a chave pix do destinatário")
                
                if(subValor(pix) === true){
                    alert(`Você realizou um pix no valor de R$${pix.toFixed(2)}`)
                }else{
                    alert("Impossível realizar a transação")
                }
                break
            case "4":
                let tipo = prompt("Insira o tipo da nova chave pix")
                let chavePix = prompt("Insira a sua nova chave")

                mudarChave(tipo, chavePix)
                alert("Chave pix alterada com sucesso!")
                break
            default:
                alert("Opção inexistente")
                break    
        }
    }
}