/************************************************
 * adminSuggestions.js
 * Created at 2023. 8. 9. 오전 10:06:52.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("proposalListSub").send();
}

/*
 * "처리" 버튼(updateStatusBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onUpdateStatusBtnClick(e) {
	var updateStatusBtn = e.control;
	var grid = app.lookup("proposalGrd");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length === 1) {
		if (confirm("처리완료 하시겠습니까?")) {
			grid.deleteRow(checkRowIndices);
			app.lookup("updateStatusSub").send();
		}
	} else if (checkRowIndices.length === 0) {
		alert("하나 이상 선택하셔야 합니다.");
	} else {
		alert("처리는 하나씩만 가능합니다.");
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onUpdateStatusSubSubmitSuccess(e) {
	var updateStatusSub = e.control;
	app.lookup("updateStatusSub").send();
	app.lookup("proposalListSub").send();
	app.lookup("proposalGrd").redraw();
}

/*
 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onDeleteBtnClick(e) {
	var deleteBtn = e.control;
	var grid = app.lookup("proposalGrd");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length > 0) {
		if (confirm("선택한 건의사항을 삭제하시겠습니까?")) {
			grid.deleteRow(checkRowIndices);
			app.lookup("deleteProposalSub").send();
		}
	} else {
		alert("건의사항을 선택해주세요");
	}
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onDeleteProposalSubSubmitDone(e) {
	var deleteProposalSub = e.control;
	app.lookup("deleteProposalSub").send();
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchInputSearch(e){
	var searchInput = e.control;
	var submission = app.lookup("searchProposalSub");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSearchProposalSubSubmitSuccess(e){
	var searchProposalSub = e.control;
	app.lookup("proposalGrd").redraw();
}
