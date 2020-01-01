-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`employees`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`employees` ;

CREATE TABLE IF NOT EXISTS `mydb`.`employees` (
  `emp_no` INT NOT NULL AUTO_INCREMENT,
  `birth_date` DATE NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `gender` ENUM('M', 'F') NULL,
  `hire_date` DATE NULL,
  PRIMARY KEY (`emp_no`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`departments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`departments` ;

CREATE TABLE IF NOT EXISTS `mydb`.`departments` (
  `dept_no` CHAR(4) NOT NULL,
  `dept_name` VARCHAR(45) NULL,
  PRIMARY KEY (`dept_no`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`salaries`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`salaries` ;

CREATE TABLE IF NOT EXISTS `mydb`.`salaries` (
  `from_date` DATE NOT NULL,
  `to_date` DATE NULL,
  `emp_no` INT NOT NULL,
  `salary` INT NULL,
  PRIMARY KEY (`from_date`, `emp_no`),
  INDEX `fk_salario_Empleado1_idx` (`emp_no` ASC) VISIBLE,
  CONSTRAINT `fk_salario_Empleado1`
    FOREIGN KEY (`emp_no`)
    REFERENCES `mydb`.`employees` (`emp_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`titles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`titles` ;

CREATE TABLE IF NOT EXISTS `mydb`.`titles` (
  `from_date` DATE NOT NULL,
  `to_date` DATE NULL,
  `title` VARCHAR(45) NULL,
  `Emp_no` INT NOT NULL,
  PRIMARY KEY (`from_date`, `Emp_no`),
  INDEX `fk_titulos_Empleado1_idx` (`Emp_no` ASC) VISIBLE,
  CONSTRAINT `fk_titulos_Empleado1`
    FOREIGN KEY (`Emp_no`)
    REFERENCES `mydb`.`employees` (`emp_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`dept_manager`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`dept_manager` ;

CREATE TABLE IF NOT EXISTS `mydb`.`dept_manager` (
  `dept_no` CHAR(4) NOT NULL,
  `Emp_no` INT NOT NULL,
  `from_date` DATE NULL,
  `fecha_hasta` DATE NULL,
  PRIMARY KEY (`dept_no`, `Emp_no`),
  INDEX `fk_Departamento_has_Empleado_Empleado1_idx` (`Emp_no` ASC) VISIBLE,
  INDEX `fk_Departamento_has_Empleado_Departamento1_idx` (`dept_no` ASC) VISIBLE,
  CONSTRAINT `fk_Departamento_has_Empleado_Departamento1`
    FOREIGN KEY (`dept_no`)
    REFERENCES `mydb`.`departments` (`dept_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Departamento_has_Empleado_Empleado1`
    FOREIGN KEY (`Emp_no`)
    REFERENCES `mydb`.`employees` (`emp_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`dept_emp`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`dept_emp` ;

CREATE TABLE IF NOT EXISTS `mydb`.`dept_emp` (
  `emp_no` INT NOT NULL,
  `dept_no` CHAR(4) NOT NULL,
  `from_date` DATE NULL,
  `to_date` DATE NULL,
  PRIMARY KEY (`emp_no`, `dept_no`),
  INDEX `fk_Empleado_has_Departamento_Departamento1_idx` (`dept_no` ASC) VISIBLE,
  INDEX `fk_Empleado_has_Departamento_Empleado1_idx` (`emp_no` ASC) VISIBLE,
  CONSTRAINT `fk_Empleado_has_Departamento_Empleado1`
    FOREIGN KEY (`emp_no`)
    REFERENCES `mydb`.`employees` (`emp_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Empleado_has_Departamento_Departamento1`
    FOREIGN KEY (`dept_no`)
    REFERENCES `mydb`.`departments` (`dept_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
