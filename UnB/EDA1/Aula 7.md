## Insertion Sort

Inserir cada elemento na posição correta em relação aos seus antecessores

Comparação item a item com seus antecessores até encontrar um menor

Cada iteração, resulta em um vetor parcialmente ordenado
- Início até a posição atual


![[Pasted image 20241202093506.png]]

![[Pasted image 20241202093520.png]]

![[Pasted image 20241202093532.png]]

#### **Otimizado**

![[Pasted image 20241202094413.png]]

Adaptativo?
- Possível identificar uma ordenação?
- Sim, pois como os antecessores estão ordenados, basta a comparação com 1 elemento para a decisão de continuar a percorrer ou não o vetor

Complexidade Assintótica?
- Pior caso N²/2 comparações e N²/2 movimentos
- Médio caso N²/4 comparações e N²/4 movimentos
- Melhor caso: O(N) 

Cada elemento é posicionado até encontrar um menor no subconjunto dos antecessores, não sendo necessário a comparação c tds os elementos

Estável? 
- Sim, mantém a ordem relativa

In-place?
- É in-place


Bubble x Insertion

Bubble
- Comparação: maior q o sucessor/proximo
- O posicionamento de um item não garante a ordenação dos outros elementos
	- Garante que os elementos à esquerda sejam menores
	- Não necessariamente ordenados a cada passagem
- Cada passagem: um elemento na posição final e um vetor mais ordenado
- Adaptativo, estável e in-place

Insertion:
- Comparação é menor q o antecessor/anterior
- O posicionamento de um item garante a ordenação dos elementos à sua esquerda
- Cada passagem: n garante o item na sua posição final, mas um sub-vetor ordenado
- Adaptativo, in-place e estável

Selection
- Não adaptativo, não estável, in-place










```C
void insertionSort(int v[], int l, int r){
	for (int i=l+1; i<=r; i++){
		for (int j = i; j>l && v[j] < v[j-1]; j++){
			exch(v[j], v[j-1])
		}
	}
}
```