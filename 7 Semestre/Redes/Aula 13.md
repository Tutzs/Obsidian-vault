# TELNET

telnet é um protocolo de comunicação que permite conectar-se a um computador remoto


# Revisão 

### Telnet
Telnet é um protocolo de comunicação que permite conectar-se a um computador remoto 

Trabalha com uma interface de texto, onde você digita comandos

Telnet não é seguro, pois ele não é criptografado, ou seja, informações são enviadas em texto simples, tornando vulneráveis a ataques. Por isso recomendado é utilizar SSH.

Para configurar e usar Telnet, precisamos de uma rede simples

![](redex2.png)

Para configurar o telnet, só precisamos configurar o Router

Primeiro mudamos o nome do roteador

```
hostname R1
```

Depois entramos nas linhas virtuais do roteador que são usadas para acesso remoto e colocamos uma senha

```
line vty 0 4
```

Depois colocamos uma senha para entrar nas portas virtuais

```
password unb
```

Depois atribuímos o login, para que a senha seja solicitada na hora do acesso

```
login
```

Com isso já conseguimos fazer acesso remoto via TELNET

Porém, só iremos conseguir acesso o modo de configuração básica, o nível 1.

Para conseguirmos acessar o modo de configuração global precisamos colocar uma senha para acessar o enable.

O secret ele criptografa a senha

```
enable secret unb
```

Usando password no lugar de secret, a senha fica vísivel nas configurações.

```
enable password unb
```

Agora podemos acessar via telnet e entrar no modo de configuração global

Para ver as configurações do dispositivo basta usar esse comando

```
do sh run
```

### SSH

SSH (Secure Shell) é um protocolo de rede que permite a comunicação segura entre dispositivos em uma rede não segura.

Pode ser usado para:
- controlar servidores remotamente
- gerenciar a infraestrutura
- transferir arquivos
- realizar alterações em sites e servidores


SSH é uma ferramenta essencial para quem precisa acessar um servidor remoto.

Para configurarmos e usarmos o SSH segue os passos abaixo

Precisamos de uma rede simples, igual da telnet ou se quiser com dois switchs, mas iremos utilizar só um.

Primeiramente no switch configuramos o gateway padrão, para não ter conflitos.

```
ip default-gateway 192.168.1.1
```

Agora indo para o roteador

Mudamos o nome do roteador, caso não tenha mudado ainda.

```
hostname R1
```

Criamos um domínio para acesso.

```
ip domain-name unb.com
```

Criamos um username unb, com a senha unb também

```
username unb secret unb
```

Entramos nas linhas virtuais

```
line vty 0 15
```

Com esse comando, a gente desativa o telnet e só conseguimos fazer acesso remoto via SSH

```
transport input ssh
```

E exigimos na hora de entrar o usuario e senha

```
login local
```

Saímos e 

Geramos uma chave criptografada

```
crypto key generate rsa # colocamos 1024 dps
```

Opcionalmente colocamos o SSH na versão 2

```
ip ssh ver 2
```

Com isso conseguimos acessa remotamente o roteador

Para acessar o **switch** remotamente via SSH entramos na vlan 1

```
int vlan 1
```

Adicionamos um IP a essa vlan

```
ip add 192.168.1.10 255.255.255.0
```

Ligamos ela

```
no sh
```

Saímos

```
exit
```

E agora criamos um usuário e senha

```
username unb password unb
```

E colocamos uma senha para entrar no enable

```
enable secret unb
```

E precisamos repetir os mesmos passos que fizemos no roteador.

```
ip domain-name unb.com
```

```
line vty 0 15
```

```
transport input ssh
```

```
login local
```

```
crypto key generate rsa
```

E mudamos para versão 2

```
ip ssh ver 2
```

```
do w 
```

E pronto podemos acessar o switch remotamente via pc com o comando

```
ssh -l 'username' 'ip'
```

No nosso caso ficaria

```
ssh -l unb 192.168.1.10
```


