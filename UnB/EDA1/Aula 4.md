#### Recursão
São implementadas através de funções: 
- Que invocam a si mesmas
- Chamadas de funções recursivas

Concentra-se na solução do núcleo do problema, sendo as partes resolvidas pela recursão 
O problema é dividido em partes, que são resolvidas aplicando-se a mesma solução/fórmula
- Repetidas aplicações da mesma solução para diversas partes

Importante: condição de parada é necessária para terminar a recursão

Sistemas atuais contribuem no processamento das recursiviadades:
- Compiladores eficientes: otimizações contribuem para o uso eficiente dos recursos
- Stacks: possibilitaram o empilhamento das funções

Comportamento de uma pilha:
- Cada iteração (função é invocada):
	- Desvia-se o fluxo de execução 
	- Uma área(frame) na stack é destinada para a função: dados são empilhados, inclusive o endereço de quem chamou a função (para onde retornar - voltar para o fluxo original)
- Última iteração:
	-  Último invocado termina o seu processamento
	- É retirado da pilha e o topo da pilha retoma sua execução
Processo de desempilhamento continua até a base da pilha
Assim, o invocador inicial pode finalmente terminar seu processamento

Pode ser aplicado em problemas de: 
- Planejamento de caminho de róbotica
- Problemas de tentativa e erro (Backtracking: voltar e explorar outra solução)
- Compiladores(analisadores léxicos)
- Manipulação das estruturas de dados (formas de armazenamento de dados)
- Algoritmos de pesquisas, ordenação

Resolver expressões na notação polonesa: sem necessidade de utilizar parênteses
Notação pré-fixa
Operador antes dos operandos: *+ab = a+b*
Lógica: se for operador, busca até achar operando, busca até achar operando e resolve

Backtracking: técnica algorítmica de resolução de problemas que envolve encontrar uma solução de forma incremental, tentando diferentes opções e desfazendo-as se elas levarem a um beco sem saída
Procurar solução, se não achar voltar e busca por outro caminho, subconjunto, labiritinto

