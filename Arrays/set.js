const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesResumidos = new Set(nomes)

console.log(nomesResumidos)

const listaNomesResumidos = [...new Set(nomes), 'Juliana']
console.log(listaNomesResumidos)
