
CREATE VIEW salario_por_titulo AS
select t.title as titulo, min(s.salary) as minimo, max(s.salary) as maximo, avg(s.salary) as promedio 
from salaries s
-- inner join employees e on s.emp_no = e.emp_no
inner join titles t on s.emp_no = t.emp_no
group by t.title;

select * from salario_por_titulo;