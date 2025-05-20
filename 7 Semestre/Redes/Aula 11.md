# Servidor de arquivos

n anotei nada

# Revisão

Sistema de arquivos, para funcionar precisa de usuário e senha

FTP (*File Transfer Protocol*)

Para mexer com o sistema de arquivos, devemos ter uma rede, e configurar Servidor, switch, roteador padrão.

![](ftp.png)

Para configurar o DHCP das duas redes, precisamos criar 2 *pools* no servidor, uma pool pra primeira rede e a outra pool p DHCP da outra rede, após isso, devemos colocar o *helper-address* na rede 2, com o IP do servidor, para que a comunicação do DHCP funcione.

Com a rede configurada, vá 

**Servidor -> Services -> FTP**

Confirme se ele está ligado, se não, ligue ele.

E no campo "*username*" e "*password*" de um login e senha para seu novo cadastro e depois selecione as permissões que esse cadastro terá
![](ftp1.png)

Temos *Write, Read, Delete, Rename, List*.

Na foto, temos aluno e professor.

Aluno tem as permissões RL (READ, LIST)

Professor tem todas RWDNL (READ, WRITE, DELETE, NAME, LIST)

Depois adicione e pronto, você cadastrou seu usuário no servidor de arquivos. Agora para testar:

**Máquina -> Desktop -> Text Editor**

Escreva algo e salve (CTRL + S) e de um nome para o arquivo e coloque .txt

Agora, com um arquivo novo, vá

**Máquina -> Desktop -> Command Prompt**

Escreva 

```bash
dir # para listar todos os arquivos
```

```bash
ftp 192.168.10.2 # para acessar o servidor de arquivos
```

Aí ele vai pedir usuário e senha

Entre e escreva

```bash
dir # para listar todos os arquivos
```

Ele vai listar todos os arquivos daquele servidor.

Se quiser fazer um *Upload* do arquivo que voce criou na maquina .txt basta escrever

```bash
put NomeDoSeuArquivo.txt
```

Ele vai jogar o arquivo q vc criou para a maquina q vc está

E se vc quiser baixar algum arquivo do servidor de arquivo para a máquina basta

```bash
get NomeDoArquivo
```

