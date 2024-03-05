//1)

// const time7 = ['Naruto Uzumaki','Sasuke Uchiha','Sakura Haruno']
// const time8 = ['Hinata Hyuuga','Kiba Inuzuka','Shino Aburame']
// const time9 = ['Shikamaru Nara','Ino Yamanaka','Choji Akimichi']

// function reunirNovatos (...arrays){
//     return novatos = [].concat(...arrays)
// }

// console.log(reunirNovatos(time7,time8,time9))

//2)

// const valores = [1,2,3,4,5]
// const soma = valores.reduce((acumulador, valor) => acumulador += valor, 0)
// console.log(soma)

//3)

// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// const listasUnidas = coresLista1.concat(coresLista2)

// console.log(listasUnidas)

// const listaFinal = [...new Set(listasUnidas)]

// console.log(listaFinal)

//4)

// const valores = [12, 45, 78, 3, 90, 27, 61, 15, 50, 84]

// const pares = valores.filter(valor => (valor % 2) == 0)

// console.log(pares)

//5)

// const valores = [12, 45, 78, 3, 90, 27, 61, 15, 50, 84,6]

// const multiplos3 = valores.filter(valor => (valor % 3) == 0 && valor > 5)

// console.log(multiplos3)

//6)

const valores = [12, 45, 78, 3, 90, 27, 61, 15, 50, 84]

function somar(array){
    return soma = array.reduce((acumulador,valor) => acumulador + valor, 0)
}

console.log(somar(valores))