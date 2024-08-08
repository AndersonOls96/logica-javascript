function verificarNum(numero){
    if(numero % 2 === 0){
        return "Par"
    }else{
        return "Impar"
    }
}

console.log(verificarNum(10))
console.log(verificarNum(5))
console.log(verificarNum(239))