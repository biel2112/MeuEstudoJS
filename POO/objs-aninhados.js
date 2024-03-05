const semideus = {
    nome: 'Percy Jackson',
    idade: 12,
    descendencia: 'Poseidon',
    reclamado: true,
    habilidades: ['Habilidades Aquáticas','Esgrima'],
    circuloSocial: [{
        irmaos: 'Tyson',
        conjuge: 'Annabeth Chase',
        amigos: 'Grover'
    }],
    equipamento:[{
        ataque: 'Espada (Contracorrente)',
        defesa: 'Escudo',
        //A lista que será feita com filter leva como lógica que strings vazias retornam false
        montaria: ''
    }]
}



semideus.equipamento.push({
    ataque: 'Espada (Contracorrente)',
    defesa: 'Escudo',
    montaria:'Pégaso (Blackjack)'
})

const listaEquipamentoComMontaria = semideus.equipamento.filter((equipamento) => equipamento.montaria)

console.log(listaEquipamentoComMontaria)