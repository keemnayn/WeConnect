 select * from WECONNECT.FREE_BOARD_COMMENT;

select * from free_board;


 
/* 회원 */
CREATE SEQUENCE member_seq
START WITH 1
INCREMENT BY 1;

CREATE TABLE member (
	member_id NUMBER NOT NULL, /* 회원번호 */
	member_name VARCHAR2(100) NOT NULL, /* 회원명 */
	member_email VARCHAR2(300) NOT NULL, /* 이메일 */
	member_password VARCHAR2(1000) NOT NULL, /* 비밀번호 */
	position VARCHAR2(100) NOT NULL, /* 직급 */
	member_status VARCHAR2(100) NOT NULL, /* 계정상태 */
	manager_yn CHAR(1) NOT NULL, /* 관리자여부 */
	department_id NUMBER /* 부서번호 */
);
select * from member;
ALTER TABLE member
ADD leave_count NUMBER DEFAULT 12 NOT NULL;
update member set Leave_count = 
/*멤버 테이블 insert 문 */
INSERT INTO member (member_name, member_email, member_password, position, department_id)
VALUES (member_seq.NEXTVAL, '박정', 'een@example.com', 'a', '사원','2');
--로그인----
select member_name from member where member_email='wqeqwere1'and member_password='12';
--업데이트--
UPDATE member
SET  LEAVE_COUNT= LEAVE_COUNT -3
where member_name = '박애준1';


UPDATE member
SET leave_count = leave_count - 
    (SELECT SUM(leave_request_end - leave_request_start + 1)
     FROM leave_request
     WHERE member_id = 
           (SELECT member_id FROM member WHERE member_id = 131))
WHERE member_id = 131;



/*멤버 테이블 */
select * from member;
select * from department;
select * from member 
ALTER TABLE member
MODIFY member_status DEFAULT '대기';
--member , department =>join 
select m.member_name, m.member_email, m.position, d.department_name  from member m inner join department d ON m.DEPARTMENT_ID = d.DEPARTMENT_ID;

select * from member where member_email ='1212';
ALTER TABLE member
MODIFY manager_yn DEFAULT 'N';

COMMENT ON TABLE member IS '회원';

COMMENT ON COLUMN member.member_id IS '회원번호';

COMMENT ON COLUMN member.member_name IS '회원명';

COMMENT ON COLUMN member.member_email IS '이메일';

COMMENT ON COLUMN member.member_password IS '비밀번호';

COMMENT ON COLUMN member.position IS '직급';

COMMENT ON COLUMN member.member_status IS '계정상태';

COMMENT ON COLUMN member.manager_yn IS '관리자여부';

COMMENT ON COLUMN member.department_id IS '부서번호';

CREATE UNIQUE INDEX PK_member
	ON member (
		member_id ASC
	);

ALTER TABLE member
ADD CONSTRAINT UNQ_member_email
UNIQUE (member_email);

ALTER TABLE member
ADD CONSTRAINT CHK_manager_yn
CHECK (manager_yn IN ('Y', 'N'));

ALTER TABLE member
ADD CONSTRAINT CHK_member_status
CHECK (member_status IN ('대기', '승인', '탈퇴'));
	
ALTER TABLE member
	ADD
		CONSTRAINT PK_member
		PRIMARY KEY (
			member_id
);
ALTER TABLE member
ADD CONSTRAINT FK_member_department
FOREIGN KEY (department_id)
REFERENCES department(department_id);	

/* 프로필 이미지 */
CREATE TABLE profile_images (
    profile_images_id NUMBER PRIMARY KEY,
    profile_images_name VARCHAR2(1000) NOT NULL,
    profile_images_path VARCHAR2(1000) NOT NULL,  -- 이미지 파일의 경로
    member_id NUMBER NOT NULL,  -- 사용자 또는 다른 엔터티의 ID
    FOREIGN KEY (member_id) REFERENCES member(member_id)
);

