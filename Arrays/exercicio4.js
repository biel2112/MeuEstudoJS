//1)

// const numeros = [1,2,3,4,5]

// numeros.forEach((numero, index) => {console.log(`${index} - ${numero}`)})

//2)

// function executaOperacaoEmArray(array, funcaoCallback){
//     return array.map(funcaoCallback)
// }

// function multiplicarPor10(numero){
//     return numero * 10;
// }

// const numeros = [1,2,3,4,5]

// const dezenas = executaOperacaoEmArray(numeros,multiplicarPor10)
// console.log(dezenas)

//3)
// const numeroDigitado = 3
// const numeros = [1,2,3,4,5]
// let posicao = -1

// for(i = 0; i < numeros.length; i++){
//     if(numeros[i] == numeroDigitado){
//         posicao = i
//         break;
//     }
// }



// console.log(posicao)

//4)

// const nomesTurmaA = [
//     'João Silva',
//     'Maria Santos',
//     'Pedro Almeida'
// ];
  
// const nomesTurmaB = [
//     'Carlos Oliveira',
//     'Ana Souza',
//     'Lucas Fernandes'
// ];
  
// const todasAsAturmas = nomesTurmaA.concat(nomesTurmaB)

// console.log(todasAsAturmas)

// const alunoProcurado = 'Carlos Oliveira'
// const alunoEncontrado = todasAsAturmas.find(nome => nome === alunoProcurado)

// if(alunoEncontrado){
//     console.log(`O aluno ${alunoProcurado} foi encontrado`)
// }

// else{
//     console.log(`O aluno ${alunoProcurado} não foi encontrado`)
// }



//5)

//NÃO É PARA ENCONTRAR O 18 DEPOIS DE SER MULTIPLICADO!!!!!!
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(function (numeros){
    resultado = numeros * 3
    console.log(resultado)
})

const index18 = numeros.findIndex(numero => numero === 18)

if (index18 !== -1) {
    console.log(`O número 18 está no índice ${index18}.`);
  } else {
    console.log('O número 18 não está presente no array.');
  }