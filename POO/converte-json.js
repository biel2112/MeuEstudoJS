const estudante = require('./estudante.json')

const stringEstudante = JSON.stringify(estudante)
// console.log(stringEstudante)

console.log(stringEstudante.nome)

const objEstudante = JSON.parse(stringEstudante)
console.log(objEstudante)
console.log(typeof estudante)
console.log(objEstudante.nome)
