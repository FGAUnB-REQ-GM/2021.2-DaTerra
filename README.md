# 2021.2-DaTerra


## Como rodar o projeto localmente:

Para rodar o projeto localmente, é necessário que o desenvolvedor possua `docker` e `docker-compose` instalados e funcionando corretamente em sua máquina.

Então, basta acessar a *raíz* deste projeto e:

1. Instalar os projetos e suas dependências:
    ```
    $ docker-compose -f docker-compose-dev.yml build
    ```

2. Executar o projeto, para que as configurações *básicas* sejam executadas:
    ```
    $ docker-compose -f docker-compose-dev.yml up
    ```

3. Depois de executar o projeto pela primeira vez, ainda ele **não estará funcionando**,
pois é necessário realizar as migrações do banco de dados `POSTGRES`. Então, ainda com o projeto executando, abra um novo terminal e acesse a imagem do `docker` do projeto em tempo real:

    ```
    $ docker exec -it daterra_website bash
    ```

4. Agora, dentro da imagem `docker` do nosso projeto, vamos **criar** e **realizar** as migrações:

    ```
    $ python manage.py makemigrations
    ```

    E então:

    ```
    $ python manage.py migrate
    ```

5. Agora, volte no terminal onde o projeto estava sendo executado, pressione `ctrl` + `c` para finalizar a execução e re-execute novamente, com o mesmo comando do *passo 2*.

    ```
    $ docker-compose -f docker-compose-dev.yml up
    ```


Pronto! Seu projeto deve estar funcionando no endereço `http://0.0.0.0:8000/` e pronto para ser utilizado em um ambiente de desenvolvimento.


---
