/************************************************
 * ProposalCreate.js
 * Created at 2023. 8. 21. 오후 5:15:52.
 *
 * @author keemn
 ************************************************/

/*
 * "등록" 버튼(btnInsert)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnInsertClick(e) {
	var btnInsert = e.control;
	var submission = app.lookup("proposalCreateSub");
	var proposalTitle = app.lookup("proposalTitleIpb").value;
	var proposalContent = app.lookup("proposalContentIpb").value;
	if (!proposalTitle || !proposalContent) {
		alert("건의글의 제목과 내용을 모두 입력해주세요.");
	} else if (confirm("건의사항 등록 하시겠습니까?")) {
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
function onBtnRevertClick(e) {
	var btnRevert = e.control;
	if (confirm("게시물 작성 취소 하시겠습니까?")) {
		app.close();
	}
}