INSERT INTO profile_images (profile_images_id, profile_images_name, profile_images_path, member_id)
VALUES (1, 'profile.png', 'img/header/profile.png', 131);	

select * from profile_images;

SELECT profile_images_path FROM profile_images WHERE member_id = 131;



/* 부서 */
CREATE SEQUENCE department_seq
START WITH 1
INCREMENT BY 1;
select * from member;
SELECT m.member_name, m.position, d.department_Name
FROM member m 
INNER JOIN department d ON m.department_ID = d.department_id;

select * from department;
		
CREATE TABLE department (
	department_id NUMBER NOT NULL, /* 부서번호 */
	department_name VARCHAR2(100) NOT NULL /* 부서명 */
);
COMMENT ON TABLE department IS '부서';

COMMENT ON COLUMN department.department_id IS '부서번호';

COMMENT ON COLUMN department.department_name IS '부서명';

CREATE UNIQUE INDEX PK_department
	ON department (
		department_id ASC
	);
ALTER TABLE department
ADD CONSTRAINT UNQ_department_name
UNIQUE (department_name);

ALTER TABLE department
	ADD
		CONSTRAINT PK_department
		PRIMARY KEY (
			department_id
);


/* 프로젝트 */
CREATE SEQUENCE project_seq
START WITH 1
INCREMENT BY 1;

CREATE TABLE project (
	project_id NUMBER NOT NULL, /* 프로젝트 번호 */
	project_name VARCHAR2(100) NOT NULL, /* 프로젝트명 */
	project_start DATE NOT NULL, /* 프로젝트 시작일 */
	project_end DATE NOT NULL, /* 프로젝트 마감일 */
	member_id NUMBER /* 회원번호 */
);

COMMENT ON TABLE project IS '프로젝트';

COMMENT ON COLUMN project.project_id IS '프로젝트 번호';

COMMENT ON COLUMN project.project_name IS '프로젝트명';

COMMENT ON COLUMN project.project_start IS '프로젝트 시작일';

COMMENT ON COLUMN project.project_end IS '프로젝트 마감일';

COMMENT ON COLUMN project.member_id IS '회원번호';

CREATE UNIQUE INDEX PK_project
	ON project (
		project_id ASC
	);
select * from project


INSERT INTO WECONNECT.PROJECT
(PROJECT_ID, PROJECT_NAME, PROJECT_START, PROJECT_END, MEMBER_ID)
VALUES(project_seq.NEXTVAL, '테스트', TO_DATE('2023-08-30', 'YYYY-MM-DD'), TO_DATE('2023-08-30', 'YYYY-MM-DD'), 131);

--프로젝트 시작일 , 마감일 보여주는 select 
select project.project_start, project.project_end from project where member_id = 131;
ALTER TABLE project
ADD CONSTRAINT CHK_project_dates
CHECK (project_start <= project_end);

ALTER TABLE project
	ADD
		CONSTRAINT PK_project
		PRIMARY KEY (
			project_id
);
ALTER TABLE project
ADD CONSTRAINT FK_project_member
FOREIGN KEY (member_id)
REFERENCES member(member_id);

/* 프로젝트멤버 */
CREATE SEQUENCE project_member_seq
START WITH 1
INCREMENT BY 1;


CREATE TABLE project_member (
	member_id NUMBER NOT NULL, /* 회원번호 */
	project_id NUMBER NOT NULL /* 프로젝트 번호 */
);

COMMENT ON TABLE project_member IS '프로젝트멤버';

COMMENT ON COLUMN project_member.member_id IS '회원번호';

COMMENT ON COLUMN project_member.project_id IS '프로젝트 번호';

CREATE UNIQUE INDEX PK_project_member
	ON project_member (
		member_id ASC,
		project_id ASC
	);

ALTER TABLE project_member
	ADD
		CONSTRAINT PK_project_member
		PRIMARY KEY (
			member_id,
			project_id
		);
		
