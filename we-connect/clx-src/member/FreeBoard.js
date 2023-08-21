/************************************************
 * board.js
 * Created at 2023. 8. 8. 오후 3:41:40.
 *
 * @author chwec
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("boardListSub").send();
}

/*
 * "새글" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	//	window.location = "boardWriteFrom.do";
	app.openDialog("dialog/BoardWriteForm", {
		width: 1280,
		height: 720
	}, function(dialog) {
		//팝업이 닫히면 리스트를 다시 send해서 reload 해줌.
		dialog.addEventListener("close", function(e) {
			app.lookup("boardListSub").send();
		});
	});
}

/*
 * 그리드에서 row-dblclick 이벤트 발생 시 호출.
 * detail이 row를 더블클릭 한 경우 발생하는 이벤트.
 */
function onBoardListGrdRowDblclick(e) {
	var boardListGrd = e.control;
	var grid = app.lookup("boardListGrd");
	//	var value = grid.getSelectedRow().getValue("freeBoardId");
	var freeBoardId = grid.getSelectedRow().getValue("freeBoardId");
	console.log(freeBoardId);
	var dataMap = app.lookup("boardParam");
	dataMap.setValue("freeBoardId", freeBoardId);
	var submission = app.lookup("boardParamSub");
	submission.send();
}

///*
// * 그리드에서 cell-click 이벤트 발생 시 호출.
// * Grid의 Cell 클릭시 발생하는 이벤트.
// */
//function onBoardListGrdCellClick(e){
//	var boardListGrd = e.control;
//	var boardId = boardListGrd.getSelectedRow().getValue("boardId");
//	location.href = "weconnect/member/boards/" + boardId;
//}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onBoardParamSubSubmitSuccess(e) {
	var boardParamSub = e.control;
	var submission = app.lookup("boardParamSub");
	var url = submission.getMetadata("url");
	if (url != null) {
		window.location = url;
	}
}