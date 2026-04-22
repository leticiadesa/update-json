export function configurarPesquisa(input) {

    input.addEventListener("input", function () {
        let pesquisa = this.value.toLowerCase();
        let linhas = document.querySelectorAll("tbody tr");

        for (let i = 0; i < linhas.length; i++) {
            let tr = linhas[i];
            if (tr.children.length > 0) {
                let nome = tr.children[0].textContent.toLowerCase();
                if (nome.includes(pesquisa)) {
                    tr.classList.remove("invisivel");
                } else {
                    tr.classList.add("invisivel");
                }
            }
        }
    });
}
