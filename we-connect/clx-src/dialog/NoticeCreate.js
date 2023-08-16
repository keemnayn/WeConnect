/************************************************
 * NoticeCreate.js
 * Created at 2023. 8. 14. 오후 4:51:23.
 *
 * @author Axl Rose
 ************************************************/

/*
 * "등록" 버튼(createBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCreateBtnClick(e) {
	var createBtn = e.control;
	var submission = app.lookup("noticeCreateSub");
	var noticeTitle = app.lookup("noticeTitleIpb").value;
	var noticeContent = app.lookup("noticeContentTxa").value;
	var noticeCategory = app.lookup("noticeCategoryCmb").value;
	if (!noticeTitle || !noticeContent || !noticeCategory) {
		alert("공지사항의 제목, 내용, 분류를 모두 입력해주세요.");
	} else {
		submission.send();
		app.close();
	}
}
/*
 * "취소" 버튼(cancelBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCancelBtnClick(e) {
	var cancelBtn = e.control;
	app.close();
}