ALTER TABLE project_member
ADD CONSTRAINT FK_project_member_member
FOREIGN KEY (member_id)
REFERENCES member(member_id);

ALTER TABLE project_member
ADD CONSTRAINT FK_project_member_project
FOREIGN KEY (project_id)
REFERENCES project(project_id);

/* 근태 */
CREATE SEQUENCE attendance_seq
START WITH 1
INCREMENT BY 1;
drop SEQUENCE attendance_seq
drop table attendance

CREATE TABLE attendance (
	attendance_id NUMBER NOT NULL, /* 근태 번호 */
	work_in_time TIMESTAMP NOT NULL, /* 출근시간 */
	work_out_time TIMESTAMP, /* 퇴근시간 */
	work_day DATE NOT NULL, /* 출근일 */
	attendance_status VARCHAR2(20) NOT NULL CHECK (attendance_status IN ('정상', '지각', '결근')), /* 근태 상태 */
	member_id NUMBER, /* 회원번호 */
	CONSTRAINT FK_attendance_member FOREIGN KEY (member_id) REFERENCES member(member_id)
);

--출근 insert
INSERT INTO attendance (attendance_id, work_in_time, work_day, member_id)
VALUES (attendance_seq.NEXTVAL, SYSTIMESTAMP, TRUNC(SYSDATE), 131);

INSERT INTO attendance (attendance_id, work_in_time, work_day, member_id)
VALUES (attendance_seq.NEXTVAL, TO_TIMESTAMP('2023-08-22 08:50:00', 'YYYY-MM-DD HH24:MI:SS'), TRUNC(SYSDATE), 131);

--퇴근버튼 눌렀을 때 업데이트 
UPDATE attendance
SET work_out_time = SYSTIMESTAMP
WHERE work_out_time IS NULL AND member_id = 131;

select * from attendance;

COMMENT ON TABLE attendance IS '근태';

COMMENT ON COLUMN attendance.attendance_id IS '근태 번호';

COMMENT ON COLUMN attendance.work_in_time IS '출근시간';

COMMENT ON COLUMN attendance.work_out_time IS '퇴근시간';

COMMENT ON COLUMN attendance.work_day IS '출근일';

COMMENT ON COLUMN attendance.attendance_status IS '근태 상태';

COMMENT ON COLUMN attendance.member_id IS '회원번호';

CREATE UNIQUE INDEX PK_attendance
	ON attendance (
		attendance_id ASC
);

ALTER TABLE attendance
	ADD
		CONSTRAINT PK_attendance
		PRIMARY KEY (
			attendance_id
);

SELECT TO_CHAR(A.work_Day, 'YYYY-MM-DD') AS work_Day,
       m.member_name,
       TO_CHAR(A.work_in_time, ' HH24:MI') AS work_in_time,
       TO_CHAR(A.work_out_time, ' HH24:MI') AS work_out_time,
       A.Attendance_STATUS
FROM Attendance A
INNER JOIN member M ON A.member_id = M.member_id;

/* 연차신청 */
CREATE SEQUENCE leave_request_seq
START WITH 1
INCREMENT BY 1;

select * from leave_request;
CREATE TABLE leave_request (
	leave_request_id NUMBER NOT NULL, /* 연차신청 번호 */
	leave_request_type VARCHAR2(50) NOT NULL CHECK (leave_request_type IN ('연차', '반차')), /* 연차 구분 */
	leave_request_start DATE NOT NULL, /* 연차 시작일 */
	leave_request_end DATE NOT NULL, /* 연차 종료일 */
	leave_request_status VARCHAR2(50) NOT NULL CHECK (leave_request_status IN ('승인 대기', '승인', '거절')), /* 승인 상태 */
	leave_request_reason VARCHAR2(1000) NOT NULL, /* 연차 사유 */
	member_id NUMBER, /* 회원번호 */
	CONSTRAINT FK_leave_request_member FOREIGN KEY (member_id) REFERENCES member(member_id)
);

