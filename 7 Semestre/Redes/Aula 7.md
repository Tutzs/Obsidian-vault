DHCP - servidor onde iremos utilizar as informações do servidor para que ele configure o IP de forma automatica. 

Configurar DNS, DNS

Primeira coisa que a gente faz na hora de configurar o servidor é o IP

Configurar servidor

Desktop - IP configuration

# Revisão
Comando mais simples para salvar as configurações:

```
do wr
```

Sabemos configurar roteador, switch, IP manualmente.
Vamos agora configurar os IP's das máquinas automaticamente usando DHCP (*Dynamic Host Configuration Protocol*). 

Antes configuramos o roteador (nosso gateway com final do IP 1).

O DHCP é um servidor onde utilizaremos as informações do servidor para que ele configure o IP de forma automática.

Para fazer isso, precisamos de uma rede com máquinas, switch, roteador igual antes, porém, agora com um servidor.

Clicamos no servidor desligamos ele e depois colocamos uma placa de rede Gigabit (PT-HOST-NM-1CGE) C de Cisco, GE de *GigabitEthernet* e ligamos de novo o servidor

Conectamos agora com o cabo *Straight* o servidor no switch, utilizando a porta Gigabit.

Agora para configurar o IP do servidor:
*Desktop* -> *IP configuration*

Colocamos o IP, a máscara de sub rede e o *gateway*, que é o IP do nosso roteador.

Com o IP do servidor configurado vamos configurar o DHCP

Ainda no servidor:
*Services* -> *DHCP*

Lembrando da interface ser a *GigabitEthernet*.

O *service* deixamos em "on", ligando ele

Colocamos o *Default Gateway* com o IP do roteador

DNS ainda n.

O IP inicial colocamos ele por padrão a partir do 3

Máscara de subrede, já vai automaticamente

E *Maximum Number of Users* podemos deixar 254, ou 100 por enquanto.

Depois clicamos no botão de *save* e está pronto.
![[dhcp.png]]
Mais ou menos assim.

Agora vamos configurar o IP das máquinas usando o DHCP.

Clicando em cada máquina e indo em *IP configuration* em vez de escrever manualmente o IP de modo estático, a gente vai em DHCP, e ele faz a requisição automaticamente e já cria o IP, gateway e a máscara de subrede.

