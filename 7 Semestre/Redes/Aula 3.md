##### Topologias mais usadas:
**Estrela** e **Anel**

DNS vai fazer a conversão do nome do site para o IP e vice-versa

# Introdução ao modelo OSI
OSI (*Open Systems Interconnect*)

Modelo em camadas projetado para fornecer um framework para padronização de comunicação em sistemas de computadores

Importância: Certificado Cisco CCNA e CompTIA Network+

#### 7 camadas
7 - Aplicação - Camada visual, interfaces com aplicativos
6 - Apresentação - Formatos, prepara para exibir na camada de aplicação
5 - Sessão - Controle de sessão, ligação telefônica, trafegar informações
4 - Transporte - Conexão entre hosts/portas
3 - Rede - Endereço IP/lógico/roteadores
2 - Enlace de Dados - Endereço físico/pontes e switches
1 - Camada física - Hardware/sinal elétrico, cabo de rede RJ45

Quando vamos nos comunicar com outro computador temos um ponto de origem/transmissão e outro ponto de destino/recepção

Origem/Transmissão -> Aplicação -> Apresentação -> Sessão -> Transporte -> Rede -> Enlace -> Física

O dado é preparado da primeira camada até a ultima

Física -> Enlace -> Rede -> Transporte -> Sessão -> Apresentação -> Aplicação -> Destino/Recepção

PDU Protocol Data Unit

camada -> PDU

camada 7 a 5 dados
camada 4 segmento
camada 3 pacote
camada 2 quadro
camada 1 bits

radio half-duplex
chamada telefonica full-duplex

DNS consegue verificar se o site está fora do ar

# Revisão

Modelo OSI (*Open System Interconnection*), interconexão de sistemas abertos. É um modelo que define sete camadas para que sistemas de computadores possam usar para se comunicar com uma rede

- O OSI é o primeiro modelo padrão de comunicação entre sistemas de computadores e redes, faz uso de sete camadas para garantir essa conversa
- A maioria das empresas de computadores e telecomunicação adotaram esse modelo no início dos anos 80
- A partir daí a ISO (Organização internacional de normalização) transformou na principal referencia

Modelo em camadas projetado para fornecer um framework para padronização de comunicação em sistemas de computadores.

- **Objetivo**: promover a interoperabilidade entre equipamentos de fabricantes diferentes, e permitir economia de escala
- **Modelo conceitual**: abstrato que traz o funcionamento de um protocolo ideal em redes de computadores
- E cada camada do modelo OSI tem uma tarefa específica e se comunica com as camadas de cima e de baixo.

#### Camadas do modelo OSI
- 7 Aplicação - Interfaces com aplicativos
- 6 Apresentação - Formatos e criptografias
- 5 Sessão - Controle de sessões entre aplicativos
- 4 Transporte - Conexão entre hosts/portas
- 3 Rede - Endereço lógico/roteadores
- 2 Enlace de dados - Endereço físico/ponte e switches
- 1 Física - Hardware/sinal elétrico/bits

![[Pasted image 20250407144520.png]]

### Princípios da divisão
- Cada camada deve executar funções bem definidas
- Os limites da camada são escolhidos para reduzir o fluxo de informações transportadas entre interfaces
- Onde houver necessidade de um grau de abstração distinto, deve-se criar outra camada.
- Camadas separadas são criadas para manipular funções que são diferentes no processo realizado ou na tecnologia envolvida