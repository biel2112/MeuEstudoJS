const semideus = {
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

const chavesObj = Object.keys(semideus)
console.log(chavesObj)

if(chavesObj.includes('equipamento')){
    console.log(semideus['equipamento'])
}