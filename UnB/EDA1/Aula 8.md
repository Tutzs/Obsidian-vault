## Merge Sort

Linearitmicos 
- O(n log n)
- Melhor custo quando a ordenacao é por comparacao do valor da chave
- vantagem: mais amplo (varios tipos de chaves podem usar o mesmo algoritmo)

Linears 
- O(n)
- Melhor custo quando a ordenação é por comparacao na estrutura de chave:
	- intervalo de chaves de 0 até r-1
	- inteiro de 32 bits
- Desvantagem ele é mais restrito
	- amarrado ao um tipo de chave (estrutura da chave)


## Merge Sort

Método de dividir e conquistar
- Dividir em pequenas partes
- Ordenas essas partes
- Combinar essas partes ordenadas
- Até formar uma sequencia ordenada

Abordagem top-down: a partir da lista inteira, dividir em sub-listas

Recursivamente
- A cada chamada, divide a entrada em sub-vetores para serem ordenados
	- merge_sort(int * v, int l, int r)
- quando chegar em um tamanho unitario, está ordenado em 1
- Volta fazendo o merge, a intercalaçao do ordenado
	- merge (int * v. int l, int meio, int r)
	- utiliza vetor auxiliar



```C
void mergeSort(int *v, int l, int r){
	if (l >= r) return;
	int m = (r+l)/2;
	mergeSort(v, l, m);
	mergeSort(v, m+1, r);
	merge(v, l, m, r);
}
```