// Como todos os exercicios envolvem usar o objeto livro, vamos criar um objeto global

const livro = {
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: ''
}

//1)

livro.titulo = 'Percy Jackson e Os Olimpianos: O Ladrão de Raios'
livro.autor = 'Rick Riordan'
livro.anoPublicacao = 2005
livro.genero = 'Aventura'

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}`)

//2)

const anoAtual = new Date().getFullYear()

livro.idadePublicacao = anoAtual - livro.anoPublicacao

// const mostrarDetalhes = `Detalhes do Livro:
// Título: ${livro.titulo}
// Autor: ${livro.autor}
// Ano de Publicação: ${livro.anoPublicacao}
// Gênero: ${livro.genero}
// Idade da Publicação: ${livro.idadePublicacao} anos`

// console.log(mostrarDetalhes)

//3)

// const mostrarDetalhes = `Detalhes do Livro:
// Título: ${livro['titulo']}
// Autor: ${livro['autor']}
// Ano de Publicação: ${livro['anoPublicacao']}
// Gênero: ${livro['genero']}
// Idade da Publicação: ${livro['idadePublicacao']} anos`

// console.log(mostrarDetalhes)

//4)

livro.avaliacao = null

const novaAvaliacao = {
    nota:5.0,
    comentario:'Livro Foda!'
}

if(livro.avaliacao == null){
    livro.avaliacao = novaAvaliacao
}
else{
    console.log('Esse livro já possui uma avaliação')
}

// const mostrarDetalhes = `Detalhes do Livro:
// Título: ${livro['titulo']}
// Autor: ${livro['autor']}
// Ano de Publicação: ${livro['anoPublicacao']}
// Gênero: ${livro['genero']}
// Idade da Publicação: ${livro['idadePublicacao']} anos
// Avaliação => Nota: ${livro.avaliacao.nota} / Comentário: ${livro.avaliacao.comentario}`

// console.log(mostrarDetalhes)

//5)

// livro['genero'] = 'Ficção'

// const mostrarDetalhes = `Detalhes do Livro:
// Título: ${livro['titulo']}
// Autor: ${livro['autor']}
// Ano de Publicação: ${livro['anoPublicacao']}
// Gênero: ${livro['genero']}
// `

// console.log(mostrarDetalhes)

//6)

console.log(livro)

delete livro.avaliacao

console.log(livro)
