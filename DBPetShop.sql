drop database cadastro;

create database cadastro
default character set utf8
default collate utf8_general_ci;

create table petshop(
id int not null auto_increment,
nome varchar(30),
CPF decimal(15,0),
endereco varchar(20),
telefone decimal(20,0),
sexo enum('M','F'),
descricao text,
primary key(id)
)default charset=utf8;

insert into petshop
(nome,CPF,endereco,telefone,sexo,descricao)
values
('Anderson','38196584575','R.FukutaroSato','14993739356','M','compra ração da special dog'),
('Vinicius','11225684775','R.Brasil','14998564785','M','compra ração da luck cat 15kg'),
('Jhonatan','98678545875','Av.china','15996874578','M','compra ração da primiere 20kg'),
('Matheus','3652147845','R.Peru','47998565485','M','compra ração da super prime');

select*from petshop;

drop table petshop;