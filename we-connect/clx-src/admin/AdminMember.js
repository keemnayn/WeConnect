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
	var comboBox = app.lookup("searchTypeCmb1");
	comboBox.fieldLabel = "전체";
	comboBox.value = "all";
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