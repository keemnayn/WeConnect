/************************************************
 * adminNotice.js
 * Created at 2023. 8. 9. 오전 10:03:48.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("noticeListSub").send();
	var comboBox = app.lookup("searchTypeCmb");
	comboBox.fieldLabel = "전체";
	comboBox.value = "all";
}

/*
 * "등록" 버튼(createBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCreateBtnClick(e) {
	var createBtn = e.control;
	var grid = app.lookup("noticeGrd");
	app.openDialog("dialog/NoticeCreate", {
		width: 1280,
		height: 720
	}, function(dialog) {
		dialog.addEventListener("close", function(e) {
			app.lookup("noticeListSub").send();
		});
	});
}
/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchIpbSearch(e) {
	var searchIpb = e.control;
	var submission = app.lookup("searchNoticeSub");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSearchNoticeSubSubmitSuccess(e) {
	var searchNoticeSub = e.control;
	app.lookup("noticeGrd").redraw();
	
}

/*
 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onDeleteBtnClick(e) {
	var deleteBtn = e.control;
	var grid = app.lookup("noticeGrd");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length > 0) {
		if (confirm("선택한 공지사항을 삭제 하시겠 습니까?")) {
			grid.deleteRow(checkRowIndices);
			app.lookup("deleteNoticeSub").send();
		}
	} else {
		alert("공지사항을 선택해주세요");
	}
}
/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onDeleteNoticeSubSubmitDone(e) {
	var deleteNoticeSub = e.control;
	app.lookup("noticeListSub").send();
}

/*
 * "수정" 버튼(updateBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onUpdateBtnClick(e) {
	var updateBtn = e.control;
	var grid = app.lookup("noticeGrd");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length == 1) {
		var noticeId = grid.dataSet.getValue(checkRowIndices[0], "noticeId");
		var noticeTitle = grid.dataSet.getValue(checkRowIndices[0], "noticeTitle");
		var noticeContent = grid.dataSet.getValue(checkRowIndices[0], "noticeContent");
		var noticeCategory = grid.dataSet.getValue(checkRowIndices[0], "noticeCategory");
		var value = {
			"noticeId": noticeId,
			"noticeTitle": noticeTitle,
			"noticeContent": noticeContent,
			"noticeCategory": noticeCategory
		}
		app.openDialog("dialog/NoticeUpdate", {
			width: 1280,
			height: 720
		}, function(dialog) {
			dialog.ready(function(dialogApp) {
				dialogApp.initValue = value;
			});
			dialog.addEventListener("close", function(e) {
				app.lookup("noticeListSub").send();
			});
		});
	} else if (checkRowIndices.length > 1) {
		alert("한개의 공지사항만 선택 주세요");
		grid.clearAllCheck();
	} else {
		alert("수정할 공지사항을 선택해 주세요");
	}
	
}