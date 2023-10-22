
CREATE TABLE Services (
    service varchar PRIMARY KEY
);


CREATE TABLE Activities (
    id serial PRIMARY KEY,
    service varchar REFERENCES Services(service),
    published_date timestamp,
    title varchar,
    url varchar
);
