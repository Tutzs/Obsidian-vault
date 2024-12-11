********
Teste caixa branca -> teste estrutural
- Grafos de fluxo de controle (GFC)
- Critérios de fluxo de controle
- Critérios baseados em complexidade

Teste caixa cinza

#### Abordagens de teste

Necessidades de estratégias e técnicas para derivação de casos de teste
A escolha deve ser inteligente
Principais abordagens: 
- Teste de caixa preta ou teste funcional
- Teste de caixa branca ou teste estrutural

#### Teste caixa branca
Também denominado teste estrutural
Teste baseado na informação obtida a partir do código fonte do produto ou componente de software
Relacionado ao grau de cobertura do código
Na teoria, cada caminho possível ao longo do código deveria ser testado, mas isso só pode ser feito em unidades simples
- Teste exaustivo

Grafos de fluxo de controle (GFC) ou Grafos de programa são utilizados pela maioria dos critérios de teste de caixa branca
- Cada vértice representa um bloco indivisível de comandos
- Cada aresta representa um possível desvio de um bloco para outro

![[Pasted image 20241210131752.png]]

![[Pasted image 20241210132248.png]]


Para identificar todos os defeitos de um programa, seria necessário um teste exaustivo de caminhos -> q não é possível na prática
- Testar todos os possíveis caminhos do controle de fluxo do programa

Limitações:
- Não garante que o software esteja de acordo com as especificações 
- Fluxos não implementados não são identificados