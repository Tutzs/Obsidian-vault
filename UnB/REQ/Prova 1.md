Requisitos: o que construir, incluindo todas as interfaces com pessoas, máquinas e outros sistemas

Relacionamentos humanos que irão gerar conversas

Pessoas agem de dado momento e certa situação

#### Necessidade Vs Desejo

Os desejos podem ser:
- individuais 
- não alinhados com os problemas identificados e com as restrições do projeto
- gerar necessidades e requisitos de software desnecessários
- gerar custos e retrabalho

As necessidades devem ser:
- atendidas no momento presente
- organizacionais e indispensáveis 
- ser obtidas a partir dos problemas identificados e restrições do projeto
- gerar requisitos necessários
- agregar valor

Se o desejo não for atendido:
- os clientes resultados e a organização não serão prejudicados

Se a necessidade não for atendida: 
- A organização, resultado e cliente são prejudicados

O engenheiro deve buscar equilibrio entre desejo e necessidades - levantar informações dos envolvidos no projeto

Lista de desejos: principal informação fornecida para identificar as necessidades e características de alto nível do sistema - Documento Visão de Produto e Projeto

Devem ser organizados por meio de listas, quadros e imagens

Quadro de necessidades: a construção e manutenção do mesmo deve ser adequada ao ciclo de vida e processo de desenvolvimento estabelecido
Ex:
![[Pasted image 20241203195900.png]]

Ao relacionar, por ex, uma lista de necessidades a problemas, soluções atuais e soluções propostas para resolver tais problemas, pode-se ajudar os envolvidos(stakeholders e equipe técnica) a compartilharem uma mesma visão sobre cada um das necessidades e como atende-las

Requisitos estão no sistema social da organização cliente


### Dificuldade normalmente encontradas na identificação dos stakeholders

- Dificuldade em expressar suas necessidades
- Muitos usuários tem dificuldade de expressar seus métodos e porque realizam atividades
- Dificuldades para imaginar novos caminhos 
- Diferentes visões
- Resistencia a mudanças 
- Requisitos aparecem demais
- Difícil obter um acordo entre o essencial e luxuoso
- Demandas mudam o tempo td
- Práticas inefetivas de engenharia de requisitos e gerenciamento de projeto para identificar as verdadeiras necessidades
- Comunicação falha


#### Entenda o problema antes de convergir para uma solução 
- Compreender os problemas ou oportunidades que sua solução abordará
- Um problema de negócios é qualquer problema que impeça o negócio de atingir seus objetivos ou explorar uma oportunidade
- Finalidades:
	- estabelecer acordo sobre o problema a ser resolvido
	- declaração do problema
	- identificar envolvidos
	- identificar atores e fronteiras do sistema
	- restrições impostas ao sistema
	- vocabulário comum
	- doc de visão
- Motivação 
	- evitar retrabalho
	- entender corretamente os problemas -> entender os requisitos e encontrar a solução adequada
- Um problema é a diferença entre como as coisas são percebidas e como as coisas são desejadas
![[Pasted image 20241203200540.png]]

- O verdadeiro problema costuma se esconder atrás do que é entendido como um problema (conversas em grupo)
- Diagrama de causa-efeito
	- identificar as principais categorias que contribuem para o problema
	- fazer um brainstorming sobre os fatores
	- sub-causa

![[Pasted image 20241203200649.png]]

- Príncipio de pareto
	- Identificar as causas que mais contruibem para o efeito (problema) e trate-as primeiro, avaliando sempre o custo X benefício

![[Pasted image 20241203200751.png]]

### Declaração do problema
- Framework
![[Pasted image 20241203200805.png]]

- Identificando as causas raízes do problema
- 5 porques
	- busca identificar as causas raízes de um problema
	- deve ser feito o questionamento até atingir o nível raiz, no qual não é mais possível desdobrar as causas
	![[Pasted image 20241203200920.png]]

### Identificando os stakeholders
- Um stakeholder é qualquer pessoa que seja materialmente afetada pelo sistema proposto
- Analise de quais stakeholders serão fontes de requisitos e registrá-los
![[Pasted image 20241203201016.png]]
### Identificando as restrições do projeto

- Política
- Econômica
	- Restrições financeiras
	- licenciamento
- ambiental
- técnica
- viabilidade
	- restrição aos recursos existentes?
	- mao de obra externa?
	- temporários ou permanentes?
- sistema
	- compatibilidade

### Identificando as fronteiras e envolvidos
![[Pasted image 20241203201149.png]]

- A fronteira define o limite entre a solução e o mundo real que a cerca
- As informações são trocadas entre o produto de software e os usuários fora dele - ocorrem por meio de interfaces entre o sistema e o mundo externo

### Introdução a engenharia de requisitos

- engenharia de requisitos é uma área que visa realizar a ponte entre os domínios do adquirente e do desenvolvedor para estabelecer e manter os requisitos atendidos pelo sistema
- investiga em como as pessoas percebem e entendem o mundo ao seu redor - área multidisciplinar
- os objetivos são conhecer, entender, estruturar, representar, comunicar e transcrever as informações relevantes de um sistema
- conjunto de atividades que identificam e comunicam a finalidade de um sistema de software
- A ER atua como ponte entre as necessidades reais dos usuários e as potencialidades oferecidas pela tecnologia
- O principal resultado da ER são os conjuntos de requisitos e cada conjunto deve ter:
	- ser referencia para um sistema
	- entendimento acordado
	- ser validado em relação as necessidades
	- implementável

![[Pasted image 20241203201252.png]]

- Elicitação: extrair, obter ou provocar uma resposta, informação de algo
- descoberta: encontrar algo que anteriormente não era conhecido
- também envolve descobrir quem são os interessados - seus problemas e necessidades
- análise: analisar os requisitos em sua forma 'bruta' pois eles podem estar errados
- consenso: conciliar as diversas fontes de informação em direção a um entendimento comum sobre o conjunto de requisitos 
- declaração: comunicação dos requisitos entre os envolvidos
	- podem ser declarados em funcionais e não funcionais
- Representação: modelo e/ou visualização do produto
	- informal: padrao visual
	- semiformal: notação ou linguagem especifica
	- formal: sintaxe e semantica matematica
- validação: confirmação de que os requisitos definem a solução correta -> retoma as necessidades do cliente e objetivo do negócio 
- verificação: é a confirmação de que os requisitos foram realizados da maneira correta
- organização: estabelece como os requisitos serão estruturados, rastreados, refinados e priorizados
- atualização: manter a organização dos requisitos sempre em seus estado mais atual

Objetivos da ER:
- Captura dos requisitos necessários para a construção do software

#### Os processos e atividades da ER podem variar amplamente dependendo do...

![[Pasted image 20241203203055.png]]

- O processo