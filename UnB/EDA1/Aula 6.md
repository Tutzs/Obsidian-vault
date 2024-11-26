### Busca sequencial e binária

Objetivo:
- Recuperação de informação a partir de dados previamente armazenados 
- A informação é dividida em registros que possuem uma chave
	- Chave de identificação: usada nas buscas

Conjunto de registros formam as chamadas tabelas de símbolos, map, dicionário, vetor associativo
- Coleção de pares de chave-valor
- Mecanismo abstrato para armazenar informações que podem ser acessaadas através de uma chave 
- Exemplo:
	- Busca sequencial
	- Busca binária
	- Árvores de busca
	- Árvore B (e variantes): comumente usadas quando o vetor associativo é muito grande para ser armazenado completamente em memória principal (ex: banco dados)
	- Pesquisa digital
	- Tabelas hash
	
![[Pasted image 20241114180838.png]]

#### Busca sequencial
Método de pesquisa mais simples
A partir do primeiro registro, pesquisa sequencialmente até encontrar a chave procurada
Os registros estão organizados em uma estrutura de dados do tipo array ou lista encadeada

Complexidade para busca (dados não-ordenados)
- Melhor caso: O(1) = constante
	- Encontra na primeira posição
- Caso médio O(n) = (n+1)/2 = linear
	- Necessita checar cerca de metade do registro
- Pior caso: O(n)
	- Necessita checar todas as chaves, o valor buscado se encontra na última posição
- Pesquisa sem sucesso: O(n) = n+1

Listas encadeadas:
- Inserção e remoção: O(1) = constante
- Busca: O(n)

Vetores não-ordenados:
- Inserção e remoção: O(1) = constante
- Busca: O(n)

Vetores ordenados:
- Busca: O(logn)
- Inserção e remoção: O(n)

Método eficiente
Para conjunto de dados ordenados
Primeira comparação: elemento do meio
Paradigma da divisão e conquisa

Dividir o vetor no meio:
- Intervalo de elementos = diferença de índices 
- Metade do intervalo + o deslocamento a esquerda
- Meio = (11-2)/2 = 4+2 =6

Comparar como elementro central
![[Pasted image 20241114181546.png]]

Procura à esquerda?
18 < v[6]
![[Pasted image 20241114181716.png]]

Procura à direita
18 > v[6]
![[Pasted image 20241114181725.png]]

Recursivo: dividir e comparar
meio = (11-7)/2 = 2 +7 = 9
![[Pasted image 20241114181704.png]]


Procura à esquerda?
18 < v[9]?
![[Pasted image 20241114181829.png]]

Procura à direita?
18>v[9]
![[Pasted image 20241114181840.png]]


Recursivo: dividir e compara 
meio = (11-10)/2 = 0+10 = 10
v[10] == 18? return 10
![[Pasted image 20241114181934.png]]

# Acho que é melhor só somar (L+R)/2

Função custo da recorrência
- A cada iteração do algoritmo, o tamanho do vetor é dividido ao meio 
- Complexidade: até [LogN] +1 comparações (acerto ou falha)
![[Pasted image 20241114183433.png]]

Existe o custo para manter o vetor ordenado
- Algoritmos de ordenação

### Ordenação de dados 

Ordenação é organização 
Organização otimiza as buscas
- Lógica de sequencialidade: previsibilidade

Ordenação de itens (arquivos, estruturas)
- A chave é a parte do item utilizada como parâmetro/controle de ordenação

Características

1 Complexidade (espacial, temporal)
- Quadráticos: simples e suficiente para arquivos pequenos
- Linearítmicos: mais complexos e eficientes para arquivos grandes

2 Estabilidade
- Mantém a posição relativa dos elementos
- Não há saltos
- ![[Pasted image 20241117211913.png]]

3 Adaptatividade 
- Aproveita a ordenação existente
- Diminui-se o custo

4 Memória extra
- In-place: 
	- Utiliza a própria estrutura
	- Utiliza a memória extra: pilha de execução, variáveis auxiliares
- Não in-place
	- Utiliza mais uma estrutura
	- Cópia

5 Localização 
- Interna: todos os dados cabem na memória principal
- Externa: arquivo grande, é ordenado em pedaços (chunks) que caibam na memória principal

## Selection Sort

#### Selecionar e posicionar

1 Selecionar: o menor item
2 Posicionar: troque com o primeiro item
3 Selecionar; o segundo menor item
4 Posicionar: troque com o segundo item
5 Repita para os **n** elementos do vetor

![[Pasted image 20241117213919.png]]

![[Pasted image 20241117213934.png]]

![[Pasted image 20241117213253.png]]


![[Pasted image 20241117215239.png]]


Complexidade assintótica?
- Cerca de n^2/2 comparações e N trocas: O( N^2 )
- Pior, melhor, médio caso: O(n^2)

Adaptabilidade? (aproveita ordenação)
- Não, pois a cada iteração, cada elemento é comparado somente com o menor
- Então não é adaptativo

Estabilidade? (mantém a ordem relativa?)
- Ele tem trocas com saltos, logo não é estável

In-place? (espaço adicional)
- É sim in-place, usa o próprio vetor para ordenar

![[Pasted image 20241117215405.png]]


## Bubble Sort

Compara adjacentes:

1 Do início (base), flutuar o item
2 Ao achar uma "Bolha" maior, esta passa a flutuar
3 No fim, o maior (ou menor) está no topo: topo--
4 Volta td de novo

![[Pasted image 20241117215552.png]]

![[Pasted image 20241117215620.png]]

![[Pasted image 20241117215659.png]]

![[Pasted image 20241117221846.png]]

Adaptatividade?
- Sim, pois a cada iteração, os elementos são comparados entre si sendo possível a identificação da ordenação

Complexidade assintótica?
- Cerca de N^2/2 comparações e N^2/2 trocas: O(N^2)
- Pior, médio caso: O(N^2)
- Melhor caso: O(N)

Adaptatividade X Custo: cada elemento é posicionado até encontrar um maior no subconjunto dos sucessores, não sendo necessário a troca com todos os elementos e a identificação da ordenação total diminui as possíveis comparações posteriores

Estabilidade?
- Tem trocas com saltos? não
- Mantém a ordem: logo, estável

In-place?
- Sim é in-place, por não usar outra estrutura de dados (vetor)

![[Pasted image 20241117222622.png]]

