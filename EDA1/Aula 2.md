sistema binário 
- 0 baixa tensão
- 1 alta tensão

#### Variáveis x Endereço

Cada variável possui um endereço na memória
Variáveis locais são alocadas na stack (pilha)
Endereço (&) = byte menos significativo (inicío da alocação)

#### Vetor x Endereço

Cada posição tem um endereço
Cada posição é calculada a partir do endereço inicial
Endereço inicial, é apontada pelo identificador (nome) do array

### Ponteiros 

Variáveis capazes de armazenar e manipular endereços de memória
Indicada na declaração da variável pelo símbolo *

Sintaxe: TIPO * ponteiro
- TIPO: indica o tipo de dados da variável que o ponteiro irá apontar
- *int, float, double, char, struct*

Tamanho dos ponteiros: 
- Fixo, depende da arquitetura
- Ex: 3bits representam até 2^3 números (linhas de uma tabela verdade)
- arquitetura x64: ponteiros de 8bytes (armazenar ~= 2^64)
- arquitetura x86: ponteiros de 4bytes 

Tipo dos ponteiros: 
- Utilizado para desreferenciar e operações aritméticas 
- Se **int** sabe-se que deverá ser considerado 4bytes a partir do endereço inicial

Pode ser NULL: indica endereço inválido; valor é 0

#### Funções 

Temos funções que recebem parâmetros por cópia ou por referência

##### Passagem por cópia/valor
Jeito padrão, aloca-se na memória espaço para novas variáveis e elas recebem uma cópia do valor recebido na main e depois da execução esse espaço alocado é dissolvido


##### Passagem por referência
Os ponteiros da função recebem os endereços das variáveis. Também aloca-se espaço na memória e depois é dissolvido, mas por referência a modificação é feita direta na variável.



### Alocação de memória para os processos
- Programa em execução: processo
- Cada processo: possui uma porção de memória
- Layout geral:
![[Pasted image 20241022221305.png]]
- stack: variáveis locais, parâmetros de funções e endereços de retorno (instrução que chamou uma determinada função)
- heap: blocos de memória alocadas dinamicamente, a pedido do processo (gerenciado pelo sistema operacional)
- data: variáveis globais e estáticas
- text: código que está sendo executado
- Comando: ***size*** executavel 
Lista todos os tamanhos de seção e tamanho total de arquivos binários


### Alocação estática de memória - Data

Ocorre quando são declaradas
- Variáveis globais (alocadas fora de funções)
- variáveis locais (internas a uma função) são alocadas usando o modificador *"static"*
```C
int a; //global
static int b; // estática
int soma () {
static int c; // local estática
}
```

Alocadas em Data 
Uma variável alocada estaticamente é válida por toda a vida do programa


#### Alocação automática de memória - Stack

Pilha de execução ou chamada
Armazena 
- Variáveis locais e parâmetros de funções 
- Endereços de retorno (instrução que invocou a função)

Alocação e desalocação: automática (SO)
Tempo de vida: enquanto a função existir (escopo local)
Tamanho: Limitado pelo SO
- Linux: 8192kB (ulimit -s)

Alocação automática:
- Tamanho e quantidade reservada quando a função é invocada
- Liberado quando a função termina

Alocação de variáveis: cada tipo ocupa uma quantidade distinta
- Tipos primitivos *(int, float, char, double) arrays, structs,* ponteiros
Alocação contínua (ordem: decisão do compilador)

### Alocação dinâmica de memória

Alocar memória durante a execução do programa
Alocar tamanhos maiores que a área reservada na stack
Alocado no segmento heap 
Permite a alteração do tamanho alocado
#### Funções **malloc, realloc, calloc e free**

Biblioteca *stdlib.h*
Protótipos das funções

```C
#include <stdlib.h>
void *malloc(size_t size);
void free(void *ptr);
void *calloc(size_t nmemb, size_t size);
void *realloc(void *ptr, size_t size);
```

#### Operador *sizeof*

Auxilia na decisão de quanto espaço reservar
Computa o tamanho
- Tipos primitivos (int, float, double, ponteiros)
- tipos de dados (registros - structs)

Retorna *size_t* (dados em bytes) - *long unsigned int* - tamanho em bytes
Sintaxe: sizeof(<tipo_dado || variavel>);

```C
struct endereco {
  char rua[100];
  int numero;
}; 

printf("%lu bytes \n", sizeof(int));             // 4 bytes
printf("%lu bytes \n", sizeof(float));           // 4 bytes
printf("%lu bytes \n", sizeof(double));          // 8 bytes
printf("%lu bytes \n", sizeof(char));            // 1 bytes
printf("%lu bytes \n", sizeof(struct endereco)); // 104 bytes
```

#### Função malloc

Aloca uma quantidade de bytes
Retorna um ponteiro da memória alocada
```C
#include <stdlib.h>
void *malloc (size_t size);
```

A memória não é inicializada
Retorna NULL em caso de erro
Se a quantidade requerida for zero, retorna um valor que pode ser passado para função que libera memória
Estratégia otimista: não é garantido a real disponibilidade

#### Função *free*

Libera o espaço, previamente alocado dinamicamente, apontado por um ponteiro
Porção livre para novas alocações
Chamadas repetidas para o mesmo ponteiro: erros inesperados
Não retorna valor
```C
#include <stdlib.h>
void free(void *ptr);

int *p = malloc(sizeof(int));
free(p);
int p = 4;
int *a;
a = &b;
//free (a)?
``` 

#### Função calloc

Aloca memória para um array de A elementos de tamanho N bytes calloc(A,N)

```C
#include <stdlib.h>
void *calloc(size_t nmemb, size_t size);
```

Retorna um ponteiro da memória alocada
Retorna NULL em caso de erro
Se a quantidade requerida for zero, retorna um valor que pode ser passado para a função free
A memória é inicializada com zero
Ex: 
```C
int *p = calloc(5,sizeof(int));
```


#### Função realloc

Altera o tamanho do bloco de memória apontado por um ponteiro

Conteúdo anterior não é afetado
Tamanho maior: memória adicionada não é inicializada
Se o ponteiro for NULL, é alocado como uma nova porção de memória (malloc)
Retorna um ponteiro para a nova área alocada (pode ser a mesma ou diferente da original)
Retorna NULL
- Em caso de erro: bloco original não é afetado, fica inalterado
- Se o ponteiro não for NULL e for requisitado zero bytes: espaço apontado é liberado (free)

Ex: 

```C
int *p = malloc(sizeof(int));
p = realloc(p, 4*sizeof(int));
free(p);
```
