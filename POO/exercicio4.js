//1) Utilizar Require

// Importar de um arquivo JSON

// const dados = require('./dados.json')

// console.log(dados.produtos)
// console.log(dados.usuarios)

//2) Ler arquivos JSON 

// const dados = require('./dados.json')
// console.log(dados)

//3)

// const produto = {
//     id: 1,
//     nome: "Camiseta",
//     preco: 25.99
// }

// const stringProduto = JSON.stringify(produto)
// console.log(stringProduto)

//4)

// Ler o arquivo animais.json
// const dadosAnimais = require('./animais.json')

// console.log(animais)

// const stringAnimais = JSON.stringify(animais)
// console.log(stringAnimais)

// const objAnimais = JSON.parse(stringAnimais)
// console.log(objAnimais)

// c) Adicionar um novo animal

// const novoAnimal = {
//     "id":4,
//     "nome":"Tigre",
//     "tipo":"Felino",
//     "habitat":"Ásia"   
// }

// dadosAnimais.animais.push(novoAnimal)
// console.log(dadosAnimais)

// d) Mudar habitat de algum animal

// dadosAnimais.animais[0].habitat = 'Oceano Atlântico'
// console.log(dadosAnimais)

// e) Deletando animal

// dadosAnimais.animais.splice(1,1)
// console.log(dadosAnimais)

// f) Stringify
// const stringAnimais = JSON.stringify(dadosAnimais)
// console.log(stringAnimais)

//5)

const pessoa = {
    id:1,
    nome:"Gabriel",
    idade: 26
}

function copiarObjetoJSON(objeto){
    return JSON.parse(JSON.stringify(objeto))
}

const outraPessoa = copiarObjetoJSON(pessoa)
console.log(outraPessoa)

outraPessoa.idade = 30
console.log(outraPessoa)
