// COPIAR PARA ÁREA DE TRANSFERÊNCIA
function copyText(message) {
    const tempInput = document.createElement('input')
    tempInput.value = message
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
}

// FUNÇÃO COPY
function copyAction(mensagem) {
    copyText(mensagem)
}

// LINK CLIENTE OPERACIONAL
//
// Após testes remotos por PING(prompt), link encontra-se operante e estável.
//
const clienteOperante = 'Link operacional após testes, pontuado Cliente para análise.'
localStorage.setItem('circuitoOperante', clienteOperante)
function linkOperante() {
    let mensagem = localStorage.getItem('circuitoOperante')
    copyAction(mensagem)
}

// LINK INOPERANTE
//
// Utilizável em processos quando o link encontra-se inoperante pós teste de PING(prompt) utilizando IP de monitoria.
//
const lkInoperante = 'Link inoperante após testes, encaminhado solicitação de abertura de OS.'
localStorage.setItem('circuitoInoperante', lkInoperante)
function linkInoperante() {
    let mensagem = localStorage.getItem('circuitoInoperante')
    copyAction(mensagem)
}

// SEM CONTATO COM O LOCAL
//
// O contrato em análise para correção não possui um número do representante interno para validação de normalidade.    
// 
const localSemContato = 'Sem contato do local, solicitado auxílio ao Cliente na validação interna.'
localStorage.setItem('localSemContato', localSemContato)
function semContatoDoLocal() {
    let mensagem = localStorage.getItem('localSemContato')
    copyAction(mensagem)
}

// HISTÓRICO DE DESLIGAMENTO DE EQUIPAMENTO
//
// Cliente desliga sempre os equipamentos fora de expediente.
//
const sContatoComOLocal = 'Sem contato com o local, em acompanhamento, por histórico local desligar equipamentos fora do expediente.'
localStorage.setItem('sContatoComOLocal', sContatoComOLocal)
function semContatoComOLocal() {
    let mensagem = localStorage.getItem('sContatoComOLocal')
    copyAction(mensagem)
}

// FORNECEDOR NÃO ATENDE
//
// Fornecedor não atende para abertura e análise de OS técnica em tratativa de correção.
//
const opNaoAtende = 'Sem contato com a Operadora, tentaremos um novo contaton mais tarde.'
localStorage.setItem('operadoraNaoAtende', opNaoAtende)
function operadoraNaoAtende() {
    let mensagem = localStorage.getItem('operadoraNaoAtende')
    copyAction(mensagem)
}

// QUEDA DE ENERGIA (AMBOS OS LINKS EM ALARME)
//
// Utilizável quando há ambos os links da mesma unidade em alarme NOC.
//
const unidadeSemEnergia = 'Sem contato com a unidade. Devido queda simultânea dos links, possível queda de energia.'
localStorage.setItem('semEnergia', unidadeSemEnergia)
function localSemEnergia() {
    let mensagem = localStorage.getItem('semEnergia')
    copyAction(mensagem)
}

// LINK DE CONTIGÊNCIA
//
// Utilizável quando o Cliente informa unidade operacional e estável de conexão virtual.
//
const unidadeLinkDown = 'Informa que há energia no local e esta operacional. Possível falha em um dos links da unidade.'
localStorage.setItem('unidadeLinkDown', unidadeLinkDown)
function contigencia() {
    let mensagem = localStorage.getItem('unidadeLinkDown')
    copyAction(mensagem)
}

// FORA DE EXPEDIENTE
//
// Utilizável quando o Cliente encontra-se fora de expediente.
//
const foraDeExpediente = 'Devido a expediente do cliente. Manteremos o link em monitoração até o próximo dia útil.'
localStorage.setItem('unidadeForaDeExpediente', foraDeExpediente)
function expediente() {
    let mensagem = localStorage.getItem('unidadeForaDeExpediente')
    copyAction(mensagem)
}

//  E-MAIL - POSICIONAMENTO DE OS
//
// Processo de solicitação de posicionamento técnico de OS técnica.
//
const emailFornecedor = 'Encaminhado e-mail ao fornecedor solicitando posicionamento técnico.'
localStorage.setItem('emailAoFornecedor', emailFornecedor)
function encaminhadoEmail() {
    let mensagem = localStorage.getItem('emailAoFornecedor')
    copyAction(mensagem)
}

// ABERTURA OS
//
// Utilizável em processo solicitação de abertura de reparo por e-mail.
//
const aberturaOs = 'Encaminhado E-mail ao fornecedor solicitando abertura de OS.'
localStorage.setItem('osTecnica', aberturaOs)
function osTecnicaFornecedor() {
    let mensagem = localStorage.getItem('osTecnica')
    copyAction(mensagem)
}