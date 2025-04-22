CREATE TABLE items (
                       itemNumber serial primary key ,
                       itemname varchar,
                       numberofitems int,
                       description text,
                       timestamp TIME

);
-- sample data
--insert into items (itemname, numberofitems,description,timestamp) values("fishsauce", 81, "fiskesausen min :D");
