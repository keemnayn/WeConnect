select *from MEMBER;
select * from PROJECT;
select * from TEAM_POST;


insert into MEMBER(member_id, member_name, member_email, member_password, position, member_status, manager_yn, department_id) values(member_seq.NEXTVAL, '김나연', 'na@exam.com', 'a', '주임', '승인', 'Y', '2');
delete from MEMBER where MEMBER_ID='27';
update "WECONNECT"."MEMBER" set "DEPARTMENT_ID"=2 where "MEMBER_ID"=27

insert into PROJECT(project_id, project_name, project_start, project_end, member_id) values(project_seq.nextval, '상반기결산', '23.03.01', '23.08.15', 44);
insert into TEAM_POST(team_post_id, team_post_title, team_post_content, team_post_create_date, member_id, project_id) values(team_post_seq.NEXTVAL, '야호첫글', '안녕하세요', sysdate, 44, 2);