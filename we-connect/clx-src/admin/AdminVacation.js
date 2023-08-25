/************************************************
 * Vaction.js
 * Created at 2023. 8. 9. 오전 10:47:05.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("leaveRequestListSub").send();
	var comboBox = app.lookup("searchTypeCmb");
	comboBox.fieldLabel = "전체";
	comboBox.value = "all";
}

/*
 * "승인" 버튼(approvalBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onApprovalBtnClick2(e) {
	var approvalBtn = e.control;
	var grid = app.lookup("leaveRequestListGrd");
	var checkRowIndices = grid.getCheckRowIndices();
	var submission = app.lookup("leaveRequestApproveSub");
	if (checkRowIndices.length > 0) {
		if (confirm("선택한 연차를 승인 하시겠습니까?")) {
			grid.deleteRow(checkRowIndices);
			submission.send();
		}
	} else {
		alert("승인할 연차를 선택해 주세요");
	}
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onLeaveRequestApproveSubSubmitError2(e) {
	var leaveRequestApproveSub = e.control;
	var error = leaveRequestApproveSub.getMetadata("error");
	app.lookup("leaveRequestListSub").send();
	alert(error);
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLeaveRequestApproveSubSubmitSuccess2(e) {
	var leaveRequestApproveSub = e.control;
	app.lookup("leaveRequestListSub").send();
}

/*
 * "거절" 버튼(refusalBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onRefusalBtnClick(e) {
	var refusalBtn = e.control;
	var grid = app.lookup("leaveRequestListGrd");
	var checkRowIndices = grid.getCheckRowIndices();
	var submission = app.lookup("leaveRequestRejectSub");
	if (checkRowIndices.length > 0) {
		if (confirm("선택한 연차를 거절 하시겠습니까?")) {
			grid.deleteRow(checkRowIndices);
			submission.send();
		}
	} else {
		alert("거절할 연차를 선택해 주세요");
	}
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onLeaveRequestRejectSubSubmitError(e) {
	var leaveRequestRejectSub = e.control;
	var error = leaveRequestRejectSub.getMetadata("error");
	app.lookup("leaveRequestListSub").send();
	alert(error);
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLeaveRequestRejectSubSubmitSuccess(e) {
	var leaveRequestRejectSub = e.control;
	app.lookup("leaveRequestListSub").send();
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchTextIpbSearch(e){
	var searchTextIpb = e.control;
	app.lookup("leaveRequestSearchSub").send();
}