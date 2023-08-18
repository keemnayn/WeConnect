select *from MEMBER;
select * from PROJECT;
select * from TEAM_POST;
select * from TEAM_POST_COMMENT;
select * from proposal;


insert into MEMBER(member_id, member_name, member_email, member_password, position, member_status, manager_yn, department_id) values(member_seq.NEXTVAL, '김나연', 'na@exam.com', 'a', '주임', '승인', 'Y', '2');
delete from MEMBER where MEMBER_ID='27';
update "WECONNECT"."MEMBER" set "DEPARTMENT_ID"=2 where "MEMBER_ID"=27

insert into PROJECT(project_id, project_name, project_start, project_end, member_id) values(project_seq.nextval, '상반기결산', '23.03.01', '23.08.15', 44);
insert into TEAM_POST(team_post_id, team_post_title, team_post_content, team_post_create_date, member_id, project_id) values(team_post_seq.NEXTVAL, '야호첫글', '안녕하세요', sysdate, 44, 2);
insert into TEAM_POST(team_post_id, team_post_title, team_post_content, member_id, project_id) values(team_post_seq.NEXTVAL, '두번째', '안녕하세요', 44, 2);


insert into TEAM_POST_COMMENT(team_post_comment_id, team_post_comment_content, team_post_comment_date, team_post_id, member_id) values(team_post_comment_seq.NEXTVAL, '내용굿이네요', sysdate, 1, 44);

select t.team_post_id, t.team_post_title,
	t.team_post_content, t.team_post_create_date, m.member_id,
	tc.team_post_comment_id, tc.team_post_comment_content,
	tc.team_post_comment_date 
	from member m 
	join team_post t on m.member_id=t.member_id 
	join team_post_comment tc on t.team_post_id=tc.team_post_id 
	where t.team_post_id=1;
	
	select t.team_post_id AS teamPostId, t.team_post_title AS teamPostTitle,
		t.team_post_content AS teamPostContent, t.team_post_create_date AS
		teamPostCreateDate, m.member_name AS memberName
		from member m
		join team_post t on m.member_id=t.member_id
		where t.member_id = 44
		
insert into PROPOSAL(proposal_id, proposal_title, proposal_content, proposal_status, member_id) values(proposal_seq.NEXTVAL, '제안합니다', '바꿔주세요', '처리중', 44);

select p.proposal_id AS proposalId, p.proposal_title AS proposalTitle, 
	p.proposal_content AS p.proposalContent, p.proposal_create AS proposalCreate, 
	p.proposal_status AS proposalStatus, m.member_name AS memberName
	from member m
	join proposal p on m.member_id=p.proposal_id
	where p.member_id = 44
