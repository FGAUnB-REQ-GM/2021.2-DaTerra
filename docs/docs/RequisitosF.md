## Requisitos Não Funcionais

#### RNF01: O sistema deverá possuir design responsivo
- ID: RNF01
- VERSÃO: 1.0
- TIPO: Requisito Não Funcional de Usabilidade
- NOME: O sistema deverá possuir design responsivo
- DESCRIÇÃO: É de extrema importância que o aplicativo web possua design responsivo, dado o interesse dos stakeholders do projeto em garantir que (ao mesmo tempo) usuários de celulares ou tablets possuam a mesma qualidade de usabilidade do produto do que um usuário da versão para desktop.
- PRIORIDADE: CRÍTICO
- AUTOR: [PO] José Guilherme

#### RNF02: O sistema deverá estar "containerizado" (Docker)
- ID: RNF02
- VERSÃO: 1.0
- TIPO: Requisito Não Funcional de Confiabilidade
- NOME: O sistema deverá estar "containerizado" (Docker)
- DESCRIÇÃO: É necessário que o sistema esteja dentro de um container, desta forma podemos garantir sua terminalidade, possibilidade da realização de backups do arquivo e até mesmo mobilidade entre sistemas de hospedagem. Será utilizado Docker.
- PRIORIDADE: ALTA
- AUTOR: [PO] José Guilherme

#### RNF03: O sistema deverá ser hospedado em Cloud (AWS EC2)
- ID: RNF03
- VERSÃO: 1.0
- TIPO: Requisito Não Funcional de Confiabilidade
- NOME: O sistema deverá ser hospedado em Cloud (AWS EC2)
- DESCRIÇÃO: Com o sistema hospedado na AWS EC2, podemos garantir uma série de atributos que contribuem para a confiabilidade do produto, já que podemos configurar, a partir da EC2, backup via snapshot dos volumes utilizados no container, escalabilidade de armazenamento e workers para a imagem do container, RDS para o banco de dados, assegurar qualidade de infraestrutura e muito mais.
- PRIORIDADE: ALTA
- AUTOR: [PO] José Guilherme

#### RNF04: Definição das principais tecnologias a serem utilizadas para o desenvolvimento
- ID: RNF04
- VERSÃO: 1.0
- TIPO: Requisito Não Funcional de Suportabilidade
- NOME: Definição das principais tecnologias a serem utilizadas para o desenvolvimento
- DESCRIÇÃO: Para garantirmos ao sistema boas habilidades de testagem, manutenção, configuração, instalação, escalabilidade e localização do código, especificamos as tecnologias mais robustas que utilizaremos para o desenvolvimento:<br>
Elas são: Django, como framework Python robusto e escalável, que possuirá interface produzida em HTML, CSS, JS e Bootstrap e PostgreSQL.
- PRIORIDADE: CRÍTICA
- AUTOR: [PO] José Guilherme

## Requisitos Funcionais

###  Epics

#### E01: Registro de Usuários
##### Features:

- RF01: O produtor se registra na plataforma
    - S01: O produtor envia suas informações pessoais e de contato
    - S02: O produtor envia as informações da sua fazenda
- RF02: O cliente se registra na plataforma
    - S03: O cliente envia suas informações pessoais e de contato

#### E02: Acesso de Usuários
##### Features:

- RF03: Usuário realiza login na plataforma
    - S04: O usuário informa CPF e senha

#### E03: Gerenciamento de Produtos
##### Features:

- RF04: O produtor cadastra um produto
    - S05: O produtor submete os dados fundamentais do produto
    - S06: O produtor submete os dados de disponibilidade do produto
- RF05: O produtor atualiza os dados de um produto
    - S07: O produtor submete dados fundamentais atualizados do produto
    - S08: O produtor submete dados de disponibilidade atualizados do produto

#### E04: Busca por Produtos e Produtores
##### Features:

- RF06: Os usuários realizam uma busca por produtos na plataforma
    - S09: O usuário especifica um termo textual ou de categoria para a pesquisa de produto
- RF07: Os usuários realizam uma busca por produtores na plataforma
    - S10: O usuário especifica um termo textual ou de categoria para a pesquisa de produtores

#### E05: Venda de Produtos
##### Features:

-  RF08: O cliente poderá realizar um pedido
    - S11: O usuário visualiza as informações fundamentais e de disponibilidade do produto
- RF09: O cliente poderá acessar o status do pedido
    - S12: O usuário acessa as informações fundamentais do produtor e de cada produto cadastrado na página do produtor
- RF10: A compra é finalizada
    - S13: O produtor acessa as informações fundamentais do cliente

#### E06: Páginas de Feedback
##### Features:

- RF11: Os usuários podem acessar a página de cada produto na plataforma
    - S14: O cliente precisa informar uma quantidade disponível para o produto
    - S15: O produtor informa se aceita ou não a reserva do pedido
- RF12: Os usuários podem acessar a página de cada produtor na plataforma
    - S16: O cliente e o produtor recebem os dados de comunicação de ambas as partes para acertar detalhes da entrega
- RF13: O produtor pode acessar a página de cada cliente que solicitar um pedido
    - S17: O produtor informa se a compra já foi finalizada ou não
    - S18: O produtor realiza a avaliação do cliente
    - S19: O cliente realiza a avaliação do pedido

Os requisitos podem ser encontrados no nosso [ZenHub](https://app.zenhub.com/workspaces/produto-6214e609e5734f00196404e2/board?invite=true)

## Versionamento

 Versão|Data      |Modificação        |Autor
-------|----------|-------------------|--------
1.0    |22/02/2022|Criação da pagina| Mariana Rio