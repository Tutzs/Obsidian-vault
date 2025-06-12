# VOIP (Voice Over Internet Protocol)

Voz sobre IP.

Para fazer a configuração de VOIP precisamos usar o Router 2811, o ultimo.

network = RIP

option 150 protocolo


# Revisão

#### VOIP (VOICE OVER IP)
Voz sobre IP

Para criarmos uma VOIP, precisamos de um roteador específico, o Router 2811.

Criamos uma rede básica, com switch, o router 2811, o IP Phone e computadores.

![](voip.png)

Vamos configurar primeiro o switch

#### Switch

Na camada de configuração global

Entramos no range de interface que os telefones estão conectados, nesse caso na fa0/1 e fa0/2

```
int range fa0/1-3
```

Vamos dar acesso a ela

```
sw mode access
```

Depois vamos dar o comando voice para atribuir a vlan de voz a um grupo de interfaces do switch, no caso 1 e 2

```
sw voice vlan 1
```

E depois salvamos as configurações

```
do w
```

Agora vamos para o Roteador

#### Router 2811

Primeiro vamos entrar na interface conectada ao switch, nesse caso a fa0/0

```
int fa0/0
```

Vamos atribuir um IP e a mascara de sub rede a esse roteador

```
ip add 192.168.1.1 255.255.255.0
```

Depois ligamos o roteador

```
no sh
```

Agora vamos configurar o servidor DHCP para atribuir IP aos telefones

Vamos criar uma pool chamada voip

```
ip dhcp pool voip
```

Depois diremos qual a rede o servidor DHCP vai alocar os IP's

```
network 192.168.1.0 255.255.255.0
```

Depois o gateway padrão que será fornecido para os clientes do DCHP

```
default-router 192.168.1.1
```

E configuramos a opção 150 do DHCP, que é uma opção específica para fornecer o endereço IP de um servidor TFTP (Trivial File Transfer Protocol)

```
option 150 ip 192.168.1.1
```

Saímos da configuração do DHCP

```
exit
```

E excluímos o IP .1 para que nenhum cliente do DHCP use esse IP, para não ocorrer conflito de IP

```
ip dhcp excluded-address 192.168.1.1
```


E agora vamos configurar os telefones

```
telephony-service
```

Colocamos o numero máximo de números de diretório (ramais) configurados

```
max-dn 3
```

Configuramos o máximo de telefones IP físico ou virtual.

```
max-ephones 3
```

Colocamos esse comando, para informar aos telefones qual é o IP do roteador, para fazer a comunicação e obter as configurações

```
ip source-address 192.168.1.1 port 2000
```

E esse faz a configuração automática atribuindo ramais e telefones em uma faixa específica

```
auto assign 1 to 3
```

Por fim saímos e iremos configurar agora os telefones um por vez

Entramos na configuração do primeiro telefone

```
ephone-dn 1
```

E vamos atribuir um número a esse telefone

```
number 1001
```

Vamos para o outro telefone 

```
ephone-dn 2
```

E vamos atribuir outro número a esse telefone

```
number 1002
```

Saímos e ligamos os telefones manualmente, colocando o cabo de energia em cada um e esperando para fazer os testes.

Para ver as configurações gerais

```zsh
do sh running-config # do sh run
```