update leave_request
set leave_request_status = '승인'
where member_id =131;

select * from member;
ALTER TABLE leave_request
MODIFY leave_request_status DEFAULT '승인 대기';

COMMENT ON TABLE leave_request IS '연차신청';

COMMENT ON COLUMN leave_request.leave_request_id IS '연차신청 번호';

COMMENT ON COLUMN leave_request.leave_request_type IS '연차 구분';

COMMENT ON COLUMN leave_request.leave_request_start IS '연차 시작일';

COMMENT ON COLUMN leave_request.leave_request_end IS '연차 종료일';

COMMENT ON COLUMN leave_request.leave_request_status IS '승인 상태';

COMMENT ON COLUMN leave_request.leave_request_reason IS '연차 사유';

COMMENT ON COLUMN leave_request.member_id IS '회원번호';

CREATE UNIQUE INDEX PK_leave_request
	ON leave_request (
		leave_request_id ASC
);

ALTER TABLE leave_request
	ADD
		CONSTRAINT PK_leave_request
		PRIMARY KEY (
			leave_request_id
);


/* 회의실 */
CREATE SEQUENCE room_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE room (
	room_id NUMBER NOT NULL, /* 회의실 번호 */
	room_name VARCHAR2(100) NOT NULL UNIQUE /* 회의실 명 */
);

COMMENT ON TABLE room IS '회의실';

COMMENT ON COLUMN room.room_id IS '회의실 번호';

COMMENT ON COLUMN room.room_name IS '회의실 명';

CREATE UNIQUE INDEX PK_room
	ON room (
		room_id ASC
);

ALTER TABLE room
	ADD
		CONSTRAINT PK_room
		PRIMARY KEY (
			room_id
);

--
/* 회의실 예약 */
CREATE SEQUENCE room_reserv_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE room_reserv (
	room_reserv_id NUMBER NOT NULL, /* 회의실 예약 번호 */
	room_reserv_date VARCHAR2(100) NOT NULL, /* 회의실 예약 날짜 */
	room_reserv_start_time number NOT NULL, /* 회의실 예약 시작일시 */
	room_reserv_end_time number NOT NULL, /* 회의실 예약 종료일시 */
	proposal VARCHAR2(500),
	member_id NUMBER, /* 회원번호 */
	room_id NUMBER NOT NULL, /* 회의실 번호 */
	CONSTRAINT FK_member_reserv FOREIGN KEY (member_id) REFERENCES member(member_id),
	CONSTRAINT FK_room_reserv FOREIGN KEY (room_id) REFERENCES room(room_id)
);
COMMENT ON TABLE room_reserv IS '회의실 예약';

COMMENT ON COLUMN room_reserv.room_reserv_id IS '회의실 예약 번호';

COMMENT ON COLUMN room_reserv.room_reserv_date IS '회의실 예약 날짜';

COMMENT ON COLUMN room_reserv.room_reserv_start_time IS '회의실 예약 시작일시';

COMMENT ON COLUMN room_reserv.room_reserv_end_time IS '회의실 예약 종료일시';

COMMENT ON COLUMN room_reserv.member_id IS '회원번호';

COMMENT ON COLUMN room_reserv.room_id IS '회의실 번호';

CREATE UNIQUE INDEX PK_room_reserv
	ON room_reserv (
		room_reserv_id ASC
	);

ALTER TABLE room_reserv
	ADD
		CONSTRAINT PK_room_reserv
		PRIMARY KEY (
			room_reserv_id
		);
/* 알림 */
CREATE SEQUENCE alert_seq START WITH 1 INCREMENT BY 1;
		
CREATE TABLE alert (
	alert_id NUMBER NOT NULL, 
	alert_date DATE NOT NULL, 
	alert_content VARCHAR2(1000) NOT NULL, 
	alert_check CHAR(1) CHECK (alert_check IN ('Y', 'N')) NOT NULL, 
	member_id NUMBER
);

