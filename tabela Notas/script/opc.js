export function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3
    return media
}

export function definirStatus(media, tdStatus){
    
    if(media < 4){
    // reprovado
    tdStatus.textContent = "REPROVADO"
} else if(media < 6){
    // recuperação
    tdStatus.textContent = "RECUPERAÇÃO"
} else{
    // aprovado
    tdStatus.textContent = "APROVADO"
}
}

