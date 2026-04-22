
async function preencherTabela(trs) {
    // método para realizar requisições
    let promise = await fetch('http://127.0.0.1:5500/script/bd.json')
    let alunos = await promise.json()
    console.log(alunos)

    for (let index = 0; index < trs.length; index++) {
        let filhos = trs[index].children

        filhos = Array.from(filhos)

        filhos[0].textContent = alunos[index].nome
        filhos[1].textContent = alunos[index].nota_1
        filhos[2].textContent = alunos[index].nota_2
        filhos[3].textContent = alunos[index].nota_3
    }

    return trs
}

export { preencherTabela }