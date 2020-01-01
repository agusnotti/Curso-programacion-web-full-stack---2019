create table historial (
	fecha DATE not null,
    aviso varchar(255) not null,
    nombre_tabla varchar(255)
);

-- CREATE TRIGGER ingreso_salario
-- AFTER
-- INSERT ON salaries FOR EACH ROW WHEN
-- (new.salary > 1000)
-- BEGIN
-- INSERT INTO historial (fecha, aviso,nombre_tabla)
-- VALUES
-- (Sysdate, 'Registro con Atributo2 superior a 1000','salaries');
-- END;

-- https://stackoverflow.com/questions/26132757/mysql-trigger-print-a-warning-message-when-an-inserted-entry-is-greater-than-a
DELIMITER $$
CREATE TRIGGER ingreso_salario  
BEFORE INSERT ON salaries 
FOR EACH ROW BEGIN
    IF (NEW.salary < 1000) THEN 
        SIGNAL SQLSTATE '02000' SET MESSAGE_TEXT = 'El salario es demasiado bajo';
    END IF;
END$$
DELIMITER ;

select * from salaries
where year(from_date) = year(curdate()) -20
and year(to_date) = year(curdate()) -20;


INSERT INTO `salaries` (emp_no, salary, from_date, to_date) VALUES 
(10001,2000,'2019-10-01','2019-10-01');