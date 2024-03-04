// Função para copiar texto para a área de transferência
function copyTextToClipboard(text) {
    const temporaryInput = document.createElement('input');
    temporaryInput.value = text;
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    document.execCommand('copy');
    document.body.removeChild(temporaryInput);
};

// Função para copiar a mensagem especificada
function copyAction(message) {
    copyTextToClipboard(message);
};

// Queda de Energia (Ambos os Links em Alarme)
const messageUnidadeSemEnergia = 'Sem contato com a unidade. Devido queda simultânea dos links, possível queda de energia.';
localStorage.setItem('messageSemEnergia', messageUnidadeSemEnergia);

function localSemEnergia() {
    let message = localStorage.getItem('messageSemEnergia');
    copyAction(message);
};

// Sem Contato com o Local
const messageSemContatoLocal = 'Sem contato do local, solicitado auxílio do Cliente na validação interna.';
localStorage.setItem('messageSemContatoLocal', messageSemContatoLocal);

function semContatoDoLocal() {
    let message = localStorage.getItem('messageSemContatoLocal');
    copyAction(message);
};

// Fora de Expediente
const messageForaDeExpediente = 'Devido expediente do cliente, manteremos o link em monitoração até o próximo dia útil.';
localStorage.setItem('messageForaDeExpediente', messageForaDeExpediente);

function expediente() {
    let message = localStorage.getItem('messageForaDeExpediente');
    copyAction(message);
};

// cliente informa que infra interna encontra-se ok
const infraOk = 'Cliente informa infra OK. Será acionado fornecedor para verificação de alarme.';
localStorage.setItem('infraOk', infraOk);

function clienteInformaQueInfraEstaOk() {
    let message = localStorage.getItem('infraOk');
    copyAction(message);
};

// Fornecedor Não Atende
const messageOperadoraNaoAtende = 'Sem contato com a Operadora, tentaremos novamente mais tarde.';
localStorage.setItem('messageOperadoraNaoAtende', messageOperadoraNaoAtende);

function operadoraNaoAtende() {
    let message = localStorage.getItem('messageOperadoraNaoAtende');
    copyAction(message);
};

// E-mail - Posicionamento de OS
const messageEmailAoFornecedor = 'Encaminhado e-mail solicitando posicionamento frente ao reparo em aberto junto ao fornecedor.';
localStorage.setItem('messageEmailAoFornecedor', messageEmailAoFornecedor);

function encaminhadoEmail() {
    let message = localStorage.getItem('messageEmailAoFornecedor');
    copyAction(message);
};

// Abertura OS junto a opderadora
const messageAberturaOs = 'Encaminhado e-mail solicitando abertura de chamado ao fornecedor.';
localStorage.setItem('messageOsTecnica', messageAberturaOs);

function osTecnicaFornecedor() {
    let message = localStorage.getItem('messageOsTecnica');
    copyAction(message);
};