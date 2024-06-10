-- Migration number: 0001 	 2024-06-10T13:07:05.918Z

create table dynamiclinks(
    id integer primary key AUTOINCREMENT,
    link TEXT,
    short_link TEXT,
    clicks integer,
    created_at TEXT
)