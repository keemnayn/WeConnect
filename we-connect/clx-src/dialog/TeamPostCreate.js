/************************************************
 * TeamPostCreate.js
 * Created at 2023. 8. 21. 오후 5:15:52.
 *
 * @author keemn
 ************************************************/

/*
 * "등록" 버튼(insertBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onInsertBtnClick(e) {
	var insertBtn = e.control;
	var submission = app.lookup("teamPostCreateSub");
	var proposalTitle = app.lookup("teamPostTitleIpb").value;
	var proposalContent = app.lookup("teamPostContentIpb").value;
	if (!teamPostTitle || !teamPostContent) {
		alert("팀게시판의 제목과 내용을 모두 입력해주세요.");
	} else {
		submission.send();
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onProposalCreateSubSubmitSuccess(e) {
	var proposalCreateSub = e.control;
	alert("건의사항 게시물 등록 완료");
	app.close();
}

/*
 * "취소" 버튼(btnRevert)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnRevertClick(e){
	var btnRevert = e.control;
	app.close();
}

