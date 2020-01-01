drop view if exists SCHOOL_DC;
create view SCHOOL_DC as
select * 
from wschool
where ROW_DATE in (
	select max(ROW_DATE) from wschool
    group by SCHOOL_ID
)
group by SCHOOL_ID, ROW_DATE

order by ROW_DATE desc;

select * from SCHOOL_DC;