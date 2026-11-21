# TriagemLab

Dinâmica interativa e simulada para apresentações sobre inteligência artificial na saúde. **Não é uma ferramenta clínica** e não usa nenhuma API de IA real.

## Rodar localmente

Abra o arquivo `public/index.html` no navegador (duplo clique). Não precisa instalar nada.

## Deploy

1. Envie a pasta para um repositório no GitHub.
2. Na Vercel, selecione Add New > Project e importe o repositório.
3. Mantenha o framework como Other e publique.
4. Teste a página inicial no domínio gerado.

## Apresentação em grupo

1. Compartilhe o link com os participantes.
2. Todos leem o relato do paciente, escrevem o que acreditam estar acontecendo e clicam em "Analisar com IA".
3. A tela de resultado mostra uma interpretação sorteada de uma lista fixa de 8 respostas pré-definidas (em `public/script.js`). O texto digitado não é enviado nem analisado.
4. Compare as respostas recebidas pelos participantes e discuta a confiabilidade das interpretações. O botão "Voltar ao relato" permite tentar de novo.

Não há cadastro, banco de dados ou sincronização entre dispositivos. Não insira dados reais de pacientes.
