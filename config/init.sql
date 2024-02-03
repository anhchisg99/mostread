drop database mostbook;
create database mostbook;
\c mostbook;

create table category (category_id serial not null primary key, name varchar);

create table people (people_id serial not null primary key, name varchar,img varchar,category_id int,description varchar,constraint fk_category foreign key(category_id) references category(category_id));

create table book (book_id serial not null primary key, name varchar,author varchar,img varchar,description varchar,buy_link varchar);

create table review (review_id serial not null primary key,source varchar,book_id int,people_id int,CONSTRAINT fk_book foreign key(book_id) references book(book_id),CONSTRAINT fk_people foreign key(people_id) references people(people_id));

-- insert category
insert into category(name) values('Actor');
insert into category(name) values('Author');
insert into category(name) values('Billionaire');


-- insert people
insert into people(name,description) values('bill gate','handsome');
insert into people(name,description) values('steve job','handsome');

-- insert book
insert into book(name,author,description) values('Why We Sleep','Tai Smile','good');
insert into book(name,author,description) values('Why We Sleep 2','Tai Smile','good');

