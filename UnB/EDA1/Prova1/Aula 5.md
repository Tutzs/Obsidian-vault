#### Análise de algoritmos

Tempo real de máquina como medida?
![[Pasted image 20241112220634.png]]
Máquina com *load* baixo e alto, respectivamente

- *real*: tempo total para execução (contando todos os processos em execução)
- *user*: tempo exclusivo do processo executado
- *sys*: tempo que do sistema dedicado a execução do processo

Problema: são dependentes de fatores como a linguagem, hardware e/ou processos em execução
Precisamos de uma medida independente da máquina

### Como medir algoritmos?
#### Contar quantas instruções são executadas?
Análise de algoritmos: analisar a quantidade de recursos que um algoritmo necessita para resolver um problema
Considerar somente as operações relevantes
Observando a tendência do comportamento a medida que a instância do problema cresce
- Sequência de entrada para um problema computacional resolver (calcular/soluções) ou decidir (encontrar uma solução verdadeira) ou verificar (se uma solução é válida)

Fazendo uma estimativa dos custos das operações 
- Definindo a custo dos algoritmos
- E a complexidade assintótica

Função de custo f(n)

f(n): valor que mensura os recursos necessários para um algoritmo processar a entrada *n* 
Conta-se as operações mais relevantes e o custo de processamento da instância do problema
Entradas possíveis:
- Problemas em ordenação de vetores: tamanho do vetor
- Problemas em matrizes: linhas e colunas
- Problemas de pesquisa em memória: número de registros 
- Problemas de grafos ("Objetos/vértices que relacionam entre si"): quantidade vértices
- Etc.

Cenários (dependentes do tamanho da instância)
Melhor caso: menor custo
Caso médio: média dos custos
Pior Caso: maior custo

![[Pasted image 20241113210224.png]]

### Constante
f(n) = x

Valor constante: x > 0
Independem do tamanho de n
As instruções são executadas um número fixo de vezes
- Atribuições, operçãoes aritméticas
- Comando de decisão, comparações
- Acessos à memória

Listas estáticas (Array): 
- Acesso aleatório e direto pelo índice/posição
- Inserção

Listas encadeadas:
- Remoção de um nó específico em lista duplamente encadeadas
- Inserção após um nó específico
- Inserção antes de um nó específico em lista duplamente encadeada

### Linear
f(n) = a * n+b
Função polinomial de primeiro grau: a > 0 e b custo das constantes
Realiza-se um pequeno trabalho sobre cada elemento da entrada
Ocorrem cerca de *n* processamentos de custo constante 
Cresce a uma taxa constante
n entradas, n saídas
Anel ou laço
- (Tempos comandos internos + avaliação da condição) x número de iterações

Listas estáticas (Array):
- Buscas/remoções no meio da lista

Listas encadeadas:
- Busca sequencial
- Remoção de um nó específico em listas simplesmente encadeadas
- Inserção antes de um nó específico em listas simplesmente encadeadas

Recorrências:
Resolver uma recorrência: encontrar uma fórmula fechada que calcule diretamente a função 
Sem subexpressões da forma: +...+ ou contendo somatório ou produtório
Resultando em combinações de: 
- Funções polinomiais
	- n: número inteiro positivo ou nulo
	- x: variável
	- a's; coeficientes
- Funções exponencias f(x) = b^x
- Funções logarítmicas: f(x) = logx na base a

