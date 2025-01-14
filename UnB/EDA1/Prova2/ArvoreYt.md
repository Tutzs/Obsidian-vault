### Propriedades

- pai: é o antecessor imediato de um vértice
- filho: é o sucessor imediato de um vértice
- raiz: é o vertice que não possui pai
- folhas ou nós terminais: qualquer vértice que não possui filhos
- internos ou nós não terminais: qualquer vertice que possui pelo menos 1 filho

![[Pasted image 20250114191659.png]]

Caminho em uma árvore
- é uma sequencia de vertices de modo que existe sempre uma aresta ligando o vértice anterior com o seguinte
- existe exatamente um caminho entre a raiz e cada um dos nós da árvore

Sub-árvores
- dado um determinado vértice, cada filho seu é a raiz de uma nova sub-arvore
- de fato, qualquer vertice é a raiz de uma sub-arvore consistindo dele e dos nós abaixo dele

Grau de um vértice
- é número de sub-árvores do vértice

![[Pasted image 20250114192341.png]]

Altura da árvore
- chamada de profundidade
- é o comprimento do caminho mais longo da raiz até uma de suas folhas

Níveis
- numa arvore, os vertices são classificados em níveis
- o nivel é o numero de nós no caminho entre o vértice e a raiz

![[Pasted image 20250114192359.png]]


### Definição

Árvore Binária 
- é um tipo especial de árvore 

Cada vértice pode possuir duas **sub-árvores:**
- **sub-árvores esquerda***  e **sub-árvores a direita**

- o grau de cada vértice (numero de filhos) pode ser 0, 1 ou 2

![[Pasted image 20250114190846.png]]


#### Árvore estritamente binaria
- Cada nó (vertice) possui 0 ou 2 sub-arvores (filhos)
- nenhum nó tem filho unico
- nos internos (nao folhas) sempre tem 2 filhos

![[Pasted image 20250114191051.png]]


#### Árvore binária completa
- é estritamente binária e todos os seus nós-folhas estão no mesmo nível
- o numero de nós de uma arvore binaria completa pode ser calculado por 2^h-1 onde **h** é a altura da árvore

![[Pasted image 20250114191328.png]]


#### Árvore binaria quase completa

- A diferença de altura entre as sub-arvores de qualquer nó é no máximo 1
- se a altura da árvore é D, cada nó folha está no nível D, ou D-1

![[Pasted image 20250114191506.png]]


Implementando uma árvore binária
- em uma árvore binária podemos realizar as seguintes operações:
	- criação de árvore
	- inserção de um elemento 
	- remoção de um elemento
	- acesso a um elemento
	- destruição da árvore

Essas operações podem ser tanto estáticamente (heap) ou dinâmicamente (lista encadeada)


Alocação estática (heap)
- uso de um array
- usa 2 funções para retornar a posição dos filhos à esquerda e a direita de um pai

Filho_esq(pai) = 2 * pai+1;
Filho_dir(pai) =  2 * pai+2;

![[Pasted image 20250114194637.png]]


Alocação dinâmicamente (lista encadeada)
- cada nó da árvore é tratado como um ponteiro alocado dinamicamente a medida que os dados são inseridos

![[Pasted image 20250114195020.png]]


Implementando arvore binaria com alocação dinâmica
- para guardar o primeiro nó da árvore utilizamos um ponteiro para ponteiro 
- um ponteiro para ponteiro pode guardar o endereço de um ponteiro 
- assim, fica mais fácil mudar quem é a raiz da árvore (se necessário)


Criando e destruindo uma árvore binária
- criação da árvore: ato de criar a raiz da árvore. A raiz é um tipo de nó especial que aponta para o primeiro elemento da árvore

- destruição da árvore: envolve percorrer todos os nós da árvore de modo a liberar a memória alocada para cada um deles

```C
//arquivo arvoreBinaria.h
void libera_arvbin(arvbin *raiz);

//arquivo arvoreBinaria.c
void libera_no(struct no* no){
if (no == null) return;
libera_no(no->esq);
libera_no(no->dir);
free(no);
no = null;
}

void libera_arvbin(arvbin* raiz){
if (raiz == null) return; 
libera_no(*raiz);
free(raiz);
}
```


Algumas informações básicas 