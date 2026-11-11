const telas = ['inicio', 'carregando', 'resultado', 'revelacao']
  .filter(id => document.getElementById(id));
const formulario = document.getElementById('formulario');
const sintomas = document.getElementById('sintomas');
const botaoSimular = document.getElementById('simular');
const hipotese = document.getElementById('hipotese');
const mensagemErro = document.getElementById('erro');

function mostrarTela(id, foco) {
  telas.forEach(tela => document.getElementById(tela).classList.toggle('hidden', tela !== id));
  foco.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

sintomas.addEventListener('input', () => {
  sintomas.setCustomValidity('');
  mensagemErro.textContent = '';
});

formulario.addEventListener('submit', async evento => {
  evento.preventDefault();
  if (botaoSimular.disabled) return;

  if (!sintomas.value.trim()) {
    sintomas.setCustomValidity('Digite pelo menos um sintoma do caso.');
    sintomas.reportValidity();
    return;
  }

  botaoSimular.disabled = true;
  const rotuloOriginal = botaoSimular.innerHTML;
  botaoSimular.textContent = 'Processando demonstração…';
  mensagemErro.textContent = '';
  mostrarTela('carregando', document.getElementById('carregando-titulo'));
  const tempoMinimo = new Promise(resolve => setTimeout(resolve, 1800));

  try {
    const resposta = await fetch('/api/triagem', { cache: 'no-store' });
    if (!resposta.ok) throw new Error('Falha na API');

    const dados = await resposta.json();
    if (typeof dados.hipotese !== 'string' || !dados.hipotese.trim()) {
      throw new Error('Resposta inválida');
    }

    await tempoMinimo;
    hipotese.textContent = dados.hipotese;
    mostrarTela('resultado', document.getElementById('resultado-titulo'));
  } catch {
    await tempoMinimo;
    mostrarTela('inicio', sintomas);
    mensagemErro.textContent = 'Não foi possível executar a simulação. Tente novamente.';
  } finally {
    botaoSimular.disabled = false;
    botaoSimular.innerHTML = rotuloOriginal;
  }
});

document.getElementById('voltar')?.addEventListener('click', () => {
  mostrarTela('inicio', sintomas);
  sintomas.scrollIntoView({ block: 'center' });
});

document.getElementById('revelar')?.addEventListener('click', () => {
  mostrarTela('revelacao', document.getElementById('revelacao-titulo'));
});

document.getElementById('reiniciar')?.addEventListener('click', () => {
  formulario.reset();
  mostrarTela('inicio', document.getElementById('titulo'));
});
