DROP TABLE IF EXISTS settings;

CREATE TABLE settings (
    id int not null AUTO_INCREMENT,
    guild_id varchar(20) not null,
    setting varchar(10) not null,
    value varchar(100) null,
    created_at datetime not null,
    updated_at datetime null,
    primary key(id)
);