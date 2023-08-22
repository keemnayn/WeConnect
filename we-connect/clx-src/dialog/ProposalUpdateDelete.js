/************************************************
 * ProposalCreate.js
 * Created at 2023. 8. 22. 오후 11:35:52.
 *
 * @author keemn
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var hostProperty=app.getHostProperty("initValue");
	var proposalId=hostProperty["proposalId"];
	var proposalTitle=hostProperty["proposalTitle"];
	var proposalContent=hostProperty["proposalContent"];
	var proposalStatus=hostProperty["proposalStatus"];
	app.lookup("proposalIdOpb").value=proposalId;
	app.lookup("proposalTitleIpb").value=proposalTitle;
	app.lookup("proposalContentIpb").value=proposalContent;
}

/*
 * "수정" 버튼(btnUpdate)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnUpdateClick(e) {
	var btnUpdate = e.control;
	var submission = app.lookup("proposalUpdateDeleteSub");
	var proposalTitle = app.lookup("proposalTitleIpb").value;
	var proposalContent = app.lookup("proposalContentIpb").value;
	if (!proposalTitle || !proposalContent) {
		alert("건의글의 제목과 내용을 모두 입력해주세요.");
	} else {
		submission.send();
	}
}
