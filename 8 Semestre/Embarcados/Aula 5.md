cd proc

mostra todos os processos

cpuinfo no proc

mostra as infos do processador

cat devices no proc

tds dispositivos 

pinout mostra os pinos

## Acesso via SSH
```
ssh <usuario>@<endereço_ip>
```

ex:
Acesso com .local

```
ssh pi@rasp100.local
```
## Cópia de arquivos 

```
scp <caminho local> <usuario>@<endereço_ip>:<caminho remoto>
```

ex:

```
scp arquivo1.txt aluno@192.168.0.7:/home/aluno
```

sudo raspi-config

system options:
- boot - console de texto
- autologin - off

top - p ver os processos e uso de memória etc.