ALTER TABLE alert
MODIFY alert_date DEFAULT SYSDATE;

ALTER TABLE alert
MODIFY alert_check DEFAULT 'N';

COMMENT ON TABLE alert IS '알림';

COMMENT ON COLUMN alert.alert_id IS '알림 번호';
COMMENT ON COLUMN alert.alert_date IS '알림 발생일시';
COMMENT ON COLUMN alert.alert_content IS '알림 내용';
COMMENT ON COLUMN alert.alert_check IS '알림 확인여부';
COMMENT ON COLUMN alert.member_id IS '회원번호';

CREATE UNIQUE INDEX PK_alert ON alert (alert_id ASC);

ALTER TABLE alert
	ADD CONSTRAINT PK_alert PRIMARY KEY (alert_id);

-- 아래의 외래키 제약조건은 회원 테이블과의 관계를 나타내며,
-- 실제 회원 테이블의 이름이 `member`라고 가정합니다. 
ALTER TABLE alert
    ADD CONSTRAINT FK_alert_member
    FOREIGN KEY (member_id) 
    REFERENCES member(member_id);
    
    
/* 공지사항 */
CREATE SEQUENCE notice_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE notice (
	notice_id NUMBER NOT NULL, 
	notice_title VARCHAR2(100) NOT NULL, 
	notice_content CLOB NOT NULL, 
	notice_views NUMBER DEFAULT 0 NOT NULL, 
	notice_create DATE NOT NULL, 
	member_id NUMBER
);
ALTER TABLE notice
MODIFY notice_create DEFAULT SYSDATE;

COMMENT ON TABLE notice IS '공지사항';

COMMENT ON COLUMN notice.notice_id IS '공지사항 번호';
COMMENT ON COLUMN notice.notice_title IS '공지사항 제목';
COMMENT ON COLUMN notice.notice_content IS '공지사항 내용';
COMMENT ON COLUMN notice.notice_views IS '공지사항 조회수';
COMMENT ON COLUMN notice.notice_create IS '공지사항 등록일';
COMMENT ON COLUMN notice.member_id IS '회원번호';

CREATE UNIQUE INDEX PK_notice ON notice (notice_id ASC);

ALTER TABLE notice
	ADD CONSTRAINT PK_notice PRIMARY KEY (notice_id);

-- 아래의 외래키 제약조건은 회원 테이블과의 관계를 나타냅니다.
-- 실제 회원 테이블의 이름이 `member`라고 가정합니다. 
ALTER TABLE notice
    ADD CONSTRAINT FK_notice_member
    FOREIGN KEY (member_id) 
    REFERENCES member(member_id);
    
    
