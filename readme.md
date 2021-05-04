<p>Desafio 2 - FullCyle - Nginx com Node.js</p>


Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.


## Executando

Laravel is accessible, yet powerful, providing tools needed for large, robust applications.

## Comandos

docker run -it -v "/home/hillus/fullcycle/desafio2/app:/var/www/app" hillushilbert/node
docker run -it -v "/home/hillus/fullcyle/desafio2/app:/var/www/app" node:10 bash


## Integração


## Contributing

Hillus Hilbert
@hillushilbert
