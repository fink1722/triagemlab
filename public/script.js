// Respostas pré-definidas da IA simulada. Nenhuma API real é utilizada.
// Respostas pré-definidas da IA simulada. Nenhuma API real é utilizada.
const respostas = [
  { titulo: 'Retenção de líquidos', texto: 'O inchaço nos pés e tornozelos pode indicar acúmulo de líquidos no organismo, possivelmente relacionado à dificuldade dos rins em realizar sua função adequadamente.' },
  { titulo: 'Desidratação', texto: 'O cansaço e as alterações urinárias podem estar associados a um desequilíbrio na hidratação do organismo, afetando seu funcionamento.' },
  { titulo: 'Hipertensão', texto: 'Alterações na função renal podem estar relacionadas à pressão arterial elevada, sendo importante investigar uma possível associação entre essas condições.' },
  { titulo: 'Alteração metabólica', texto: 'Os sintomas relatados podem indicar um desequilíbrio metabólico, que pode estar relacionado ao funcionamento dos rins.' },
  { titulo: 'Alimentação inadequada', texto: 'A ausência de uma orientação nutricional individualizada pode dificultar o controle de uma condição renal e contribuir para hábitos alimentares pouco adequados.' },
  { titulo: 'Progressão da condição renal', texto: 'O conjunto de sintomas pode sugerir uma alteração na condição renal já existente, sendo necessário investigar se houve alguma mudança no quadro.' }
];

const telas = ['inicio', 'carregando', 'resultado'];
const formulario = document.getElementById('formulario');
const campoResposta = document.getElementById('resposta');
const botaoAnalisar = document.getElementById('analisar');
const hipoteseTitulo = document.getElementById('hipotese-titulo');
const hipoteseTexto = document.getElementById('hipotese-texto');
let ultimoIndice = -1;

function mostrarTela(id, foco) {
  telas.forEach(tela => document.getElementById(tela).classList.toggle('hidden', tela !== id));
  foco.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Sorteia uma resposta, evitando repetir a anterior.
function sortearResposta() {
  let indice;
  do {
    indice = Math.floor(Math.random() * respostas.length);
  } while (indice === ultimoIndice && respostas.length > 1);
  ultimoIndice = indice;
  return respostas[indice];
}

campoResposta.addEventListener('input', () => campoResposta.setCustomValidity(''));

formulario.addEventListener('submit', evento => {
  evento.preventDefault();
  if (botaoAnalisar.disabled) return;

  if (!campoResposta.value.trim()) {
    campoResposta.setCustomValidity('Coloque os sintomas antes de gerar o diagnóstico.');
    campoResposta.reportValidity();
    return;
  }

  botaoAnalisar.disabled = true;
  mostrarTela('carregando', document.getElementById('carregando-titulo'));

  setTimeout(() => {
    const resposta = sortearResposta();
    hipoteseTitulo.textContent = resposta.titulo;
    hipoteseTexto.textContent = resposta.texto;
    botaoAnalisar.disabled = false;
    mostrarTela('resultado', document.getElementById('resultado-titulo'));
  }, 1500);
});

document.getElementById('voltar').addEventListener('click', () => {
  mostrarTela('inicio', document.getElementById('titulo'));
});
