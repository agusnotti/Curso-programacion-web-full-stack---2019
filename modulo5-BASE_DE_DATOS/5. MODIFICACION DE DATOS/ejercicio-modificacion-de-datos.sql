use bd111mil;

-- REPASO

-- SELECT * from e01_factura
-- where fecha between '2017-01-01' and '2017-12-31';

-- SELECT count(*)from e01_producto
-- where stock > 100 and precio between 100 and 300;

-- SELECT * from e01_producto
-- where codigo_producto = 44;
-- NOMBRE: ON SALE

-- SELECT count(*), sum(cantidad) from e01_detalle_factura
-- where codigo_producto = 44;

-- SELECT sum((total_con_iva - total_sin _iva)/total_sin_iva)/ count(*) from e01_factura
-- where nro_cliente = 8;

-- MODIFICACION DE DATOS

-- SELECT * from e01_producto;

-- INSERT INTO e01_producto (codigo_producto, marca, nombre, precio, stock, descripcion)
-- VALUES (101,'misky', 'turron', 4, 100, 'turron');

-- SELECT * from e01_producto
-- where marca = 'misky';

-- SELECT * FROM e01_telefono
-- WHERE codigo_area = 551;
-- habia 2

-- UPDATE e01_telefono
-- SET
 -- codigo_area = 526, SI TENGO QUE AGREGAR VARIOS, SEPARO CON ','.
-- WHERE
 -- codigo_area = 551; NO OLVIDARME DEL WHERE!!!
 
 -- update e01_cliente
 -- set
 -- nombre = 'agustina',
 -- apellido = 'notti'
 -- where
 -- id_cliente = 5; SUPONIENDO QUE SE EL NUM DE ID

-- SELECT * FROM e01_telefono
-- WHERE codigo_area = 526;

-- DELETE FROM e01_producto
-- WHERE marca = 'misky';

-- SELECT * FROM e01_producto
-- WHERE marca = 'misky';

