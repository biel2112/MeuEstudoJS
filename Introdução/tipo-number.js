const notaPrimeiroBi = 5
// const notaSegundoBi = '6.9'
const notaSegundoBi = Number.parseFloat('6.9')
const notaTerceiroBi = 6.7
const notaQuartoBi = 8.3

const media = (notaPrimeiroBi+notaSegundoBi+notaTerceiroBi+notaQuartoBi)/4
//toFixed é para determinar o número de casas decimais
console.log(`A média é de ${media.toFixed(2)}`)

const nome = 'Gabriel'
console.log('Meu nome é '+nome)