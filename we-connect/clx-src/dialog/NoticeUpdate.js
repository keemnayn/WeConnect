/************************************************
 * NoticeUpdate.js
 * Created at 2023. 8. 17. 오후 5:21:59.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	var hostProperty = app.getHostProperty("initValue");
	var noticeId = hostProperty["noticeId"];
	var noticeTitle = hostProperty["noticeTitle"];
	var noticeContent = hostProperty["noticeContent"];
	var noticeCategory = hostProperty["noticeCategory"];
	app.lookup("noticeIdOutput").value = noticeId;
	app.lookup("noticeTitleIpb").value = noticeTitle;
	app.lookup("noticeContentTxa").value = noticeContent;
	app.lookup("noticeCategoryCmb").value = noticeCategory;
}

/*
 * "취소" 버튼(cancelBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCancelBtnClick(e) {
	var cancelBtn = e.control;
	app.close();
}

/*
 * "수정" 버튼(updateBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onUpdateBtnClick(e) {
	var updateBtn = e.control;
	var submission = app.lookup("updateNoticeSub");
	var noticeTitle = app.lookup("noticeTitleIpb").value;
	var noticeContent = app.lookup("noticeContentTxa").value;
	var noticeCategory = app.lookup("noticeCategoryCmb").value;
	if (!noticeTitle || !noticeContent || !noticeCategory) {
		alert("공지사항의 제목, 내용, 분류를 모두 입력해주세요.");
	} else {
		submission.send();
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onUpdateNoticeSubSubmitSuccess(e) {
	var updateNoticeSub = e.control;
	app.close();
}