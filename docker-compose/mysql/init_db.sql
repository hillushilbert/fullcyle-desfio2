CREATE DATABASE /*!32312 IF NOT EXISTS*/`desafio` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `desafio`;

CREATE TABLE people (
    id int(11) not null auto_increment,
    nome varchar(200),
    primary key(id)
);

