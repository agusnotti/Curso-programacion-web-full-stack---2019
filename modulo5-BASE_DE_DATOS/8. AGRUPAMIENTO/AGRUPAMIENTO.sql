
-- CLASE AGRUPAMIENTOS

-- GROUP BY
SELECT nombre,COUNT(nombre), marca
FROM e01_producto p
GROUP BY nombre
order by count(nombre), marca desc
;

--  HAVING: PRIMERO SE AGRUPA Y DESPUES SE HACE LA CONDICION. ES COMO EL FILTRO WHERE PERO DEL GROUP BY. FILTRA SOBRE EL AGRUPAMIENTO QUE HICIMOS
SELECT marca, SUM(stock)
FROM e01_producto
GROUP BY marca
HAVING SUM(stock)<50;

-- ejercicios
-- 1 -- obtener el numero total de clientes registrados en la base de datos.
select distinct count(*) from e01_cliente;

-- 2 -- listar el precio promedio de cada marca

select distinct avg(p.precio), p.marca
from e01_producto p 
group by p.precio, p.marca;

-- 3 -- listar el nombre junto con el precio promedio de los 10 primeros productos ordenados alfabeticamente
select p.nombre, avg(p.precio)
from e01_producto p
order by p.nombre asc
limit 10;

