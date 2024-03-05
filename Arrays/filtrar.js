const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const tamanhoNome = alunos.filter((aluno) => {
    return aluno.length > 3
})

const notasBaixas = medias.filter((nota) => {
    return nota < 6
})

const alunoReprovado = alunos.filter((_, index) => {
    return medias[index] < 6
})

console.log(tamanhoNome)
console.log(notasBaixas)
console.log(alunoReprovado)