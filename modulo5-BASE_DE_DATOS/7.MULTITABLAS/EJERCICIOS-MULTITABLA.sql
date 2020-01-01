use bd111mil;

-- EJERCICIOS
-- 1
SELECT c.*, t.nro_telefono FROM e01_cliente c
INNER JOIN e01_telefono t ON c.nro_cliente = t.nro_cliente;

-- 2
SELECT c.*, t.nro_telefono FROM e01_cliente c
INNER JOIN e01_telefono t ON c.nro_cliente = t.nro_cliente
WHERE c.nro_cliente = 30;

-- 3
SELECT c.nombre, c.apellido, f.total_con_iva
FROM e01_cliente c
INNER JOIN e01_factura f ON c.nro_cliente = f.nro_cliente;

-- 4
-- dado el cliente 1 quiero saber la cantidad y de que marca facturo el producto 'fish'

select d.cantidad, p.marca
from e01_cliente c
inner join e01_factura f on c.nro_cliente=f.nro_cliente
inner join e01_detalle_factura d on f.nro_factura=d.nro_factura
inner join e01_producto p on d.codigo_producto = p.codigo_producto
where c.nombre = 'xerxes' and p.nombre='fish';

-- 5 
-- BUSCAR TODOS LOS PRODUCTOS DISTINTOS FACTURADOS (NOMBRE Y DESCRIPCION) DEL CLIENTE NOMBRE= CONTANCE Y APELLIDO=SWEENEY


select min(f.fecha), max(f.fecha)
from e01_producto p
inner join e01_detalle_factura d on p.codigo_producto=d.codigo_producto
inner join e01_factura f on d.nro_factura=f.nro_factura
inner join e01_cliente c on f.nro_cliente = c.nro_cliente
where c.nombre = 'constance' and c.apellido='sweeney'



select f.nro_factura, f.fecha, f.total_con_iva, f.total_sin_iva, sum(p.precio*d.cantidad) as precio_sin_descuento
from e01_producto p
inner join e01_detalle_factura d on p.codigo_producto=d.codigo_producto
inner join e01_factura f on d.nro_factura=f.nro_factura
inner join e01_cliente c on f.nro_cliente = c.nro_cliente
where c.nombre = 'constance' and c.apellido='sweeney'
group by f.nro_factura, f.fecha, f.total_con_iva, f.total_sin_iva asc;



-- SELECT c.nombre, c.apellido, t.total_con_iva COUNT(f.nro_factura) FROM e01_cliente c 
-- LEFT JOIN e01_factura f ON (c.nro_cliente = f.nro_cliente)
-- GROUP BY c.nro_cliente;


SELECT nombre,COUNT(nombre)
FROM e01_producto
GROUP BY nombre;