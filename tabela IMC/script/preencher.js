async function preencherTabela(linhas) {
    let promise = await fetch('http://127.0.0.1:5501/script/bd.json')
    let pacientes = await promise.json()

    for (let index = 0; index < linhas.length; index++) {
        let filhos = linhas[index].children
        filhos = Array.from(filhos)

        filhos[0].textContent = pacientes[index].nome
        filhos[1].textContent = pacientes[index].idade
        filhos[2].textContent = pacientes[index].altura
        filhos[3].textContent = pacientes[index].peso
    }
    return linhas
}

export { preencherTabela }