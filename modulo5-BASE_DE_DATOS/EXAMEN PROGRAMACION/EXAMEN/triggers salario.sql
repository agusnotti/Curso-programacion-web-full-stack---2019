drop table if exists salarios_anuales;

create table salarios_anuales (
	emp_no INT not null,
    anual_total int not null
);

DELIMITER $$
DROP TRIGGER IF exists ingreso_salario;
CREATE TRIGGER ingreso_salario  
AFTER 
INSERT ON salaries 
FOR EACH ROW 
BEGIN
	IF EXISTS ( select 1 from salarios_anuales where emp_no = new.emp_no ) then
		update salarios_anuales
        set anual_total = (select sum(salary) + 0 from salaries
        where year(from_date) = year(curdate())
		and year(to_date) = year(curdate()) and emp_no = new.emp_no
        )
        where emp_no = new.emp_no;
    else
		INSERT INTO salarios_anuales (emp_no, anual_total)
		values (new.emp_no, 
			(select sum(salary)+0 from salaries
			where year(from_date) = year(curdate())
			and year(to_date) = year(curdate()) and emp_no = new.emp_no
			)
		);
    end IF;
END$$

DROP TRIGGER IF EXISTS modificar_salario;
CREATE TRIGGER modificar_salario  
AFTER 
UPDATE ON salaries 
FOR EACH ROW 
BEGIN
	IF EXISTS (SELECT 1 FROM salarios_anuales WHERE emp_no = new.emp_no) THEN
		UPDATE salarios_anuales
        SET anual_total = (select sum(salary) + 0 from salaries
        where year(from_date) = year(curdate())
		and year(to_date) = year(curdate()) and emp_no = new.emp_no
        )
        WHERE emp_no = new.emp_no;
    ELSE 
		INSERT INTO salarios_anuales (emp_no, anual_total)
		values (new.emp_no, 
			(select sum(salary)+0 from salaries
			where year(from_date) = year(curdate())
			and year(to_date) = year(curdate()) and emp_no = new.emp_no
			)
		);
    END IF;
END$$
DELIMITER ;

-- comentar codigo de prueba
-- INSERT INTO `salaries` (emp_no, salary, from_date, to_date) VALUES 
-- (10001,2000,'2019-01-28','2019-01-28');

-- select * from salarios_anuales
-- UPDATE `salaries` 
-- SET salary = 4000
-- where emp_no = 10001 and from_date = '2019-01-28';

-- select sum(salary) from salaries
-- where year(from_date) = 2019
-- and emp_no = 10001;

