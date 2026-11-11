# TriagemLab

Simulador educativo para apresentações sobre práticas interprofissionais em saúde. A atividade representa a variação de respostas de uma IA generativa e propõe uma discussão sobre como verificar hipóteses em equipe. **Não é uma ferramenta clínica.**

## Rodar localmente

Requer Node.js 20+.

```bash
npm install
npx vercel dev
```

Na primeira execução, siga as instruções de login e vinculação de projeto da Vercel. Abra o endereço local exibido no terminal.

## Deploy

1. Envie a pasta para um repositório no GitHub.
2. Na Vercel, selecione Add New > Project e importe o repositório.
3. Mantenha o framework como Other e publique.
4. Teste a página inicial e `/api/triagem` no domínio gerado.

## Apresentação em grupo

1. Compartilhe o link com os participantes.
2. Todos leem o caso fictício do Sr. Antônio, digitam os sintomas que identificaram e clicam em “Simular análise”.
3. Peça que comparem os sintomas selecionados e as hipóteses exibidas. Também é possível repetir a tentativa com os mesmos sintomas.
4. Oriente todos a clicarem em “Entender a simulação” e discutirem como cada profissão poderia ajudar a verificar as hipóteses.

Não há cadastro, banco de dados, painel de grupo ou sincronização entre dispositivos. O texto digitado fica no navegador. A função da Vercel sorteia uma hipótese de uma lista fixa a cada tentativa, sem receber os sintomas. Não insira dados reais de pacientes.
