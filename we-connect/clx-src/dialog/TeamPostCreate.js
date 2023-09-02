/************************************************
 * TeamPostCreate.js
 * Created at 2023. 8. 25. 오후 5:15:52.
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
	var projectId = app.lookup("projectNameCmb").value;
	var teamPostTitle = app.lookup("teamPostTitleIpb").value;
	var teamPostContent = app.lookup("teamPostContentIpb").value;
	if (!projectId || !teamPostTitle || !teamPostContent) {
		alert("참여하는 프로젝트 팀 게시판의 제목과 내용을 모두 입력해주세요.");
	} else {
		submission.send();
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onTeamPostCreateSubSubmitSuccess(e) {
	var teamPostCreateSub = e.control;
	alert("팀게시판 게시물 등록 완료");
	app.close();
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("projectInfoSub").send();
}

/*
 * "취소" 버튼(cancleBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCancleBtnClick(e){
	var cancleBtn = e.control;
	app.close();
}