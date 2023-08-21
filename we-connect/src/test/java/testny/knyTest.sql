select *from MEMBER;
select * from PROJECT;
select * from TEAM_POST;
select * from TEAM_POST_COMMENT;


-- member 
insert into MEMBER(member_id, member_name, member_email, member_password, position, member_status, manager_yn, department_id) values(member_seq.NEXTVAL, '김나연', 'na@exam.com', 'a', '주임', '승인', 'Y', '2');
delete from MEMBER where MEMBER_ID='27';
update 'WECONNECT'.'MEMBER' set 'DEPARTMENT_ID'=2 where 'MEMBER_ID'=27

-- project
insert into PROJECT(project_id, project_name, project_start, project_end, member_id) values(project_seq.nextval, '상반기결산', '23.03.01', '23.08.15', 44);

-- teamPost
insert into TEAM_POST(team_post_id, team_post_title, team_post_content, team_post_create_date, member_id, project_id) values(team_post_seq.NEXTVAL, '야호첫글', '안녕하세요', sysdate, 44, 2);
insert into TEAM_POST(team_post_id, team_post_title, team_post_content, member_id, project_id) values(team_post_seq.NEXTVAL, '두번째', '안녕하세요', 44, 2);

-- teamPostComment
insert into TEAM_POST_COMMENT(team_post_comment_id, team_post_comment_content, team_post_comment_date, team_post_id, member_id) values(team_post_comment_seq.NEXTVAL, '내용굿이네요', sysdate, 1, 44);

-- teamPost와 teamPostComment 조인하여 조회
select t.team_post_id, t.team_post_title,
	t.team_post_content, t.team_post_create_date, m.member_id,
	tc.team_post_comment_id, tc.team_post_comment_content,
	tc.team_post_comment_date 
	from member m 
	join team_post t on m.member_id=t.member_id 
	join team_post_comment tc on t.team_post_id=tc.team_post_id 
	where t.team_post_id=1;

-- 팀포스트(워크보드-공통) teamPost만 조회
	select t.team_post_id AS teamPostId, t.team_post_title AS teamPostTitle,
		t.team_post_content AS teamPostContent, t.team_post_create_date AS
		teamPostCreateDate, m.member_name AS memberName
		from member m
		join team_post t on m.member_id=t.member_id
		where t.member_id = 44
		
-- 건의사항 proposal
select * from proposal;
delete from proposal;
DROP SEQUENCE proposal_seq;
ALTER TABLE proposal
DROP COLUMN member_id;

CREATE SEQUENCE proposal_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE proposal (
	proposal_id NUMBER NOT NULL, 
	proposal_title VARCHAR2(100) NOT NULL, 
	proposal_content CLOB NOT NULL, 
	proposal_create DATE NOT NULL, 
	proposal_status VARCHAR2(100) CHECK (proposal_status IN ('처리중', '완료')) NOT NULL, 
);
ALTER TABLE proposal
MODIFY proposal_create DEFAULT SYSDATE;

ALTER TABLE proposal
MODIFY proposal_status DEFAULT '처리중';

COMMENT ON TABLE proposal IS '건의사항';

COMMENT ON COLUMN proposal.proposal_id IS '건의사항 번호';
COMMENT ON COLUMN proposal.proposal_title IS '건의사항 제목';
COMMENT ON COLUMN proposal.proposal_content IS '건의사항 내용';
COMMENT ON COLUMN proposal.proposal_create IS '건의사항 등록일';
COMMENT ON COLUMN proposal.proposal_status IS '건의사항 처리상태';

CREATE UNIQUE INDEX PK_proposal ON proposal (proposal_id ASC);

ALTER TABLE proposal
	ADD CONSTRAINT PK_proposal PRIMARY KEY (proposal_id);

insert into PROPOSAL(proposal_id, proposal_title, proposal_content, proposal_status) values(proposal_seq.NEXTVAL, '제안합니다', '바꿔주세요', '처리중');
insert into PROPOSAL(proposal_id, proposal_title, proposal_content, proposal_status) values(proposal_seq.NEXTVAL, '두번째글제목', '두번째내용', '완료');
insert into PROPOSAL(proposal_id, proposal_title, proposal_content, proposal_status) values(proposal_seq.NEXTVAL, '3번째글제목', '3번째내용', '처리중');


-- alt shift a ***
 /* select p.proposal_id AS proposalId, p.proposal_title AS proposalTitle, 
	p.proposal_content AS proposalContent, p.proposal_create AS proposalCreate, 
	p.proposal_status AS proposalStatus, m.member_name AS memberName
	from proposal p join member m
	on m.member_id=p.member_id */

/* 건의사항은 익명게시판으로 운영되어야 하는거 같아 조인 X*/
select * from proposal
-- 건의사항 전체 목록
	select proposal_id AS proposalId, proposal_title AS proposalTitle,      
	proposal_content AS proposalContent, proposal_create AS proposalCreate,
	proposal_status AS proposalStatus
	from proposal                                            
-- 건의사항 추가
	insert into PROPOSAL(proposal_id, proposal_title, proposal_content,
	proposal_status) values(proposal_seq.NEXTVAL, #{proposalTitle},
	#{proposalContent}, #{proposalStatus});
-- 건의사항 수정
	UPDATE proposal
	SET proposal_title = '첫번째글제목',
    proposal_content = '첫번째글내용',
    proposal_status = '완료'
	WHERE proposal_id = 1;
-- 건의사항 삭제
	delete proposal where proposal_id=2;	
-- 건의사항 검색
	SELECT proposal_id AS proposalId, proposal_title AS proposalTitle,      
	proposal_content AS proposalContent, proposal_create AS proposalCreate,
	proposal_status AS proposalStatus
	FROM proposal WHERE 1=1
	
	
	
	
	
	
--	건의사항 상세페이지 select 할 때는 where p.proposal_id=#{proposalId} 

