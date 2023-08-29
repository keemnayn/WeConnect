/************************************************
 * TeamPostCreate.js
 * Created at 2023. 8. 27. 오후 5:15:52.
 *
 * @author keemn
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	var hostProperty = app.getHostProperty("initValue");
	var teamPostId = hostProperty["teamPostId"];
	var teamPostTitle = hostProperty["teamPostTitle"];
	var teamPostContent = hostProperty["teamPostContent"];
//	var projectId = hostProperty["projectId"];
	app.lookup("teamPostTitleIpb").value = teamPostTitle;
	app.lookup("teamPostContentIpb").value = teamPostContent;
//	app.lookup("teamPostIdOpb").value = teamPostId;
}

/*
 * "수정" 버튼(updateBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onUpdateBtnClick(e) {
	var updateBtn = e.control;
	var submission = app.lookup("teamPostUpdateSub");
	var teamPostTitle = app.lookup("teamPostTitleIpb").value;
	var teamPostContent = app.lookup("teamPostContentIpb").value;
	if (!teamPostTitle || !teamPostContent) {
		alert("팀게시글의 제목과 내용을 모두 입력해주세요.");
	} else {
		submission.send();
	}
}


/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onTeamPostUpdateSubSubmitSuccess(e){
	var teamPostUpdateSub = e.control;
	alert("팀 포스트 수정 완료");
	app.close();
}


/*
 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onDeleteBtnClick(e) {
	var deleteBtn = e.control;
	app.lookup("teamPostDeleteSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onTeamPostDeleteSubSubmitSuccess(e){
	var teamPostDeleteSub = e.control;
		if (!confirm("해당 글을 삭제하시겠습니까? 한 번 삭제된 글은 복구할 수 없습니다.")) {
		// 취소(아니오) 버튼 클릭 시 이벤트
		alert("취소를 누르셨습니다");
	} else {
		alert("팀게시글 삭제 완료");
		app.close();
	}
}
