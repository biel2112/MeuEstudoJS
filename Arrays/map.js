// const notas = [10,9.5,7,6]

// // const notasAtualizadas = notas.map(function (nota){
// //     return nota+=1
// // })
// const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota)

// console.log(notasAtualizadas)

// //Outro exercicio de aprendizado

// const numeros = [1,2,3,4,5,6,7,8,9,10]
// const quadrados = numeros.map((numero) => Math.pow(numero,2))

// console.log(quadrados)

// // Mudando array de strings com map

// const nome = ['Gabriel', 'Julia', 'ana']
// const nomeCapsLock = nome.map((nome) => nome.toUpperCase())
// console.log(nomeCapsLock)

// exercicio de cola

// const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos'];

// const listaAtualizada = listaProdutos.forEach((produto) => {
//  return `${produto} - unidade`;
// })

// console.log(listaAtualizada);

const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos'];

const listaAtualizada = listaProdutos.map((produto) => {
 return `${produto} - unidade`;
})

console.log(listaAtualizada);
