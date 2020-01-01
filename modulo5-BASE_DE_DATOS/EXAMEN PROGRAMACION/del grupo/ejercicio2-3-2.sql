drop view if exists SCHOOL_DS;
create view SCHOOL_DS as 
select DATE_ID, time(ROW_DATE), SCHOOL_ID,SCHOOL_NAME from wdate
left join wschool on (wdate.DATE_ID=date(wschool.ROW_DATE))
order by wdate.DATE_ID asc;

select * from SCHOOL_DS;