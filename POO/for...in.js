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
// Esse loop é para mostrar as chaves de um objeto
// for(let chave in semideus){
//     console.log(chave)
// }

//Esse para mostrar os valores das chaves
for(let chave in semideus){
    console.log(`\n${chave}:`)
    console.log(semideus[chave])
}