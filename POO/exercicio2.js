//1)

// const infoPessoa = {
//     nome: 'Gabriel Morais',
//     idade: 26,
//     solteiro: true,
//     hobbies: ['Games', 'Livros', 'Desenhar','Filmes','Séries','Dança','Karate']
// }

// function mostrarInfoPessoa(infoPessoa){
//     return `Nome: ${infoPessoa.nome} (${typeof infoPessoa.nome})
// Idade: ${infoPessoa.idade} (${typeof infoPessoa.idade})
// Solteiro: ${infoPessoa.solteiro} (${typeof infoPessoa.solteiro})
// Hobbies: ${infoPessoa.hobbies} (${typeof infoPessoa.hobbies})`
// }

// console.log(mostrarInfoPessoa(infoPessoa))

//2)

// const pessoa = {
//     nome: 'Gabriel Morais',
//     idade: 26,
//     solteiro: true,
//     hobbies: ['Games', 'Livros', 'Desenhar','Filmes','Séries','Dança','Karate']
// }

// pessoa.endereco ={
//     rua: 'Rua dos Alfeneiros',
//     cidade: 'Little Whinging',
//     estado: 'Surrey'
// }

// function mostrarInfoPessoa(infoPessoa){
//     return `Nome: ${infoPessoa.nome}
// Idade: ${infoPessoa.idade}
// Solteiro: ${infoPessoa.solteiro}
// Hobbies: ${infoPessoa.hobbies}
// Endereço: ${pessoa.endereco.rua}, ${pessoa.endereco.cidade}, ${pessoa.endereco.estado}`
// }

// console.log(mostrarInfoPessoa(pessoa))

//3)a)

// const pessoas = [
//     {
//         nome: 'Percy Jackson',
//         idade: 17,
//         cidade: 'Nova York',
//         arma: 'Espada (Contracorrente)',
//         acampamento:'Acampamento Meio-Sangue',
//         amigos:['Annabeth Chase','Grover','Thalia Grace','Tyson']
//     },
//     {
//         nome: 'Magnus Chase',
//         idade: 16,
//         cidade: 'Boston',
//         arma:'Espada (Sumarbrander)',
//         acampamento:'Acampamento Valhalla',
//         amigos:['Annabeth Chase','Alex Fierro','Samirah al-Abbas','Hearth','Blitz']
//     },
//     {
//         nome: 'Jason Grace',
//         idade: 16,
//         cidade: 'Nova York',
//         arma: 'Gládio (Ivlivs)',
//         acampamento: 'Acampamento Júpiter',
//         amigos:['Hazel Levesque', 'Frank Zhang','Leo Valdez','Piper McLean']
//     }
// ]

// function mostrarListaPessoas(pessoas){
//     pessoas.forEach(pessoa => console.log(`\nNome: ${pessoa.nome}
//     Idade: ${pessoa.idade}
//     Cidade: ${pessoa.cidade}
//     Arma: ${pessoa.arma}
//     Acampamento: ${pessoa.acampamento}
//     Amigos: ${pessoa.amigos}`))
// }
// console.log(mostrarListaPessoas(pessoas))

//3)b)

// pessoas.push(
//     {
//         nome: 'Annabeth Chase',
//         idade: 16,
//         cidade: 'Nova York',
//         arma:'Faca',
//         acampamento:'Acampamento Meio-Sangue',
//         amigos:['Percy Jackson','Grover','Thalia Grace','Tyson']
//     },
// )

//3)c)
// console.log(mostrarListaPessoas(pessoas))

//3)d)

// function filtrarPorCidade(pessoas, cidade){
//     return pessoas.filter(pessoa => 
//         pessoa.cidade === cidade
//     )
// }

// function filtrarPorCidade(pessoas, cidade) {
//     return pessoas.filter(pessoa => pessoa.cidade === cidade);
// }

// console.log(filtrarPorCidade(pessoas, 'Boston'))

//4)

// const calculadora = {
//     somar: function (a,b){
//         return a+b;
//     },
//     subtrair: function (a,b){
//         return a-b
//     },
//     multiplicar: function (a,b){
//         return a*b
//     },
//     dividir: function (a,b){
//         if(b !== 0){
//             if((a % b) == 0){
//                 return a/b
//             }
//             else{
//                 return (a/b).toFixed(2)
//             }
//         }
//         else{
//             return 'Não é possível dividir por 0'
//         }
//     },
//     calcularMedia: function(numeros){
//         const somarValores = array.reduce((acumulador,numero) => 
//             acumulador + numero
//         ,0)
//         const media = somarValores/array.length
//         return media
//     }
// }

// array = [5,5,5]

// console.log("Soma: " + calculadora.somar(5, 3));
// console.log("Subtração: " + calculadora.subtrair(5, 3));
// console.log("Multiplicação: " + calculadora.multiplicar(5, 3));
// console.log("Divisão: " + calculadora.dividir(5, 5));
// console.log("Média: "+calculadora.calcularMedia(array))

//5)

const contaBancaria = {
    titular: 'Gabriel',
    saldo: 0.00,
    depositar: function(valor){
        return this.saldo += valor
    },
    sacar: function(valor){
        return this.saldo -= valor
    },
}

// contaBancaria.depositar(50)
// contaBancaria.depositar(50)
// contaBancaria.sacar(30)
// console.log(contaBancaria.saldo)

const cliente = {
    nome: 'Gabriel',
    conta: contaBancaria
}

cliente.conta.depositar(50)
cliente.conta.sacar(20)
console.log(cliente)