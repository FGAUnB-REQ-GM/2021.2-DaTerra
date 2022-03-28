# 2021.2-DaTerra


## Como rodar o projeto localmente:

Para rodar o projeto localmente, é necessário que o desenvolvedor possua `docker` e `docker-compose` instalados e funcionando corretamente em sua máquina.

Então, basta acessar a *raíz* deste projeto e:

1. Instalar os projetos e suas dependências:
    ```
    $ docker-compose -f docker-compose-dev.yml build
    ```

2. Rodar o projeto:
    ```
    $ docker-compose -f docker-compose-dev.yml up
    ```

Pronto! Seu projeto deve estar funcionando no endereço `http://0.0.0.0:8000/` e pronto para ser utilizado em um ambiente de desenvolvimento.


---
