use bd111mil;

-- Creación de tablas (CREATE)
-- Modificación de tablas (ALTER)
-- Eliminación de tablas (DROP)




-- SELECT * from e01_producto
-- WHERE stock > 50 and stock <200;

-- SELECT codigo_producto, nombre, stock FROM e01_producto
-- WHERE stock BETWEEN 60 AND 100;

-- SELECT * FROM e01_producto
-- where codigo_producto = 50;

-- SELECT * FROM e01_factura
-- WHERE total_con_iva > 400000 
-- and nro_cliente = 8;

-- select * from e01_cliente
-- where nombre = "Ivor" and apellido = "Saunders";

-- select * from e01_factura
-- where nro_cliente = 10;

-- select * from e01_factura
-- where total_con_iva >= 500000;

-- SELECT DISTINCT marca FROM e01_producto;

-- SELECT nro_cliente, apellido, nombre FROM e01_cliente
-- WHERE nombre LIKE 'Jescie';

-- SELECT nro_cliente,nombre,apellido FROM e01_cliente
-- WHERE nombre LIKE "F%";

SELECT codigo_producto, nombre, stock FROM e01_producto
WHERE (nombre LIKE 'fish') OR (stock <= 26);