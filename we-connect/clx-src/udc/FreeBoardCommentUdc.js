/************************************************
 * FreeBoardCommentUbc.js
 * Created at 2023. 8. 24. 오전 10:42:12.
 *
 * @author chwec
 ************************************************/

/**
 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
 */
exports.getText = function() {
	// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
	return "";
};
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	var memberNameOutput = app.lookup("memberName");
	var memberName = app.getAppProperty("memberName");
	memberNameOutput.text = memberName;
	memberNameOutput.redraw();
	
	var freeBoardCommentIdOutput = app.lookup("freeBoardCommentId");
	var freeBoardCommentId = app.getAppProperty("freeBoardCommentId");
	freeBoardCommentIdOutput.text = freeBoardCommentId;
	freeBoardCommentIdOutput.redraw();
	
	var fbcMemberIdOutput = app.lookup("fbcMemberId");
	var fbcMemberId = app.getAppProperty("fbcMemberId");
	fbcMemberIdOutput.text = fbcMemberId;
	fbcMemberIdOutput.redraw();
	
	var freeBoardCommentDateOutput = app.lookup("freeBoardCommentDate");
	var freeBoardCommentDate = app.getAppProperty("freeBoardCommentDate");
	freeBoardCommentDateOutput.text = freeBoardCommentDate;
	freeBoardCommentDateOutput.redraw();
	
	var freeBoardCommentContentIpb = app.lookup("freeBoardCommentContent");
	var freeBoardCommentContent = app.getAppProperty("freeBoardCommentContent");
	freeBoardCommentContentIpb.text = freeBoardCommentContent;
	
	app.lookup("deleteBtn").visible = app.getAppProperty("deleteBtn");
//	app.lookup("updateBtn").visible = app.getAppProperty("updateBtn");
	
}

/*
 * "수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	var event = new cpr.events.CAppEvent("updateClick");
	app.dispatchEvent(event);
}

/*
 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	var event = new cpr.events.CAppEvent("deleteClick");
	app.dispatchEvent(event);
}