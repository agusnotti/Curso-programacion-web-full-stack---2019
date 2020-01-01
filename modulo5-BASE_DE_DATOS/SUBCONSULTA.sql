use autoexamen;

-- select COUNT(*) from salaries;
-- select COUNT(*) from titles;
-- select COUNT(*) from employees;
-- select COUNT(*) from dept_manager;
-- select COUNT(*) from dept_emp;
-- select COUNT(*) from departments;

-- titulo senior managger en el anio 1/10/91 fue jefe de departament, cual es el nombre del dpto?

SELECT * FROM dept_manager
 WHERE from_date = 1991-10-01 in
	(SELECT * FROM titles
		WHERE title = 'senior staff');
        
SELECT nombre, apellido FROM e01_cliente
WHERE nro_cliente in -- (3,4)
	(SELECT nro_cliente FROM e01_factura);
    
    
Select * from departaments
Where dept_no = 
	(Select dept_no de dept manager  
	Where emp no =
		(Select emp_no de employee
			Where emp_no =
				(Select emp_no de titles  
                 where from fecha = 1991-10-01 And title= 'senior staff');
    
