Ordenação

O que vai acontecer?

Quais algoritmos estudar?
- Elementares
	- Bubble Sort
	- Selection Sort
	- Insertion Sort
	- Shell Sort
- Powerfull 
	- Quick Sort
	- Merge Sort

Regras de jogo
-  O que vamos ordenar?
	- Arquivos de itens -> Chaves (keys)
- Objetivo do algoritmo de ordenação é rearranjar os itens de forma que as chaves respeitem a ordem definida
- O arquivo cabe na memória?
	- Se sim, ordenação interna
	- Se não, ordenação externa
- Vetor e listas 

## Convenções

```C
typedef int Item;
#define Key(A) (A)
#define less(A,B) (Key (A) < Key(B))
#define exch(A,B) {Item t = A; A=B; B=t}
#define cmpexch(A,B) {if (less(B,A) exch(A,B)}
```

Algoritmos de ordenação estáveis
- Garante que itens com chaves idênticas permaneçam na mesma posição relativa no vetor

Ex:
Bruno 90
Rose 105
Nina 90

Ordenando Estável (Garantindo posição relativa):

Bruno 90
Nina 90
Rose 105

Ordenando sem estabilidade
Nina 90
Bruno 90
Rose 105
# Selection Sort

  0   1    2    3   4   5
[30, 45, 60, 10, 5, 92]

Recursiva:

```C
void selectionSort (Item *v, int l, int r){
// l = 0; r = 5
if (l == r) return;
int menor = l;
for (int j = l + 1; j <= r; j++){
 if (less(v[j], v[menor]))
	 menor = j;
}
}
exch(v[menor], v[l]);
selectionSort(v, l + 1, r);
``` 

Iterativa:

```C
void selectionSort (Item *v, int l, int r){
// l = 0; r = 5
for (int i = l; i < r; i++){
	int menor = i;
	for (int j = i + 1; j <= r; j++){
	 if (less(v[j], v[menor]))
		 menor = j;
	}
	}
	exch(v[menor], v[i]);
}
``` 


```C
int main(void)
{
Item vetor[1000];
for (int i = 0; i< 1000; i++){
	vetor[i] = randi;
}
selectionSort(v,0,999);
return 0;
}
```


terminal: 
time ./meuprograma



# Bubble Sort

```C
void bubbleSort(Item *v, int l, int r){
// l=left, r=right

for (int j = l; j<r; j++){
	if (less(v[j+1], v[j]))
		exch(v[j+1],v[j]);
}
}

void bubbleSort(Item *v, int l, int r){
// l=left, r=right
for (int i = l; i<r; i++){
	for (int j = l; j < r; j++){
		 cmpexch(v[j], v[j + 1]); //compara e troca
}
}
}

```


# Insertion Sort

```C
void insertionSort(Item *v, int l, int r){

}
```