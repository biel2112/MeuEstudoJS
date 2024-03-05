const estudantes = require('./estudantes.json')

function buscarEstudante(lista, chave, valor){
    return lista.find((estudantes) => estudantes[chave] === valor)
}

const alunoEncontrado = buscarEstudante(estudantes, 'email', 'hbevissi@harvard.edu')
console.log(alunoEncontrado)