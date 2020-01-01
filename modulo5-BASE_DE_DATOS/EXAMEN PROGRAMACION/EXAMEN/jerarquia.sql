-- Crear 2 tablas:
-- Entidad <id_entidad, Entidad_descripcion, es_hoja>
-- Jerarquia <id_entidad, id_padre>

CREATE TABLE entidad (
	id_entidad int,
    entidad_descripcion char(25),
    es_hoja boolean
);

CREATE TABLE jerarquia(
	id_entidad int,
    id_padre int
);

ALTER TABLE entidad add constraint id_entidad_pk primary key (id_entidad);

ALTER TABLE jerarquia add constraint id_entidad_fk foreign key  (id_entidad) references entidad (id_entidad);


insert into entidad values
(1,'Entidad 1',0),
(2,'Entidad 2',0),
(3,'Entidad 3',0),
(4,'Entidad 4',0),
(5,'Entidad 5',0),
(6,'Entidad 6',0),
(7,'Entidad 7',0),
(8,'Entidad 8',0),
(9,'Entidad 9',0),
(10,'Entidad 10',0),
(11,'Entidad 11',1),
(12,'Entidad 12',1)

insert into jerarquia values
(1,Null),
(2,1),
(3,2),
(4,1),
(5,3),
(6,4),
(7,6),
(8,5),
(9,4),
(9,8),
(10,7),
(10,9),
(11,10),
(12,1)
select * from Resultado_esperado
	-- tabla temp
	with recursive createTree (id_entidad, Entidad_descripcion, arbol, arbolid, lvl, es_hoja) as (
	  select     jer.id_entidad,
				 ent.Entidad_descripcion,
				 cast(ent.Entidad_descripcion as char(20000)) as arbol,
				 cast(jer.id_entidad as char(20000)) as arbolid,
                 1 as lvl,
                 ent.es_hoja
	  from       jerarquia jer
				 inner join entidad ent on jer.id_entidad = ent.id_entidad
	  where      jer.id_entidad = (SELECT id_entidad from jerarquia where id_padre is null)
	  union all
	  select     j.id_entidad,
				 e.Entidad_descripcion,
				 concat(arbol, '|', e.Entidad_descripcion),
				 concat(arbolid, '|', j.id_entidad),
                 lvl + 1,
                 e.es_hoja
	  from       jerarquia j
      inner join entidad e on j.id_entidad = e.id_entidad
	  inner join createTree
			  on j.id_padre = createTree.id_entidad
	)
    -- aca se llama a la funcion 
	select * from createTree
    where createTree.es_hoja = 1
    order by lvl asc;
