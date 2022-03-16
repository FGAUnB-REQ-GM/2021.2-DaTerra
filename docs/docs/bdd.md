# Behavior Driven Development (BDD)

Com a utilização de cenários de BDD, a lista de **critérios de aceitação** de uma história de usuário pode ser substituída por um ou mais cenários, então elaboramos um cenário para cada **história de usuário** que definimos a partir do PBB.


## Gerenciar Produtos:

<table>
    <thead>
        <tr>
            <td>#</td>
            <td>História de Usuário:</td>
            <td>Nome do Cenário:</td>
            <td>Cenário:</td>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>
                Eu, como <strong>agricultor</strong>, posso <strong>informar características básicas do produto</strong>, para gerenciar informações a respeito do produto.
            </td>
            <td>Anunciar Produto</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> o agricultor possui uma leva de Maçãs, por preço definido a <strong>R$ 10,00</strong> o KG.</li>
                    <li><strong>Quando</strong> o agricultor solicitar o registro do produto,</li>
                    <li><strong>Então</strong> deve ser capaz de anunciar o produto por <strong>R$ 10,00</strong> o KG.</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                Eu, como <strong>agricultor</strong>, posso <strong>administrar informações do produto</strong>, para gerenciar informações a respeito do produto.
            </td>
            <td>Atualizar Produto</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> o preço da leva de maçãs do agricultor subiu para <strong>R$ 12,00</strong> o KG,</li>
                    <li><strong>Quando</strong> o agricultor solicitar administrar o produto,</li>
                    <li><strong>Então</strong> deve ser capaz de re-anunciar o produto por <strong>R$ 12,00</strong> o KG.</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>
                Eu, como <strong>agricultor</strong>, posso <strong>validar solicitações de reserva de compras<strong>, para realizar compra de produtos.
            </td>
            <td>Confirmar Reserva</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> um cliente solicitou reserva de <strong>25 KG</strong> de Maçãs e o agricultor possui <strong>500 KG</strong> no estoque,</li>
                    <li><strong>Quando</strong> o agricultor confirmar a reserva do produto,</li>
                    <li><strong>Então</strong> devem ser apresentadas as <strong>informações de contato</strong> de ambas as partes.</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td>
                Eu, como <strong>agricultor</strong>, posso <strong>contatar o comprador para acertar entrega</strong>, para estabelecer comunicação essencial com o agricultor.
            </td>
            <td>Contatar o Cliente</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> em uma reserva já confirmada, é preciso acertar a entrega com o cliente,</li>
                    <li><strong>Quando</strong> o agricultor receber as informações de contato com o cliente,</li>
                    <li><strong>Então</strong> deve marcar com o cliente e ser capaz de marcar o produto como enviado.</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td>
                Eu, como <strong>agricultor</strong>, posso <strong>acessar feedbacks e comentários</strong>, para realizar compra de produtos.
            </td>
            <td>Ler Feedbacks</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> em uma compra já finalizada o agricultor deseje ler os feedbacks recebidos,</li>
                    <li><strong>Quando</strong> o agricultor acessar a página de seu produto</li>
                    <li><strong>Então</strong> deve receber uma lista dos feedbacks já publicados.</li>
                <ul>
            </td>
        </tr>
    </tbody>
</table>


## Realizar Compra de Produtos:

<table>
    <thead>
        <tr>
            <td>#</td>
            <td>História de Usuário:</td>
            <td>Nome do Cenário:</td>
            <td>Cenário:</td>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>
                Eu, como <strong>cliente</strong>, posso <strong>realizar pesquisa nos estoques</strong>, para realizar compra de produtos.
            </td>
            <td>Realizar Pesquisa</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> um cliente insira um termo textual <strong>"Maçã"</strong> e a categoria <strong>fruta</strong> esteja escolhida</li>
                    <li><strong>Quando</strong> o cliente solicitar a busca</li>
                    <li><strong>Então</strong> deve receber uma lista dos produtos do tipo <strong>fruta</strong> e com <strong>"Maçã"</strong> no nome ou descrição.</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                Eu, como <strong>cliente</strong>, posso <strong>solicitar a reserva de um produto em estoque</strong>, para realizar compra de produtos.
            </td>
            <td>Solicitar Reserva</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> um cliente escolha um produto e deseje comprar</li>
                    <li><strong>Quando</strong> o cliente solicitar a reserva</li>
                    <li><strong>Então</strong> deve receber uma notificação que deve aguardar confirmação.</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>
                Eu, como <strong>cliente</strong>, posso <strong>aguardar a confirmação da reserva<strong>, para realizar compra de produtos.
            </td>
            <td>Aguardar Confirmação da Reserva</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> um cliente realizou pedido </li>
                    <li><strong>Quando</strong> estiver aguardando confirmação </li>
                    <li><strong>Então</strong> deve receber uma notificação que deve continuar aguardando confirmação.</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td>
                Eu, como <strong>cliente</strong>, posso <strong>contatar o vendedor para acertar entrega</strong>, para estabelecer comunicação essencial com o agricultor.
            </td>
            <td>Contatar o Agricultor</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> um pedido confirmado está em processo de compra </li>
                    <li><strong>Quando</strong> um cliente acessar a página do pedido </li>
                    <li><strong>Então</strong> deve receber as informações de contato do agricultor.</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td>
                Eu, como <strong>cliente</strong>, posso <strong>marcar a entrega como realizada</strong>, para realizar compra de produtos.
            </td>
            <td>Pedido Entregue</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> um pedido confirmado foi entregue </li>
                    <li><strong>Quando</strong> um cliente pode acessar a página do pedido </li>
                    <li><strong>Então</strong> poderá marcar como <strong>entregue</strong> o seu pedido.</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>6</td>
            <td>
                Eu, como <strong>cliente</strong>, posso <strong>submeter feedback do produto</strong>, para permitir o envio de feedback.
            </td>
            <td>Avaliar o Pedido</td>
            <td>
                <ul>
                    <li><strong>Dado que</strong> um pedido confirmado foi marcado como entregue </li>
                    <li><strong>Quando</strong> um cliente pode acessar a página do pedido </li>
                    <li><strong>Então</strong> poderá enviar <strong>feedback</strong> do seu pedido.</li>
                <ul>
            </td>
        </tr>
    </tbody>
</table>