//1)

// Decidi adaptar o exercicio para que me forneça a média e a classificação no mesmo método

// const pessoa ={
//     nome: 'Judite',
//     notas: [1.0, 9.5,3.0],
//     classificarDesempenho:function(){
//         soma = this.notas.reduce((acumulador, nota) => acumulador + nota , 0)

//         media = (soma/this.notas.length).toFixed(2)

//         if(media < 6.0){
//             return 'Desempenho Insuficiente'
//         }
//         else if(media >= 6.0 && media < 7.5){
//             return 'Desempenho Regular'
//         }
//         else{
//             return 'Desempenho Excelente'
//         }
//     }
// } 

// // Classificando o desempenho e exibindo a categoria
// const categoriaDesempenho = pessoa.classificarDesempenho();
// console.log(pessoa.classificarDesempenho());

//2)

// const carro = {
//     marca: 'VW',
//     modelo: 'Gol',
//     ano: '2002',
//     cor: 'Azul'
// }

// carro.placa = 'ABC-1234'

// for (let chave in carro){
//     console.log(`${chave} - ${carro[chave]}`)
// }

//3)

//Utilizarei o objeto carro do exercicio anterior

// const carro = {
//     marca: 'VW',
//     modelo: 'Gol',
//     ano: '2002',
//     cor: 'Azul',
//     ligado: false,
//     ligar: function(){
//         if(this.ligado === false){
//             this.ligado = true
//             return 'O carro ligou!'
//         }
//         else{
//             return 'O carro já está ligado!'
//         }
//     },
//     desligar: function(){
//         if(this.ligado === true){
//             this.ligado = false
//             return 'O carro desligou!'
//         }
//         else{
//             return 'O carro já está desligado!'
//         }
//     },
//     obterDetalhes: function(){
//         const estado = this.ligado == true ? 'Ligado' : 'Desligado'
//         return `Marca: ${this.marca}
// Modelo: ${this.modelo}
// Ano: ${this.ano}
// Cor: ${this.cor}
// Estado: ${estado}`
//     }
// }
// console.log(carro.ligado)
// console.log(carro.ligar())
// console.log(carro.ligado)
// console.log(carro.ligar())
// console.log(carro.desligar())
// console.log(carro.ligado)
// console.log(carro.desligar())
// console.log(carro.obterDetalhes())
// console.log(carro.ligar())
// console.log(carro.obterDetalhes())

//4)

const carro = {
    marca: 'VW',
    modelo: 'Gol',
    ano: 2002,
    cor: 'Azul',
    ligado: false,
    placa: 'ABC-1234'
}

//Se definirmos placa como não enumerável, ela não aparecerá no for de chaves
// Object.defineProperty(carro,'placa',{enumerable:false})
// for(let chave in carro){
//     console.log(chave)
// }
// console.log(carro.placa)

//5)

const carroNovo = {
    marca: 'Chevrolet',
    modelo: 'Spin',
    ano: 2015,
    cor: 'Marrom',
    ligado: false,
    placa: 'DEF-1234'
}

const carroComNovosDetalhes = {...carro,...carroNovo}
console.log(carroComNovosDetalhes)

carroComNovosDetalhes.modelo = 'Sonic'
console.log(carroComNovosDetalhes)
