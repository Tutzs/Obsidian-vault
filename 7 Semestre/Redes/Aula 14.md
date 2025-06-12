servidor web
servidor dns
servidor dhcp
servidor de arquivo
telnet e ssh

1 configurar roteador

int g0/0/0 
ip add 192.168.1.1 255.255.255.0
no shut

2 servidor
ip static
ip 192.168.1.2
gateway 192.168.1.1
dns 192.168.1.2

- services
	- html
	- dhcp
		- padrao 192.168.1.1
	- dns
		- www.unb.com
		- 192.168.1.2
	- ftp 
		- user - read e list

3 telnet
router 
hostname R1
line console 0 # senha
password unb
login
exit

enable secret unb
login local

do sh run - p ver se as senhas foram criadas

line vty 0 4 # telnet
password unb
login
exit
do w

para acessar remoto vai no prompt do pc e coloca 'telnet 192.168.1.1' e digita a senha e entra

wireless Accesspoint-PT-4