/* 건의사항 */
CREATE SEQUENCE proposal_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE proposal (
	proposal_id NUMBER NOT NULL, 
	proposal_title VARCHAR2(100) NOT NULL, 
	proposal_content CLOB NOT NULL, 
	proposal_create DATE NOT NULL, 
	proposal_status VARCHAR2(100) CHECK (proposal_status IN ('처리중', '완료')) NOT NULL, 
	member_id NUMBER
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
COMMENT ON COLUMN proposal.member_id IS '회원번호';

CREATE UNIQUE INDEX PK_proposal ON proposal (proposal_id ASC);

ALTER TABLE proposal
	ADD CONSTRAINT PK_proposal PRIMARY KEY (proposal_id);

-- 아래의 외래키 제약조건은 회원 테이블과의 관계를 나타냅니다.
-- 실제 회원 테이블의 이름이 `member`라고 가정합니다. 
ALTER TABLE proposal
    ADD CONSTRAINT FK_proposal_member
    FOREIGN KEY (member_id) 
    REFERENCES member(member_id);

    
/*개인 게시글*/   
CREATE SEQUENCE private_post_seq START WITH 1 INCREMENT BY 1;

    CREATE TABLE private_post (
	private_post_id NUMBER NOT NULL, 
	private_post_name VARCHAR2(100) NOT NULL, 
	private_post_content CLOB NOT NULL, 
	private_post_date DATE NOT NULL, 
	member_id NUMBER
);

ALTER TABLE private_post
MODIFY private_post_date DEFAULT SYSDATE;

COMMENT ON TABLE private_post IS '개인게시글';

COMMENT ON COLUMN private_post.private_post_id IS '개인게시글 번호';
COMMENT ON COLUMN private_post.private_post_name IS '개인게시글 제목';
COMMENT ON COLUMN private_post.private_post_content IS '개인게시글 내용';
COMMENT ON COLUMN private_post.private_post_date IS '개인게시글 작성일';
COMMENT ON COLUMN private_post.member_id IS '회원번호';

CREATE UNIQUE INDEX PK_private_post ON private_post (private_post_id ASC);

ALTER TABLE private_post
	ADD CONSTRAINT PK_private_post PRIMARY KEY (private_post_id);

-- 회원 테이블과의 관계를 나타내는 외래키 제약조건 추가.
-- 실제 회원 테이블의 이름이 `member`라고 가정합니다.
ALTER TABLE private_post
    ADD CONSTRAINT FK_private_post_member
    FOREIGN KEY (member_id) 
    REFERENCES member(member_id);

    
/*개인게시글 첨부파일*/
CREATE SEQUENCE private_post_file_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE private_post_file (
	private_post_file_id NUMBER NOT NULL, 
	private_post_file_name VARCHAR2(1000) NOT NULL, 
	private_post_file_path VARCHAR2(1000) NOT NULL, 
	private_post_id NUMBER
);

COMMENT ON TABLE private_post_file IS '개인게시글 첨부파일';

COMMENT ON COLUMN private_post_file.private_post_file_id IS '개인게시글 첨부파일 번호'; 
COMMENT ON COLUMN private_post_file.private_post_file_name IS '개인게시글 첨부파일 이름'; 
COMMENT ON COLUMN private_post_file.private_post_file_path IS '개인게시글 첨부파일 경로'; 
COMMENT ON COLUMN private_post_file.private_post_id IS '개인게시글 번호';

CREATE UNIQUE INDEX PK_private_post_file ON private_post_file (private_post_file_id ASC);

ALTER TABLE private_post_file
	ADD CONSTRAINT PK_private_post_file PRIMARY KEY (private_post_file_id);

-- 개인게시글 테이블과의 관계를 나타내는 외래키 제약조건 추가.
ALTER TABLE private_post_file
    ADD CONSTRAINT FK_private_file_post
    FOREIGN KEY (private_post_id) 
    REFERENCES private_post(private_post_id);

    
/*팀 게시글*/    
CREATE SEQUENCE team_post_seq START WITH 1 INCREMENT BY 1;
    
CREATE TABLE team_post (
	team_post_id NUMBER NOT NULL, 
	team_post_title VARCHAR2(100) NOT NULL, 
	team_post_content CLOB NOT NULL, 
	team_post_create_date DATE DEFAULT SYSDATE NOT NULL, /* 팀게시글 생성일자 */
	member_id NUMBER, 
	project_id NUMBER
);

COMMENT ON TABLE team_post IS '팀게시글';

COMMENT ON COLUMN team_post.team_post_id IS '팀게시글 번호';

COMMENT ON COLUMN team_post.team_post_title IS '팀게시글 제목';

COMMENT ON COLUMN team_post.team_post_content IS '팀게시글 내용';

COMMENT ON COLUMN team_post.team_post_create_date IS '팀게시글 생성일자';

COMMENT ON COLUMN team_post.member_id IS '회원번호';

COMMENT ON COLUMN team_post.project_id IS '프로젝트 번호';

CREATE UNIQUE INDEX PK_team_post ON team_post (team_post_id ASC);

ALTER TABLE team_post
	ADD CONSTRAINT PK_team_post PRIMARY KEY (team_post_id);

-- 회원 테이블과의 관계를 나타내는 외래키 제약조건 추가 (만약 회원 테이블이 있을 경우).
 ALTER TABLE team_post
    ADD CONSTRAINT FK_team_post_member
    FOREIGN KEY (member_id) 
    REFERENCES member(member_id);

-- 프로젝트 테이블과의 관계를 나타내는 외래키 제약조건 추가 (만약 프로젝트 테이블이 있을 경우).
 ALTER TABLE team_post
    ADD CONSTRAINT FK_team_post_project
    FOREIGN KEY (project_id) 
    REFERENCES project(project_id);

    
/* 팀 게시글 첨부파일 */   
CREATE SEQUENCE team_post_file_seq START WITH 1 INCREMENT BY 1;
    
CREATE TABLE team_post_file (
	team_post_file_id NUMBER NOT NULL, 
	team_post_file_name VARCHAR2(1000) NOT NULL, 
	team_post_file_path VARCHAR2(1000) NOT NULL,
	team_post_id NUMBER NOT NULL
);

COMMENT ON TABLE team_post_file IS '팀게시글 첨부파일';

COMMENT ON COLUMN team_post_file.team_post_file_id IS '팀게시글 첨부파일 번호';

COMMENT ON COLUMN team_post_file.team_post_file_name IS '팀게시글 첨부파일 이름';

COMMENT ON COLUMN team_post_file.team_post_file_path IS '팀게시글 첨부파일 경로';

COMMENT ON COLUMN team_post_file.team_post_id IS '팀게시글 번호';

CREATE UNIQUE INDEX PK_team_post_file ON team_post_file (team_post_file_id ASC);

ALTER TABLE team_post_file
	ADD CONSTRAINT PK_team_post_file PRIMARY KEY (team_post_file_id);

-- 팀게시글 테이블과의 관계를 나타내는 외래키 제약조건 추가.
ALTER TABLE team_post_file
    ADD CONSTRAINT FK_team_post_file
    FOREIGN KEY (team_post_id) 
    REFERENCES team_post(team_post_id);

    
/*팀 게시글 댓글*/    
CREATE SEQUENCE team_post_comment_seq START WITH 1 INCREMENT BY 1;
    
CREATE TABLE team_post_comment (
	team_post_comment_id NUMBER NOT NULL, 
	team_post_comment_content CLOB NOT NULL, 
	team_post_comment_date DATE DEFAULT SYSDATE NOT NULL, 
	team_post_id NUMBER NOT NULL,
	member_id NUMBER NOT NULL
);

COMMENT ON TABLE team_post_comment IS '팀게시글 댓글';

COMMENT ON COLUMN team_post_comment.team_post_comment_id IS '팀게시글 댓글 번호';

COMMENT ON COLUMN team_post_comment.team_post_comment_content IS '팀게시글 댓글 내용';

COMMENT ON COLUMN team_post_comment.team_post_comment_date IS '팀게시글 댓글 작성일';

COMMENT ON COLUMN team_post_comment.team_post_id IS '팀게시글 번호';

COMMENT ON COLUMN team_post_comment.member_id IS '회원번호';

CREATE UNIQUE INDEX PK_team_post_comment ON team_post_comment (team_post_comment_id ASC);

ALTER TABLE team_post_comment
	ADD CONSTRAINT PK_team_post_comment PRIMARY KEY (team_post_comment_id);

-- 팀게시글 테이블과의 관계를 나타내는 외래키 제약조건 추가.
ALTER TABLE team_post_comment
    ADD CONSTRAINT FK_team_post_comment_post
    FOREIGN KEY (team_post_id) 
    REFERENCES team_post(team_post_id);

-- 회원 테이블과의 관계를 나타내는 외래키 제약조건 추가. (회원 테이블의 DDL이 없으므로 예시만 제공)
ALTER TABLE team_post_comment
    ADD CONSTRAINT FK_team_post_comment_member
    FOREIGN KEY (member_id) 
    REFERENCES member(member_id); -- 'member'는 예시입니다. 실제 회원 테이블 이름에 맞게 수정해야 합니다.
    
    
/* 자유게시판 */   
CREATE SEQUENCE free_board_seq START WITH 1 INCREMENT BY 1;
    
CREATE TABLE free_board (
	free_board_id NUMBER NOT NULL,
	free_board_title VARCHAR2(100) NOT NULL,
	free_board_content CLOB NOT NULL,
	free_board_create DATE DEFAULT SYSDATE NOT NULL,
	free_board_views NUMBER DEFAULT 0 NOT NULL,
	free_board_file_name VARCHAR2(1000),
	member_id NUMBER NOT NULL
);
select * from free_board;

COMMENT ON TABLE free_board IS '자유게시판';

COMMENT ON COLUMN free_board.free_board_id IS '자유게시판 번호';

COMMENT ON COLUMN free_board.free_board_title IS '자유게시판 제목';

COMMENT ON COLUMN free_board.free_board_content IS '자유게시판 내용';

COMMENT ON COLUMN free_board.free_board_create IS '자유게시판 등록일';

COMMENT ON COLUMN free_board.free_board_views IS '자유게시판 조회수';

COMMENT ON COLUMN free_board.free_board_file_name IS '자유게시판 첨부파일';

COMMENT ON COLUMN free_board.member_id IS '회원번호';

CREATE UNIQUE INDEX PK_free_board ON free_board (free_board_id ASC);

ALTER TABLE free_board
	ADD CONSTRAINT PK_free_board PRIMARY KEY (free_board_id);

-- 회원 테이블과의 관계를 나타내는 외래키 제약조건 추가. (회원 테이블의 DDL이 없으므로 예시만 제공)
ALTER TABLE free_board
    ADD CONSTRAINT FK_free_board_member
    FOREIGN KEY (member_id) 
    REFERENCES member(member_id); -- 'member'는 예시입니다. 실제 회원 테이블 이름에 맞게 수정해야 합니다.
    
    
/* 자유게시판 댓글 */
CREATE SEQUENCE free_board_comment_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE free_board_comment (
	free_board_comment_id NUMBER NOT NULL,
	free_board_comment_content CLOB NOT NULL,
	free_board_comment_date DATE DEFAULT SYSDATE NOT NULL,
	member_id NUMBER NOT NULL, 
	free_board_id NUMBER NOT NULL
);


COMMENT ON TABLE free_board_comment IS '자유게시판 댓글';

COMMENT ON COLUMN free_board_comment.free_board_comment_id IS '자유게시판 댓글 번호';

COMMENT ON COLUMN free_board_comment.free_board_comment_content IS '자유게시판 댓글 내용';

COMMENT ON COLUMN free_board_comment.free_board_comment_date IS '자유게시판 댓글 작성일';

COMMENT ON COLUMN free_board_comment.member_id IS '회원번호';

COMMENT ON COLUMN free_board_comment.free_board_id IS '자유게시판 번호';

CREATE UNIQUE INDEX PK_free_board_comment ON free_board_comment (free_board_comment_id ASC);

ALTER TABLE free_board_comment
	ADD CONSTRAINT PK_free_board_comment PRIMARY KEY (free_board_comment_id);

-- 자유게시판과의 관계를 나타내는 외래키 제약조건 추가.
ALTER TABLE free_board_comment
    ADD CONSTRAINT FK_free_board_comment_board
    FOREIGN KEY (free_board_id) 
    REFERENCES free_board(free_board_id);

-- 회원 테이블과의 관계를 나타내는 외래키 제약조건 추가(회원 테이블의 이름이 필요함).
 ALTER TABLE free_board_comment
    ADD CONSTRAINT FK_free_board_comment_member
    FOREIGN KEY (member_id) 
    REFERENCES member(member_id);
