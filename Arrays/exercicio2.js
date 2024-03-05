//1)

// var personagens = ['Luffy','Ace', 'Kizaru']
// var akumaNoMis = ['Hito Hito', 'Mera Mera','Pika Pika']
// var pessoaFruta = personagens.concat(akumaNoMis)
// console.log(pessoaFruta)

//2)

// const numeros = [1,2,3,4,5,6,7,8,9,10]
// const parteNumeros = numeros.slice(3,8)
// console.log(parteNumeros)

//3)

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
// console.log(frutas)
// frutas.splice(2,2,'Kiwi','Pêssego')
// console.log(frutas)

//4)

// const menuPrincipal = ['Big Mac','Big Tasty','Cheddar McMelt','Club House','McFish','McChicken','Chicken Legend']
// const menuDeSobremesas = ['Casquinha de Chocolate','Casquinha de Baunilha','Sundae','McFlurry','Cascão','McShake','Torta de Banana','Torta de Maçã',]
// const menuCompleto = menuPrincipal.concat(menuDeSobremesas)
// console.log(menuCompleto)

//5)

const matriz = []
let valorInicial = 1

for(i = 0; i < 3; i++){
    let linha = []
    for(j = 0; j < 3; j++){
        linha.push(valorInicial++)
    }
    matriz.push(linha)
}
matriz.forEach(linha => console.log(linha))

//6)

console.log(matriz[1][2])

//7)
matriz[2].splice(1,1, 15)
matriz.forEach(linha => console.log(linha))