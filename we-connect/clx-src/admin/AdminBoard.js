/************************************************
 * adminBoard.js
 * Created at 2023. 8. 9. 오전 9:45:56.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("freeBoardListSub").send();
	var comboBox = app.lookup("searchTypeCmb");
	comboBox.fieldLabel = "전체";
	comboBox.value = "all";
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchTextIpbSearch(e) {
	var searchTextIpb = e.control;
	app.lookup("searchFreeBoardSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSearchFreeBoardSubSubmitSuccess(e) {
	var searchFreeBoardSub = e.control;
	app.lookup("freeBoardListGrd").redraw();
}

/*
 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onDeleteBtnClick(e) {
	var deleteBtn = e.control;
	var grid = app.lookup("freeBoardListGrd");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length > 0) {
		if (confirm("선택한 게시물을 삭제 하시겠 습니까?")) {
			grid.deleteRow(checkRowIndices);
			app.lookup("deleteFreeBoardSub").send();
		}
	} else {
		alert("삭제할 게시물을 선택해주세요");
	}
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onDeleteFreeBoardSubSubmitDone(e) {
	var deleteFreeBoardSub = e.control;
	app.lookup("freeBoardListSub").send();
}