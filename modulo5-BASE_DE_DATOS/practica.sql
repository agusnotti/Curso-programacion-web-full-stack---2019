
delete from e01_factura
where nro_cliente=1;

select c.apellido, c.direccion, t.nro_telefono 
from e01_cliente c
inner join e01_telefono t 
on c.nro_cliente=t.nro_cliente
order by c.apellido
;

-- dado el cliente 1 quiero saber la cantidad y de que marca facturo el producto 'fish'
select c.cantidad, p.marca 
from e01_detalle_factura c
inner join e01_producto p
on c.codigo_producto=p.codigo_producto
where p.nombre='fish';

select nombre, nro_cliente from e01_cliente c
from e

from e01_detalle_factura c
inner join e01_producto p
on c.codigo_producto=p.codigo_producto
where p.nombre='fish';


SELECT *
FROM tabla1
INNER JOIN
(tabla2 INNER JOIN tabla3 ON tabla2.id2=table3.id2)
ON tabla1.id=tabla2.id


