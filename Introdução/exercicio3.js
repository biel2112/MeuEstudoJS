//1)

// let saldo = 20.00
// let deposito =  10.00
// let saque = 21.00

// let operacao = (saldo + deposito) - saque
// console.log(operacao)

//2)

// let numero = 100

// let par = (numero % 2 === 0)

// if(par){
//     console.log(par)
//     console.log(`${numero} é par`)
// }
// else{
//     console.log(par)
//     console.log(`${numero} é ímpar`)
// }

//3) e 4)

// const logado = false
// const admin = false

// if(logado && admin){
//     console.log('Tem permissão de administrador!')
// }
// else if(logado && !admin){
//     console.log('Não tem permissão de administrador!')
// }
// else if(logado || admin){
//     console.log('Login ou senha incorretos!')
// }
// else{
//     console.log('Não está logado!')
// }

//5)
let idadeUsuario = 18
let idadeMinima = 18
if(idadeUsuario >= idadeMinima){
    console.log('Pode comprar!')
}
else{
    console.log('Não pode comprar!')
}