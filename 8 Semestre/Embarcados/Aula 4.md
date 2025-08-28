Arquitetura de um barramento

Tipo
Intrachip (dentro do chip tem um monte de via de conexao de modulo)
Internos

Externos (entre placas/dispositivos)
USB, SCSI, SATA

tipo de transmissão de dados
paralela
mais dados por transmissao
qtd de linhas de transmissao crsce rapidamente com a largura de palavras
problema é o clock skew, onde como os fios nao sao uniformes, os bits chegam em tempos variados


serial 
1 bit por vez
permite mais altas taxas de transmissao por linha por nao sofrer com clock skew

AXI mais rápida AMBA4
AHB
ASB
APB

master (mestre) quem faz a comunicacao, quem inicia a comunicação
slave (n esta sendo mais usado esse termo) quem só obedece

tem barramentos que tem varios mestres, e barramentos que só tem 1 mestre

baixar a imagem da placa
