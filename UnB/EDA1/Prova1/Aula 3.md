#### Estruturas de dados elementares
Estrutura de dados
- Organizam uma coleção de dados
- Possuem um conjunto de operações

Elementar
- Utilizados por outras estruturas

Estrutura elementar: lista

##### Lista estática 
Conjunto do mesmo tipo de dados
Espaço consecutivo na memória RAM
Acesso aleatório: qualquer posição pode ser acessada facilmente através de um index
Nome -> corresponde ao endereço de memória
Tamanho fixo (Stack) ou alocado dinamicamente (heap)
Arrays
Vantagem: fácil acesso
Desvantagem: difícil manipulação

### Listas simplesmente encadeadas

Conjunto de nós ou células
Cada nó é tipo um contêiner que armazena item + link (para outro nó)

![[Pasted image 20241024204904.png]]

Alocação conforme necessidade
Mais adequado para manipulações do que acessos: 
- Maior eficiência para rearranjar os itens (reapontamentos)
- Não tem acesso direto aos itens pela sua posição

Operações:
- Buscar
- Inserir
- Remover

```C
typedef int Item;

typedef struct node no; 
struct node {
Item info;
no *prox;
}
```

![[Pasted image 20241024205010.png]]

##### Tipos

Fim da lista: último nó aponta para NULL 
Início sem cabeça
Início com cabeça do tipo **nó**
- Conteúdo é ignorado
- Elementos da lista: a partir do segundo nó
- Com ou sem cauda

![[Pasted image 20241024205115.png]]

```C
no *lista = malloc(sizeof(no));
no *novo = malloc(sizeof(no));
novo->prox = NULL;
novo->info = 2;

lista->prox = novo;
```

Fim da lista: último nó aponta para NULL
Início sem cabeça
Início com cabeça do tipo **nó**
Início com cabeça do tipo cabeça (específico)
- Aproveita para guardar metadados
- Tamanho da lista e fim da lista (cauda), por exemplo 
- Elementos da lista: a partir do segundo nó

![[Pasted image 20241024205406.png]]

```C
typedef struct {
int tam;
no *prox;
no *ultimo; 
} cabeça;
```


### Listas duplamente encadeadas

Armazena a informação do nó anterior e posterior
Útil quando ocorrem muitas inserções e remoções, principalmente de elementos intermediários
Anterior do primeiro e posterior do último: NULL

![[Pasted image 20241024205627.png]]

```C
typedef struct node no;
struct node{
Item info;
no *ant;
no *prox;
}

typedef struct head cabeca;
struct head{
itn tam;
no *prox;
no *ultimo;
}
```

![[Pasted image 20241024205750.png]]

## Resumão/relembrando

Listas estáticas (array): 
- Alocação contígua/sequencial na memória (stack)
- Acesso aleatório e direto pelo índice/posição: tempo constante
- Inserção: tempo constante
- Remoções no meio: tempo linear (percorrer a lista)
- Busca sequencial: tempo linear (percorrer a lista)

Listas encadeadas:
- Sequência de células/nós
- Alocação conforme necessidade
- Remoção de um nó específico:
	- Simples: tempo linear
	- Dupla: tempo constante
- Inserção antes/após um nó específico:
	- Simples: tempo linear(antes), tempo constante (após)
	- Dupla: tempo constante
- Busca sequencial
- Sem acesso direto a uma posição 
- Implementações: 
	- sem cabeça, com cabeça, com cauda, com cabeça e com cauda
	- cabeça do mesmo tipo dos elementos do corpo
	- cabeça com elementos diferentes do corpo
- Tipos: simplesmente, duplamente, circular, multilista