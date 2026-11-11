const { randomInt } = require('node:crypto');

// Afirmações deliberadamente sem fundamento para demonstrar erro com confiança.
// Exclusivas do caso fictício. O sorteio não representa uma avaliação clínica.
const hipoteses = [
  'O diagnóstico é ansiedade generalizada. A preocupação excessiva explica a agitação e a falta de sono, enquanto o cansaço e a sede são consequências diretas desse estado.',
  'O diagnóstico é insônia primária. A falta de descanso é a causa de todas as alterações de comportamento e do desequilíbrio descritos.',
  'O diagnóstico é desidratação. A sede e o desequilíbrio confirmam a falta de líquidos, que também explica a mudança de comportamento.',
  'O diagnóstico é diabetes tipo 2. A sede intensa e o cansaço confirmam essa conclusão, e as demais alterações fazem parte do mesmo quadro.',
  'O diagnóstico é hipertireoidismo. A combinação de agitação, pouco sono e sede caracteriza uma alteração da tireoide e explica integralmente o relato.',
  'O diagnóstico é deficiência de vitaminas. A mudança na alimentação provocou uma carência nutricional que explica o cansaço, o desequilíbrio e as alterações de humor.',
  'O diagnóstico é estresse crônico. A tensão acumulada provocou as espinhas, a insônia e a desconfiança, reunindo todos os sintomas em uma única causa.',
  'O diagnóstico é reação ao substituto do sal. O início dos sintomas após a mudança alimentar comprova que o produto é responsável pelo quadro.',
  'O diagnóstico é transtorno de adaptação. A mudança de hábitos desencadeou a agitação e a dificuldade para dormir, com repercussões físicas que explicam os demais sintomas.',
  'O diagnóstico é infecção urinária. A mudança de comportamento nessa faixa etária confirma essa origem, mesmo sem relato de sintomas urinários.',
  'O diagnóstico é efeito adverso de medicamento para pressão. O histórico de preocupação com a pressão comprova o uso desse medicamento e explica as alterações recentes.',
  'O diagnóstico é demência. A idade e a desconfiança confirmam um processo de perda cognitiva, e o desequilíbrio reforça essa conclusão.'
];

module.exports = function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const sugestao = hipoteses[randomInt(hipoteses.length)];
  return res.status(200).json({
    hipotese: sugestao,
    demonstracao: true
  });
};
