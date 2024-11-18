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