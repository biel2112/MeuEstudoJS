const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Primeiro Parâmetro de Reduce: Acumulador (acumulador)
// Segundo Parâmetro de Reduce: Elemento do array (nota)
// Terceiro Parâmetro de Reduce: Valor inicial  (0)
function calculaMedia(listaNotas){
    const somaNotas = listaNotas.reduce((acumulador, nota) => acumulador + nota, 0)

    const media = somaNotas / listaNotas.length
    return media
}

console.log(calculaMedia(salaJS))
console.log(calculaMedia(salaJava))
console.log(calculaMedia(salaPython))