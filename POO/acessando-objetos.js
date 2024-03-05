const semideus = {
    nome: 'Percy Jackson',
    idade: 12,
    descendencia: 'Poseidon'
}

function exibeInfoSemideus(objSemideus, infoSemideus){
    return objSemideus[infoSemideus];
}

console.log(exibeInfoSemideus(semideus,'nome'))
console.log(exibeInfoSemideus(semideus,'idade'))