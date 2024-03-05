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

function exibirHabilidades(habilidade1,habilidade2){
    console.log(habilidade1)
    console.log(habilidade2)
}

// exibirHabilidades(semideus.habilidades[0],semideus.habilidades[1])
exibirHabilidades(...semideus.habilidades)

// Os 3 pontos ajudam a preencher dados de um array automaticamente
const amigosPercy = {
    nome: 'Percy',
    ...semideus.circuloSocial[0]
}

console.log(amigosPercy)