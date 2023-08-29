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
function onBodyLoad(e) {
	app.lookup("proposalDetailSub").send();
	var hostProperty = app.getHostProperty("initValue");
	var proposalId = hostProperty["proposalId"];
	var proposalTitle = hostProperty["proposalTitle"];
	var proposalContent = hostProperty["proposalContent"];
	var proposalStatus = hostProperty["proposalStatus"];
	var PMemberId = hostProperty["PMemberId"];
	console.log(PMemberId);
	var memberId = app.lookup("memberDTO").getValue("memberId");
	console.log(memberId);
	app.lookup("proposalIdOpb").value = proposalId;
	app.lookup("proposalTitleIpb").value = proposalTitle;
	app.lookup("proposalContentIpb").value = proposalContent;
	app.lookup("PMemberIdOpb").value = PMemberId;
	console.log(memberId == PMemberId);
}

/*
 * "수정" 버튼(btnUpdate)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnUpdateClick(e) {
	var btnUpdate = e.control;
	var submission = app.lookup("proposalUpdateSub");
	var proposalTitle = app.lookup("proposalTitleIpb").value;
	var proposalContent = app.lookup("proposalContentIpb").value;
	if (!proposalTitle || !proposalContent) {
		alert("건의글의 제목과 내용을 모두 입력해주세요.");
	} else {
		submission.send();
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onProposalUpdateSubSubmitSuccess(e) {
	var proposalUpdateSub = e.control;
	alert("건의사항 수정 완료");
	app.close();
}

/*
 * "삭제" 버튼(btnDelete)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnDeleteClick(e) {
	var btnDelete = e.control;
	app.lookup("proposalDeleteSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onProposalDeleteSubSubmitSuccess(e) {
	var proposalDeleteSub = e.control;
	if (!confirm("해당 글을 삭제하시겠습니까? 한 번 삭제된 글은 되돌릴 수 없습니다.")) {
		// 취소(아니오) 버튼 클릭 시 이벤트
		alert("취소를 누르셨습니다");
	} else {
		alert("건의사항 삭제 완료");
		app.close();
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onProposalDetailSubSubmitSuccess(e){
	var proposalDetailSub= e.control;
	var memberId = app.lookup("memberDTO").getValue("memberId");
	var hostProperty = app.getHostProperty("initValue");
	var PMemberId = hostProperty["PMemberId"];
	var btnUpdate = app.lookup("btnUpdate");
	var btnDelete = app.lookup("btnDelete");
	console.log(memberId);
		if (memberId == PMemberId) {
		btnUpdate.visible = true;
		btnDelete.visible = true;
	}
}
