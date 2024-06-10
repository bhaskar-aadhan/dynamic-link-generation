-- Migration number: 0001 	 2024-06-10T13:07:05.918Z

create table DynamicLinks(
    id integer primary key AUTO_INCREMENT,
    link varchar(500),
    short_link varchar(100),
    clicks integer,
    created_at varchar(100) default CURRENT_TIMESTAMP  
)