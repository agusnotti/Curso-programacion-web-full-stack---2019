use autoexamen;

DROP TABLE IF EXISTS dept_emp,
                     dept_manager,
                     titles,
                     salaries, 
                     employees, 
                     departments;
                     
CREATE TABLE IF NOT EXISTS employees (
	emp_no INT NOT NULL,
	birth_date  DATE            NOT NULL,
    first_name  VARCHAR(14)     NOT NULL,
    last_name   VARCHAR(16)     NOT NULL,
    gender      ENUM ('M','F')  NOT NULL,    
    hire_date   DATE            NOT NULL,
    PRIMARY KEY (emp_no));
​
CREATE TABLE IF NOT EXISTS departments (
    dept_no     CHAR(4)         NOT NULL,
    dept_name   VARCHAR(40)     NOT NULL,
    PRIMARY KEY (dept_no),
    UNIQUE  KEY (dept_name)
);

CREATE TABLE IF NOT EXISTS dept_manager (
   emp_no       INT             NOT NULL,
   dept_no      CHAR(4)         NOT NULL,
   from_date    DATE            NOT NULL,
   to_date      DATE            NOT NULL,
   PRIMARY KEY (emp_no,dept_no)
); 
​
CREATE TABLE IF NOT EXISTS dept_emp (
    emp_no      INT             NOT NULL,
    dept_no     CHAR(4)         NOT NULL,
    from_date   DATE            NOT NULL,
    to_date     DATE            NOT NULL,
    PRIMARY KEY (emp_no,dept_no)
);

​
CREATE TABLE IF NOT EXISTS titles (
    emp_no      INT             NOT NULL,
    title       VARCHAR(50)     NOT NULL,
    from_date   DATE            NOT NULL,
    to_date     DATE,
    PRIMARY KEY (emp_no,title, from_date)
) 
; 
​
CREATE TABLE IF NOT EXISTS salaries (
    emp_no      INT             NOT NULL,
    salary      INT             NOT NULL,
    from_date   DATE            NOT NULL,
    to_date     DATE            NOT NULL,
    PRIMARY KEY (emp_no, from_date)
) 
; 



ALTER TABLE dept_manager ADD CONSTRAINT fk_dept_manager_employees
FOREIGN KEY (emp_no)  
REFERENCES employees (emp_no)    
ON DELETE CASCADE
;

ALTER TABLE dept_manager ADD CONSTRAINT fk_dept_manager_departments
FOREIGN KEY (dept_no) 
REFERENCES departments (dept_no) 
ON DELETE CASCADE
;


ALTER TABLE dept_emp ADD CONSTRAINT fk_dept_emp_employees
FOREIGN KEY (emp_no)  
REFERENCES employees (emp_no)    
ON DELETE CASCADE
;

ALTER TABLE dept_emp ADD CONSTRAINT fk_dept_emp_departments
FOREIGN KEY (dept_no) 
REFERENCES departments (dept_no) 
ON DELETE CASCADE
;


ALTER TABLE titles ADD CONSTRAINT fk_titles_employees
FOREIGN KEY (emp_no) 
REFERENCES employees (emp_no) 
ON DELETE CASCADE
;


ALTER TABLE salaries ADD CONSTRAINT fk_salaries_employees
FOREIGN KEY (emp_no) 
REFERENCES employees (emp_no) 
ON DELETE CASCADE
;
​

​
CREATE OR REPLACE VIEW dept_emp_latest_date AS
    SELECT emp_no, MAX(from_date) AS from_date, MAX(to_date) AS to_date
    FROM dept_emp
    GROUP BY emp_no;
​
# shows only the current department for each employee
CREATE OR REPLACE VIEW current_dept_emp AS
    SELECT l.emp_no, dept_no, l.from_date, l.to_date
    FROM dept_emp d
        INNER JOIN dept_emp_latest_date l
        ON d.emp_no=l.emp_no AND d.from_date=l.from_date AND l.to_date = d.to_date;