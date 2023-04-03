drop database if exists office;
create database if not exists office;
use office;

create table event (
    id int not null auto_increment,
    name varchar(255),
    description varchar(1000),
    date datetime not null,
    primary key (id)
)

create table room (
    id int not null auto_increment,
    name varchar(255),
    noiseLevel varchar(40),
    occupancyLimit int,
    temperature int,
    numDesks int,
    floorId int,
    primary key (id),
    foreign key (floorId) references floor(id)
)

create table floor (
    id int not null auto_increment,
    name varchar(255),
    primary key (id)
)

create table booking (
    id int not null auto_increment,
    roomId int not null,
    userId int not null,
    primary key (id),
    foreign key (roomId) references room(id),
    foreign key (userId) references user(id)
)

create table user (
    id int not null auto_increment,
    name varchar(255),
    email varchar(255),
    role varchar(40),
    noiseLevelPref varchar(40),
    temperaturePref int,
    locationPref varchar(255),
    primary key (id)
)
