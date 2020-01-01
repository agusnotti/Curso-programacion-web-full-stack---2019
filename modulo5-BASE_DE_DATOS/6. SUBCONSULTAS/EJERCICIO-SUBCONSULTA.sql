use bd111mil;

-- REPASO
 
-- set @cliente =  (select max(nro_cliente)+ 1 from e01_cliente);

SELECT COUNT(*) from e01_detalle_factura;


INSERT INTO e01_cliente (nro_cliente, nombre, apellido, direccion, activo)
VALUES (101, 'agustina','notti', 'Yrigoyen 943', 28 );

SELECT * from e01_cliente
where nro_cliente = 101;

UPDATE e01_cliente
SET nombre = 'agustin'
WHERE nro_cliente = 101;

DELETE FROM e01_cliente
WHERE nro_cliente = 101;


-- INSERT INTO e01_detalle_factura (nro_factura, codigo_producto, nro_item, cantidad)
-- VALUES (101, 065,50, 28 );

-- SELECT * from e01_detalle_factura
-- where nro_factura = 101;

SELECT nombre, apellido FROM e01_cliente
WHERE EXISTS 
	(SELECT * FROM e01_factura
		WHERE nro_cliente = e01_cliente.nro_cliente);
        
SELECT nombre, apellido FROM e01_cliente
WHERE NOT EXISTS
	(SELECT * FROM e01_factura
		WHERE nro_cliente = e01_cliente.nro_cliente);

SELECT nombre, apellido FROM e01_cliente
WHERE nro_cliente in -- (3,4)
	(SELECT nro_cliente FROM e01_factura);
    
SELECT nombre, apellido FROM e01_cliente
WHERE nro_cliente not in 
	(SELECT nro_cliente FROM e01_factura);
    
SELECT COUNT(*) FROM e01_cliente
	WHERE nro_cliente = ANY
		(SELECT nro_cliente FROM e01_factura);
        
SELECT * FROM e01_detalle_factura
	WHERE nro_item = ALL 
    (SELECT codigo_producto FROM e01_producto);
    
DELETE FROM e01_producto
WHERE marca = 'misky';


