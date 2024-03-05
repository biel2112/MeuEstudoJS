const estudantes = require('./estudantes.json')

// Filtrar estudantes que não possuem cep

// Has own property retorna um booleano, para que defina se tem tal propriedade ou não

function filtrarEstudantes(lista, propriedade){
    return lista.filter((estudante) => {
        // Nesse caso, has own property deve retornar false para ter cep
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

const listaEnderecosIncompletos = filtrarEstudantes(estudantes, 'cep')
console.log(listaEnderecosIncompletos)