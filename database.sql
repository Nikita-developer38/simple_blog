create database blogApp;
use blogApp
;
create table blog (id int primary key , title varchar(200) not null, descriptions varchar(1000) not null,dated date ,image varchar(500) not null,author varchar(50) not null);
ALTER TABLE blog MODIFY COLUMN id INT AUTO_INCREMENT;
