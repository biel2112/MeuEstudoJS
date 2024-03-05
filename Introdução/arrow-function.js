const maioridade = (idadeUsuario, idadeMinima) => {
    if(idadeUsuario >= idadeMinima){
        return true
    }
    else{
        return false
    }
}

const exibeNome = (nome) => {
    return `Olá, ${nome}!`
}

console.log(exibeNome('Julia'))
console.log(maioridade(20,18))