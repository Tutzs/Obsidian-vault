# JSON (JavaScript Objetc Notation)

### Linguagem
1° Passo para definir uma linguagem é definir o alfabeto
##### Alfabeto
- Conjunto de símbolos válidos da linguagem
##### Sentença
- Sequencia de símbolos
##### Linguagem 
- Conjunto de sentenças

S -> caracter, exceto []

Programa vazio é válido em BrainFuck

Somente o caracter S, também é um programa válido

bf = S, repetido 0 ou mais vezes

- bf [ bf ] bf

Na linguagem de programação, temos que achar o número finito de regras para ser considerada uma linguagem de programação

valor do json

espaço em branco -> string/number/object/array/true(sequencia literal)/false/null

espaço branco 
- pode ser nada
- linefeed
- carriage return
- horizontal tab

array 
- pode ser colchete dps espaço em branco colchete
- pode ser colchete/valor
- [ whitespace/value, value, value ]

object
- começa com chave, depois espaço em branco


``` py
from typing import Any
def json(src: str) -> Any:
	chars = list(reversed(src))

if __name__ == "main":
	json("true")






```