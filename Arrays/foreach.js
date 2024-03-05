const notas = [1.1,0,10]

let soma = 0

// notas.forEach(function (nota){
//     soma += nota
// })

notas.forEach(somar)

function somar(nota){
    soma += nota
}

media = soma/notas.length

console.log(soma)