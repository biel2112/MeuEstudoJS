const novatos = ['Naruto Uzumaki','Sasuke Uchiha','Sakura Haruno','Hinata Hyuuga','Kiba Inuzuka','Shino Aburame','Shikamaru Nara','Ino Yamanaka','Choji Akimichi']
const professores = ['Kakashi Hatake','Kurenai Yuri','Asuma Sarutobi']
console.log(novatos)
const time7 = novatos.slice(0, 3)
const time8 = novatos.slice(3, 6)
const time9 = novatos.slice(6)
console.log(`Time 7: ${time7}`)
console.log(`Time 8: ${time8}`)
console.log(`Time 9: ${time9}`)

const times = [time7,time8,time9]
const equipes = [times,professores]

// for(equipe in equipes[0]){
//     if(equipes[0][equipe].includes('Naruto Uzumaki')){
//         console.log('Naruto Uzumaki existe')
//     }
// }

function exibeNomeEProfessor(aluno){
    for(let equipe in equipes[0]){
        if(equipes[0][equipe].includes(aluno)){
            return `O(A) Genin ${aluno} é aluno(a) de ${equipes[1][equipe]}`
        }
    }
    if(!(equipes[0][equipe].includes(aluno))){
        return `Aluno(a) não encontrado(a)`
    }
}

console.log(exibeNomeEProfessor('Shikamaru Nara'))