comando '?' é o help, mostra os comandos disponiveis

enable 1 modo inicial

para entrar no modo privilegiado basta digitar "enable"

modo privilegiado modo 2

para entrar no modo configuração global basta digitar "configurate"

configuração global modo 3

para voltar de algum modo basta digitar "exit"

#### Switch

para mudar o nome do switch tem q ser no modo 3 e basta digitar "hostname nomeDesejado"

para tirar a parte de tradução
"no ip domain lookup"

lista tds as interfaces do switch
"do show ip interface brief"

"do" executa comandos da camada inferior

para cortar a conexão com algum pc, basta entrar no modo de configuração global, modo 3 e tem que entrar na interface do pc que deseja desligar com o comando 
"interface FastEthernet0/2" é o pc 2 q estou entrando

para cortar a conexão basta escrever "shutdown"

para ligar dnv basta digitar "no shutdown"

Colocar um banner de aviso de entrada

"banner motd #PROIBIDO ACESSO PARA PESSOAS NAO AUTORIZADOS#"

para colocar uma senha 
"line console 0"
"password cisco"
"login"

para salvar as mudanças (tem que ser no modo 2, ou usar o do)
"copy running-config startup-config"

enter

"reload"
#### Roteador
Qual cabo usa p ligar roteador e switch "straight"

roteador permite ligar redes distintas

# Revisão

Primeiro colocamos 3 máquinas e 1 switch
Depois precisamos conectar elas entre si, para isso usamos o cabo *Straight*

Estão interligados, mas falta configurar o IP das máquinas, acessamos os computadores e clicamos:
- Desktop
- IP *configuration*
Digitamos o IP: 192.168.5.3 e automaticamente o programa escreve a máscara de sub-rede sendo 255.255.255.0, pois o IP 192 está na classe C e sempre será configurado com 255.255.255.0

Para testar se está funcionando e conectado, podemos enviar pacotes para teste, enviar PDU (envelopezinho) de um computador a outro, se der *successful* é pq está correto.

### Switch

Agora vamos configurar o Switch

Para configurar o Switch precisamos de um laptop/notebook, para poder configurar, não da para configurar ele diretamente no switch, precisamos de algo para fazer essa interseção

Pegamos o laptop, usamos o cabo console e conectamos no console do switch e no RS232.

Agora clicamos no laptop
- Desktop
- Terminal
- ok

Pronto, estamos prontos para configurar o switch

Se o terminal estiver ***Switch>*** estamos no modo inicial, no nível 1 

Alguns comandos para mudar de modo no switch 

- *enable* (Sai do nível inicial e passa para o modo privilegiado (nível 2))
Se seu terminal estiver ***Switch#*** é por que estamos no modo privilegiado
- *configure terminal* (Sai do modo privilegiado e passa para o modo de configuração global (nível 3))
Se o terminal estiver ***Switch(config)#*** é por que estamos no modo de configuração global

##### Configuração global
Para mostrar comandos de ajuda, temos o **?**, que mostra os possíveis comandos que podemos fazer nesse modo de operação, funcional para todos os outros modos também.
![[Pasted image 20250407201312.png]]

Podemos mudar o nome do switch

Para isso devemos executar no modo de configuração global

```bash
hostname <nomeQueDeseja>
```

Para sair de um modo e voltar para outro devemos só escrever

```
exit
```

Também podemos definir um banner, para quando acessarem o switch aparecer uma mensagem de aviso

```
banner motd #Aqui vai a mensagem que deseja#
```

Podemos colocar senha na hora de acessar o switch, para isso devemos estar no modo de configuração global e digitar

```
line console 0
```

Se seu terminal ficou ***Switch(config-line)#*** é por que deu certo

Depois definimos a senha desejada
```
password <SenhaQueDesejar>
```

Depois, executamos esse comando

```
login
```

Definimos a senha, agora precisamos salvar essa configuração. Para salvar as configurações, temos 2 jeitos, fazendo pelo modo privilegiado (modo 2) desse jeito:

```
copy running-config startup-config
```

Se quiser pode dar um nome para o arquivo de destino ou deixar em branco e só apertar *enter*

E depois reiniciamos nosso switch

```
reload
```

Ou pela própria camada de configuração global, porém, temos que utilizar o comando *do* pois ele permite usar comandos do modo anterior, ficando assim

```
do copy running-config startup-config
```

Se quiser pode dar um nome para o arquivo de destino ou deixar em branco e só apertar *enter*

E depois, reiniciamos o switch com:

```
do reload
```


Podemos desativar ou ativar máquinas pelo switch, para isso precisamos primeiro mostrar as máquinas conectadas para isso

```
do show ip interface brief
```

Com isso temos os status e os protocolos das máquinas conectadas ao switch e para desligarmos uma manualmente precisamos entrar na conexão da máquina desejada e para isso

```
interface <NomeDaInterfaceQueVoceVaiAcessar0/(1/24)>
```

Se seu terminal estiver ***Switch(config-if)#*** é pq deu certo

Agora para desconectar a máquina do switch basta digitar

```
shutdown
```

Se quiser religar, só digitar

```
no shutdown
```

O comando *no* ele nega o próximo comando, inverte o sentido, basicamente, então se o shutdown é para desligar, vc quer que ele não desligue, ou seja, que ligue.

Caso erre algum comando no terminal, ele vai tentar traduzir o comando errado que vc digitou em algo possível, e com isso vai ficar carregando por alguns segundos/minutos, para desativar essa tradução/procura de comandos podemos digitar

```
no ip domain lookup
```

E para reativar o comando 

```
ip domain lookup
```

### Roteador
O roteador permite ligar redes distintas

Para conectarmos o roteador ao switch, usamos o cabo *Straight* e conectamos na porta *GigabitEthernet* tanto do switch, como do roteador e pronto, está feita a ligação, porém, está desligado.

E para configurar o roteador é basicamente a mesma coisa do switch e mesmos comandos.

Precisamos de um cabo console e um laptop, conectamos o cabo na porta console do roteador e na porta RS232 do laptop.

Entramos no terminal do laptop, e todos os comandos feitos no switch, funcionam no roteador.