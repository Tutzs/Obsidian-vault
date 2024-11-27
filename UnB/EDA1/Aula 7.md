## Insertion Sort

Inserir cada elemento na posição correta em relação aos seus antecessores

Comparação item a item com seus antecessores até encontrar um menor

Cada iteração, resulta em um vetor parcialmente ordenado
- Início até a posição atual




```C
void insertionSort(int v[], int l, int r){
	for (int i=l+1; i<=r; i++){
		for (int j = i; j>l && v[j] < v[j-1]; j++){
			exch(v[j], v[j-1])
		}
	}
}
```