/************************************************
 * adminMember.js
 * Created at 2023. 8. 9. 오전 9:55:22.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("memberListSub").send();
	app.lookup("pendingListSub").send();
	var comboBox = app.lookup("searchTypeCmb1");
	comboBox.fieldLabel = "전체";
	comboBox.value = "all";
	var comboBox2 = app.lookup("searchTypeCmb2");
	comboBox2.fieldLabel = "전체";
	comboBox2.value = "all";
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchTextIpb1Search(e) {
	var searchTextIpb1 = e.control;
	var submission = app.lookup("searchMemberSub");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSearchMemberSubSubmitSuccess(e) {
	var searchMemberSub = e.control;
	app.lookup("memberListGrd1").redraw();
}

/*
 * "수정" 버튼(updateBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onUpdateBtnClick(e) {
	var updateBtn = e.control;
	var grid = app.lookup("memberListGrd1");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length == 1) {
		var memberId = grid.dataSet.getValue(checkRowIndices[0], "memberId");
		var memberName = grid.dataSet.getValue(checkRowIndices[0], "memberName");
		var position = grid.dataSet.getValue(checkRowIndices[0], "position");
		var departmentId = grid.dataSet.getValue(checkRowIndices[0], "departmentId");
		var departmentName = grid.dataSet.getValue(checkRowIndices[0], "departmentName");
		var value = {
			"memberId": memberId,
			"memberName": memberName,
			"position": position,
			"departmentId": departmentId,
			"departmentName": departmentName
		}
		console.log(value);
		app.openDialog("dialog/MemberUpdate", {
			width: 640,
			height: 480
		}, function(dialog) {
			dialog.ready(function(dialogApp) {
				dialogApp.initValue = value;
			});
			dialog.addEventListener("close", function(e) {
				app.lookup("memberListSub").send();
			});
		});
	} else if (checkRowIndices.length > 1) {
		alert("한명의 회원만 선택 주세요");
		grid.clearAllCheck();
	} else {
		alert("수정할 회원을 선택해 주세요");
	}
}

/*
 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onDeleteBtnClick(e) {
	var deleteBtn = e.control;
	var grid = app.lookup("memberListGrd1");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length > 0) {
		if (confirm("선택한 회원을 삭제 하시겠 습니까?")) {
			grid.deleteRow(checkRowIndices);
			app.lookup("deleteMemberSub").send();
		}
	} else {
		alert("삭제할 회원을 선택해주세요");
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onDeleteMemberSubSubmitSuccess(e) {
	var deleteMemberSub = e.control;
	app.lookup("memberListSub").send();
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchTextIpb2Search(e) {
	var searchTextIpb2 = e.control;
	var submission = app.lookup("pendingSearchSub");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onPendingSearchSubSubmitSuccess(e) {
	var pendingSearchSub = e.control;
	app.lookup("memberListGrd2").redraw();
}

/*
 * "승인" 버튼(approvalBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onApprovalBtnClick(e) {
	var approvalBtn = e.control;
	var grid = app.lookup("memberListGrd2");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length > 0) {
		if (confirm("선택한 회원가입을 승인 하시겠습니까?")) {
			grid.deleteRow(checkRowIndices);
			app.lookup("pendingApproveSub").send();
		}
	} else {
		alert("승인할 회원을 선택해주세요");
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onPendingApproveSubSubmitSuccess(e) {
	var pendingApproveSub = e.control;
	app.lookup("pendingListSub").send();
	app.lookup("memberListSub").send();
}

/*
 * "거절" 버튼(refusalBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onRefusalBtnClick(e) {
	var refusalBtn = e.control;
	var grid = app.lookup("memberListGrd2");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length > 0) {
		if (confirm("선택한 회원가입을 거절 하시겠습니까?")) {
			grid.deleteRow(checkRowIndices);
			app.lookup("pendingRejectSub").send();
		}
	} else {
		alert("거절할 회원을 선택해주세요");
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onPendingRejectSubSubmitSuccess(e) {
	var pendingRejectSub = e.control;
	app.lookup("pendingListSub").send();
}