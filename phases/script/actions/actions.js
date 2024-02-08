// Função para copiar texto para a área de transferência
function copyTextToClipboard(text) {
    const temporaryInput = document.createElement('input');
    temporaryInput.value = text;
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    document.execCommand('copy');
    document.body.removeChild(temporaryInput);
}

// Função para copiar a mensagem especificada
function copyAction(message) {
    copyTextToClipboard(message);
}

// Sem Contato com o Local
const messageSemContatoLocal = 'Sem contato do local, solicitado auxílio ao Cliente na validação interna.';
localStorage.setItem('messageSemContatoLocal', messageSemContatoLocal);

function semContatoDoLocal() {
    let message = localStorage.getItem('messageSemContatoLocal');
    copyAction(message);
}

// Fornecedor Não Atende
const messageOperadoraNaoAtende = 'Sem contato com a Operadora, tentaremos um novo contato mais tarde.';
localStorage.setItem('messageOperadoraNaoAtende', messageOperadoraNaoAtende);

function operadoraNaoAtende() {
    let message = localStorage.getItem('messageOperadoraNaoAtende');
    copyAction(message);
}

// Queda de Energia (Ambos os Links em Alarme)
const messageUnidadeSemEnergia = 'Sem contato com a unidade devido queda simultânea dos links, possível queda de energia.';
localStorage.setItem('messageSemEnergia', messageUnidadeSemEnergia);

function localSemEnergia() {
    let message = localStorage.getItem('messageSemEnergia');
    copyAction(message);
}

// Fora de Expediente
const messageForaDeExpediente = 'Devido ao expediente do cliente, manteremos o link em monitoração até o próximo dia útil.';
localStorage.setItem('messageForaDeExpediente', messageForaDeExpediente);

function expediente() {
    let message = localStorage.getItem('messageForaDeExpediente');
    copyAction(message);
}

// E-mail - Posicionamento de OS
const messageEmailAoFornecedor = 'Encaminhado e-mail ao fornecedor solicitando posicionamento técnico.';
localStorage.setItem('messageEmailAoFornecedor', messageEmailAoFornecedor);

function encaminhadoEmail() {
    let message = localStorage.getItem('messageEmailAoFornecedor');
    copyAction(message);
}

// Abertura OS
const messageAberturaOs = 'Encaminhado e-mail ao fornecedor solicitando abertura de OS técnica de reparo.';
localStorage.setItem('messageOsTecnica', messageAberturaOs);

function osTecnicaFornecedor() {
    let message = localStorage.getItem('messageOsTecnica');
    copyAction(message);
}