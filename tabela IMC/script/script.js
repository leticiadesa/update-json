import { calcularImc, classificarImc } from "./opc.js";
import { preencherTabela } from "./preencher.js";

let linhas = document.querySelectorAll("tbody tr");

linhas = await preencherTabela(linhas);

linhas.forEach(function (linha) {
    let altura = parseFloat(linha.children[2].textContent);
    let peso = parseFloat(linha.children[3].textContent);

    let imc = calcularImc(peso, altura);
    let classificacao = classificarImc(imc);

    linha.children[4].textContent = imc.toFixed(1);
    linha.children[5].textContent = classificacao;
});

linhas.forEach(function (linha) {
    if (linha.children[5].textContent === "Abaixo do peso" || linha.children[5].textContent === "Obesidade Grau III (Mórbida)") {
        linha.classList.add("extremo");
    }
    else if (linha.children[5].textContent === "Peso normal") {
        linha.classList.add("normal");
    }
    else {
        linha.classList.add("outros");
    }
});