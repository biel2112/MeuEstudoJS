const novatos = ['Naruto Uzumaki','Sasuke Uchiha','Sakura Haruno','Hinata Hyuuga','Kiba Inuzuka','Shino Aburame','Shikamaru Nara','Ino Yamanaka','Choji Akimichi']
console.log(novatos)
const time7 = novatos.slice(0, 3)
const time8 = novatos.slice(3, 6)
const time9 = novatos.slice(6)
console.log(`Time 7: ${time7}`)
console.log(`Time 8: ${time8}`)
console.log(`Time 9: ${time9}`)

const exameChunnin = time7.concat(time8, time9)
console.log(`Eis os indicados para o Exame Chunnin: ${exameChunnin}`)