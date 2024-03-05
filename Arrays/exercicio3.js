//1)

// const mugiwaras = ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbei']
// for(let tripulante of mugiwaras){
//     console.log(tripulante)
// }

//2)

// function nomeENumero(tripulacao){
//     for(let tripulante in tripulacao){
//         console.log(`${tripulante} - ${mugiwaras[tripulante]}`)
//     }
// }

// const mugiwaras = ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbei']
// nomeENumero(mugiwaras)

//3)

// const notas = [7,8,9]
// function soma(numeros){
//     soma = 0
//     for(numero of numeros){
//         soma += numero
//     }
//     return soma
// }

// console.log(soma(notas))

//4)

// function menorEMaior(numeros){
//     let maiorNumero = numeros[0];
//     let menorNumero = numeros[0];
//     for(let numero of numeros){
//         if(numero > maiorNumero){
//             maiorNumero = numero
//         }
//         if(numero < menorNumero){
//             menorNumero = numero
//         }
//     }
//     return `O maior número é ${maiorNumero} e o menor é ${menorNumero}`
// }
// const numeros  = [11,2,3]
// console.log(menorEMaior(numeros))

//5)

// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]


// for(let numero of numeros){
//     if((numero % 2) == 0){
//         console.log(numero)
//     }
// }

//6)

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
soma = 0

for(let numero of numeros){
    soma += numero
}

media = soma/numeros.length
console.log(media)