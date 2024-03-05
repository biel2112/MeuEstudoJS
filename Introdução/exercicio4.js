// 1)
// const nome = (nome) =>{
//     return `Olá, ${nome}`
// }

// console.log(nome('Gabriel'))

// 2)

// function maioridade(idadeUsuario, idadeMinima = 18){
//     if(idadeUsuario >= idadeMinima){
//         return 'É maior de idade!'
//     }
//     else{
//         return 'Não é maior de idade!'
//     }
// }

// console.log(maioridade(17))

//3)

// const palindromo = (palavra) => {
//     let palavraInvertida = palavra.split('').reverse().join('')
//     return palavra.toLowerCase() === palavraInvertida.toLowerCase()
// }

// console.log(palindromo('Amor a roma'))

//4)

// const maiorNumero = (num1, num2, num3) => {
//     if((num1 > num2 && num1 > num3) || (num1 > num2 && num1 == num3) || (num1 > num3 && num1 == num2)){
//         return `O maior número é ${num1}`
//     }
//     else if((num2 > num1 && num2 > num3) || (num2 > num1 && num2 == num3) || (num2 > num3 && num2 == num1)){
//         return `O maior número é ${num2}`
//     }
//     else if((num3 > num1 && num3 > num2) || (num3 > num1 && num3 == num2) || (num3 > num2 && num3 == num1)){
//         return `O maior número é ${num3}`
//     }
//     else{
//         return `Todos os números são iguais a ${num1}`

//     }
        
//     }
    

// console.log(maiorNumero(1,2,0))

//5)

const numeroElevado = (numero, expoente) => {
    return Math.pow(numero,expoente)
}

console.log(numeroElevado(2,10))