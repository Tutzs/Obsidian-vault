Tipos de dados abstratos de Dados

- Fila
	- Implementação com lista estática
	- Implementação com lista encadeada
- Pilha
	- Implementação com lista estática
	- Implementação com lista escadeada
- TAD Fila X Pilha

### Tipo Abstrato de Dados - TAD

Estrutura de dados com ações/operações particulares
- Servindo de modelo/tipo para dados que se enquadrem nessas operações

TAD pode ser visto como uma classe de OO
- Características/dados (atributos) + operações/comportamentos(métodos)

É um tipo de dado que é acessado por uma interface:
- Para usar: saber o que faz, e não, necessariamente, como faz
- Programas clientes(que usam dados) não acessam diretamente os valores
- Acessam via funções fornecidas pela interface
- Ocultamento de informação(caixa preta)
	- Escondendo as estruturas de dados e a lógica de implementação

Tipos: pilhas, filas, árvores

## TAD Fila

O que é uma FILA?
- Alinhamento de uma série de indivíduos ou objetos em sequência, de modo que esteja imediatamente atrás do outro

Processamento/atendimento de uma FILA?
- Os dados que estão na frente são os primeiros a serem processados

![[Pasted image 20241210221308.png]]

### FIFO (first-in first-out)
Primeiro a entrar na fila é o primeiro a sair
Ele é justo, ordem de chegada/enfileiramento
- O processamento de dados obedece a ordem de chegada
	- Ex:
	- Sistema de inscrições 
	- Julgador online
	- Fila de impressão
	- Fila de processo no SO
	- Gravação de mídias (ordem de dados importa) 
	- Busca: varredura pelos mais próximos

Inserções no fim e remoção no início
**Complexidade constante**
Operações básicas:
- vazia
- tamanho
- primeiro - busca_inicio
- enfileira - insere_fim
- desenfileira - remove_inicio

ENFILEIRAR = INSERIR
DESENFILEIRAR = REMOVER

#### Listas estáticas

Criação da fila 

```c
#define n 7
int fila[n];
int p, u;

void criar_fila(){
	p = u = 0;
}
```

Fila vazia

```C
#define n 7
int fila[n];
int p, u;

int vazia() {
	return p == n;
}
```

Remoção no início da fila - desenfileirar

Início da fila p é deslocado para mais próximo do fim
- 'removendo' o elemento da fila

```C
#define n 7
int fila[n];
int p, u;

int remove_fila(){
	return fila[p++];
}
```

Inserção no final da fila - enfileirar
Elemento é colocado na posição indicada por u
- fim da fila é deslocado

```c
#define n 7
int fila[n];
int p, u;

void enfileira (int y){
	fila[u++] = y;
}
```

Fila cheia 
- u == N