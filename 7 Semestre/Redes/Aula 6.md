
Configurações do roteador

Ao entrar no roteador pela primeira vez, devemos responder a pergunta com "no"

Roteador serve para conectar redes distintas ou conectar com a internet

gateway é a interface do roteador.

para acessar a interface da gigabit basta usar esse comando

```
interface <nomeDaPorta>
``` 

para configurar o ip do roteador segue o comando:

```
ip add <ip> <mascaraSubrede>
``` 

também vale 

```
ip addres <ip> <mascaraSubrede>
``` 

final 1 = para os roteadores
final 2 = para o DNS

para ligar o roteador basta usar o comando

"no shutdown"

para testar a conexão a gente acessa uma máquina, e da um ping para o ip do roteador

# Revisão

Faça as configurações padrões de pc, laptop, cabeamento, *switch* e roteador, tais quais senha, banner, mudar nome do roteador, configurar IP das máquinas.

### Configurar IP dos switches
Para configurar o IP dos switches, você precisa conectar um *switch* no roteador por meio do cabo *Straight* conectando o cabo no *switch* na entrada *GigabitEthernet0/1* e no roteador conecta na entrada *GigabitEthernet0/0/0* ou nas disponíveis.

#### Terminal laptop

Agora sim, pra configurar o IP do *switch* por meio do roteador, conectamos o cabo console no laptop na porta RS232 e no roteador na porta console, abrimos o terminal do laptop e digitamos o comando no modo de configuração global:

```
do show ip interface brief
``` 

Esse comando mostrará as interfaces que o roteador tem e está conectada
para configurarmos o IP manualmente do *switch*, devemos entrar dentro da interface onde o switch está, com esse comando:

```Bash
interface <GigabitEthernet0/0/0> # O último digito será 0, 1 ou 2, dependendo de qual porta vc conectou o switch
``` 

Com isso vc está dentro da interface do *switch* desejado e pode configurar o IP e a máscara de sub-rede
Basta digitar:

```Bash
ip add <ip> <mascaraSubrede> # 192.168.20.1 255.255.255.0
``` 

O IP do *switch* tem que ser compatível ao IP das máquinas conectadas ao *switch* em questão, exemplo

Se tem uma máquina com IP 192.168.**20**.3
o IP do switch tem que ser 192.168.**20**.1

o IP do switch não pode ser 192.168.***30***.1

Eles precisam ser compatíveis na penúltima casa.

E agora precisamos ligar o switch com esse comando:

```
no shutdown
``` 

#### Teste de IP

Para testar se a configuração do IP deu certo, a gente pode entrar numa máquina e ir no *command prompt* e dar um *ping* no IP do *switch* para testar.

```
ping 192.168.20.1
``` 

Se deu erro nos pacotes, temos q procurar aonde está o erro, se não, deu td certo.

Agora para fazer uma conexão de uma máquina de uma rede a outra, devemos configurar o *gateway* para isso, devemos entrar em todas as máquinas e colocar no campo *Default Gateway* o mesmo IP do *switch* que ele está conectado, se o IP do *switch* for 192.168.20.1, coloque esse IP no *gateway* de todas as máquinas conectadas naquele *switch*.

Agora podemos fazer uma conexão de uma máquina a outra. Usando o **PDU**, testamos e vemos se deu *Successful* ou *Failed* no envio do pacote.