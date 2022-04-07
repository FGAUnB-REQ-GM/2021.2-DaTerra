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

#### E01: Criação de usuário
##### Features:

- RF01: Escolha de conta
    - S01: Eu como produtor desejo escolher a conta tipo produtor, para realizar um cadastro de produtor
    - S02: Eu como cliente desejo escolher a conta tipo cliente, para realizar um cadastro de cliente
- RF02: Criação de contas
    - S03: Eu como produtor desejo me cadastrar na plataforma para criar minha conta
    - S04: Eu como Cliente desejo me cadastrar na plataforma para criar minha conta
- RF03: Registro de fazenda
    - S05: Eu como produtor desejo cadastrar a minha fazenda na plataforma para finalizar minha conta


#### E02: Acesso de Usuários
##### Features:

- RF04: Acesso de conta
    - S06: Eu como produtor desejo acessar o site pela minha conta para anunciar meus produtos
    - S07: Eu como cliente desejo acessar o site pela minha conta para comprar produtos
- RF05: Edição de conta
    - S08: Eu como usuário desejo editar minha conta para alterar meus dados

#### E03: Venda de produtos
##### Features:

- RF06: Acesso a pagina de anuncio de produtor
    - S09: Eu como produtor desejo  anunciar meus produtos para vender meus produtos
    - S10: Eu como produtor desejo analisar minhas vendas para organizar meu estoque
- RF07: Os cliente podem acessar a página de cada produto na plataforma
    - S11: Eu como cliente desejo buscar produtores para encontrar produtos
    - S12: Eu como cliente desejo colocar produtos no carrinho para poder comprá-los
    - S13: Eu como cliente desejo combinar a entrega com o produtor para receber o produto

#### E04: Páginas de Feedback
##### Features:

- RF08: O produtor pode acessar a página de cada cliente que solicitar um pedido
    - S14: Eu como produtor desejo acessar a pagina do cliente para avalia-lo
- RF09: Os usuários podem acessar a página de cada produtor na plataforma
    - S15: Eu como cliente desejo avaliar o produto para dar feedback
    - S16: Eu como cliente desejo avaliar o produtor para dar feedback

## Versionamento

 Versão|Data      |Modificação        |Autor
-------|----------|-------------------|--------
1.0    |04/04/2022|Criação da pagina| Mariana Rio
1.1    |04/04/2022|Alteração do conteudo| Mariana Rio
1.2    |07/04/2022|Alteração do conteudo| Mariana Rio