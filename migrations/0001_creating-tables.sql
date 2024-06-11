-- Migration number: 0001 	 2024-06-10T13:07:05.918Z

CREATE TABLE IF NOT EXISTS dynamiclinks (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	link TEXT,
    short_link TEXT,
    android_app_id TEXT,
    apple_app_id TEXT,
    clicks INTEGER,
	created_on DATE DEFAULT  CURRENT_TIMESTAMP
);