CREATE DATABASE IF NOT EXISTS Cursor_Funcion;
use Cursor_funcion;
DROP TABLE IF EXISTS Runners;
CREATE TABLE Runners ( 
    Runner_id BIGINT NOT NULL AUTO_INCREMENT, 
    Name VARCHAR(120) NOT NULL, 
    Time BIGINT NOT NULL, 
    Penalty1 BIGINT NOT NULL, 
    Penalty2 BIGINT NOT NULL, 
    Points BIGINT, 
    PRIMARY KEY (Runner_id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

-----------------------------------------------------

INSERT INTO Runners VALUES (NULL, 'Michael', 123, 5, 2, NULL);
INSERT INTO Runners VALUES (NULL, 'Sarah', 83, 3, 3, NULL);
INSERT INTO Runners VALUES (NULL, 'John', 323, 1, 1, NULL);
INSERT INTO Runners VALUES (NULL, 'Ramon', 100, 8, 4, NULL);
INSERT INTO Runners VALUES (NULL, 'Andrew', 143, 4, 3, NULL);
INSERT INTO Runners VALUES (NULL, 'Antoine', 199, 3, 2, NULL);
INSERT INTO Runners VALUES (NULL, 'David', 101, 2, 1, NULL);

SELECT *
FROM
runners;
-----------------------------------------------------
/* Registrar las puntuaciones obtenidas en un juego, este juego consistirá en una prueba que debemos realizar en el menor tiempo posible, 
con una sola pierna y con obstáculos, y tenemos tres tipos de falta, uno es apoyar la pierna levantada, otra es chocar con un obstáculo,
 y la última de acuerdo a la posición obtenida se tiene que conocer la puntuación anterior y la siguiente (si es que existan) y establecer
 un promedio si la penalización es menor al promedio
Al final de la prueba se asignarán los puntos y se almacenarán en la misma tabla, para no tener que calcularlos cada vez.
Se desea conocer la puntuación anterior y la siguiente (si es que existen) y establecer un promedio si la penalización actual es menor al
promedio de las 2.
Crear una función que asigne las puntuaciones a cada uno de los corredores con una fórmula. 

Por ejemplo la siguiente: siendo Time el tiempo en segundos que se tarda en realizar la prueba, 500 - (Time) serán los puntos iniciales, a 
los que tenemos que restar 5*penalty1 y 3*penalty2.

-- Ejemplo 2 (si tienen tiempo):
-- si el tiempo es mayor de 250, se intercambien los penalties, editando directamente el código del loop, metiendo una sentencia IF, 
-- aunque eso mismo lo podemos hacer también desde la función que calcula los puntos.*/

-- ----------> EJEMPLO 1:
DROP FUNCTION IF EXISTS calcular_runner_points;
DELIMITER $
CREATE FUNCTION calcular_runner_points (
  _time BIGINT,
  _penalty1 BIGINT,
  _penalty2 BIGINT
) RETURNS BIGINT
READS SQL DATA
DETERMINISTIC
BEGIN
  DECLARE _points BIGINT;
 
  SET _points = 500 - _time - _penalty1*5 - _penalty2*3;
 
  RETURN _points;
END;
$


DROP PROCEDURE IF EXISTS calcular_puntos_ejemplo_1;
DELIMITER $$
CREATE PROCEDURE calcular_puntos_ejemplo_1 (
) BEGIN
-- Variables donde almacenar lo que nos traemos desde el SELECT
  DECLARE v_name VARCHAR(120);
  DECLARE v_time BIGINT;
  DECLARE v_penalty1 BIGINT;
  DECLARE v_penalty2 BIGINT;
  DECLARE v_runner_id BIGINT;
-- Variable para controlar el fin del bucle
  DECLARE total_filas BIGINT;
  DECLARE contador BIGINT;
 
-- El SELECT que vamos a ejecutar
  DECLARE runners_cursor CURSOR FOR
    SELECT Runner_id, Name, Time, Penalty1, Penalty2 FROM runners;

-- total de filas:
  select count(*) into total_filas from runners;
  
-- inicializacion del contador:
 set contador = 1;

  OPEN runners_cursor;
  WHILE contador <= total_filas DO
    FETCH runners_cursor INTO v_runner_id, v_name, v_time, v_penalty1, v_penalty2;

  UPDATE Runners SET Points = calcular_runner_points(v_time, v_penalty1, v_penalty2) WHERE Runner_id=v_runner_id;
	set contador = contador + 1;
	
  END WHILE;

  CLOSE runners_cursor;
END; 
$$

call calcular_puntos_ejemplo_1;

-- --------------------------------------------------------------------------------

-- EJEMPLO 2: (usando IF para tiempo mayor a 250):

DROP PROCEDURE IF EXISTS calcular_puntos_ejemplo_2;
DELIMITER $$
CREATE PROCEDURE calcular_puntos_ejemplo_2 (
) BEGIN
-- Variables donde almacenar lo que nos traemos desde el SELECT
  DECLARE v_name VARCHAR(120);
  DECLARE v_time BIGINT;
  DECLARE v_penalty1 BIGINT;
  DECLARE v_penalty2 BIGINT;
  DECLARE v_runner_id BIGINT;
-- Variable para controlar el fin del bucle
  DECLARE total_filas BIGINT;
  DECLARE contador BIGINT;
 
-- El SELECT que vamos a ejecutar
  DECLARE runners_cursor_2 CURSOR FOR
    SELECT Runner_id, Name, Time, Penalty1, Penalty2 FROM runners;

-- total de filas:
  select count(*) into total_filas from runners;
  
-- inicializacion del contador:
 set contador = 1;

  OPEN runners_cursor_2;
  WHILE contador <= total_filas DO
    FETCH runners_cursor_2 INTO v_runner_id, v_name, v_time, v_penalty1, v_penalty2;
	IF v_time > 250 THEN
  UPDATE Runners SET Points = calcular_runner_points(v_time, v_penalty2, v_penalty1) WHERE Runner_id=v_runner_id;
  ELSE 
  UPDATE Runners SET Points = calcular_runner_points(v_time, v_penalty1, v_penalty2) WHERE Runner_id=v_runner_id;
	END IF;
    set contador = contador + 1;
  END WHILE;

  CLOSE runners_cursor_2;
END; 
$$

CALL calcular_puntos_ejemplo_2;

SELECT *
FROM 
runners;

----------------------------------------------------------------------
Resultado Esperado:
update
2	Sarah	83	3	3	393
4	Ramon	100	8	4	348
7	David	101	2	1	386
1	Michael	123	5	2	346
5	Andrew	143	4	3	328
6	Antoine	199	3	2	280
3	John	323	1	1	169

Procedure
2	Sarah	83	3	3	174
4	Ramon	100	8	4	390
7	David	101	2	1	347
1	Michael	123	5	2	357
5	Andrew	143	4	3	313
6	Antoine	199	3	2	248
3	John	323	1	1	140

