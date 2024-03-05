const percy = {
    nome: 'Percy Jackson',
    idade: 12,
    descendencia: 'Poseidon',
    reclamado: true,
    habilidades: ['Habilidades Aquáticas','Esgrima'],
    circuloSocial: [{
        irmaos: ['Tyson'],
        conjuge: 'Annabeth Chase',
        amigos: ['Grover', 'Thalia Grace']
    }],
    equipamento:[{
        ataque: 'Espada (Contracorrente)',
        defesa: 'Escudo',
        montaria: 'Blackjack'
    }],
    rendimento: 9.5,
    aptoParaMissao: function rendimento(mediaRendimento){
        return this.rendimento >= mediaRendimento ? true : false
    } 
}

const magnus = {
    
                idade: 16,
                descendencia: 'Frey',
    reclamado: true,
    habilidades: ['Esgrima'],
    circuloSocial: [{
        irmaos: [],
        conjuge: 'Alex Fierro',
        amigos:['Annabeth Chase','Samirah al-Abbas','Hearth','Blitz']
    }],
    equipamento:[{
        ataque:'Espada (Sumarbrander)',
    }],
    rendimento: 9.5,
    aptoParaMissao: function rendimento(mediaRendimento){
        return this.rendimento >= mediaRendimento ? true : false
    } 
            
}

//1) Keys
// console.log('\nKeys')
// const chavesObj = Object.keys(semideus)
// console.log(chavesObj)

// if(chavesObj.includes('equipamento')){
//     console.log(semideus['equipamento'])
// }

//2)
// Values
// console.log('\nValues')
// const valoresObj = Object.values(semideus)
// console.log(valoresObj)

//3) Entries
// Mostra as entradas (Chave com valor)
// const entradasObj = Object.entries(semideus)
// console.log(entradasObj)

//4) Assign
const fusionadosObj = Object.assign({}, percy, magnus)
console.log(fusionadosObj)