use school;

drop procedure if exists asd;
drop table if exists aux;
create table if not exists aux (id int,fecha_desde timestamp,fecha_hasta timestamp, nombre varchar(30));
-- drop table if exists aux;

delimiter $$
create procedure asd()
begin
	declare fin int default 0;
	declare id int default 0;
    declare desde timestamp default null;
    declare hasta timestamp default '2019-07-01';
    declare nombre varchar(30);
    declare c cursor for select * from wschool order by ROW_DATE desc;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET fin = 1;
    
    open c;
		asd : loop
			fetch c into id, desde, nombre;
			IF fin = 1 THEN
				LEAVE asd;
			END IF;            
			insert into aux values(id, desde, hasta, nombre);
			set hasta = desde;
		end loop asd;
    close c;
    
end; $$

-- truncate table aux;
-- call asd();
-- select * from aux order by fecha_desde asc;
drop trigger if exists on_name_update;
delimiter $$
create trigger on_name_update 
after insert on wschool 
for each row
begin
	call asd();
    -- select * from aux order by fecha_desde asc;    
    -- create view historico_nombres as  
		-- select * from aux order by fecha_desde asc;
	-- select school_id id, row_date fecha_desde, null fecha_hasta, school_name nombre from wschool order by ROW_DATE desc;

end $$
delimiter ;

INSERT INTO WSCHOOL VALUES (1000, '2019-06-07 10:10:10', 'School (Change 2,5)');

drop view SCHOOL_DR;
create view SCHOOL_DR as 
	select * from aux order by fecha_desde asc;

select * from SCHOOL_DR;


