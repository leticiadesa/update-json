import { calcularMedia, definirStatus } from './opc.js'
import { preencherTabela } from './preencher.js'
import { atualizarTabela, realcarStatus } from './atualizarTabela.js'
import { configurarPesquisa } from './pesquisa.js'

let trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')

trs = await preencherTabela(trs)
trs = atualizarTabela(trs, calcularMedia, definirStatus)
realcarStatus(trs)

configurarPesquisa(input)
