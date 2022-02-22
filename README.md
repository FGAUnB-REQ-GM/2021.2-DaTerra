# 2021.2-DaTerra

## Executando o Projeto Localmente:

Para executar o projeto localmente, é necessário **criar um ambiente virtual**. Após ter sido criado, precisamos **instalar as dependências do projeto no ambiente virtual** uma única vez e então finalmente **executar o projeto**.


### 1. Criando um ambiente virtual:

Primeiramente, vamos acessar a pasta onde se encontram os arquivos da documentação:

```
$ cd docs
```

Depois, é preciso criar um ambiente virtual (aqui, nomeado 'venv') que comporte o `Python` na versão `3.8`.
Para isso, podemos utilizar o módulo instalável (via PIP) `virtualenv`, com o comando:

```
$ python3.8 -m virtualenv venv
```


### 2. Instalando as dependências do projeto:

Precisamos ativar o ambiente virtual "venv", para podermos instalar nele as dependências necessárias:

```
$ source venv/bin/activate
```

Então, podemos facilmente instalar todas as dependências listadas no arquivo `requirements.txt` com o comando:

```
$ (venv) pip install -r requirements.txt
```

### 3. Executando o Projeto:

Por fim, podemos executar o projeto com o comando:

```
$ (venv) mkdocs 
```

Será imprimido no terminal o endereço de IP onde a documentação está hospedada, algo como `http://0.0.0.0:8000`, basta acessar.

---
