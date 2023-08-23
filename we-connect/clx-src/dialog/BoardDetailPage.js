/************************************************
 * BoardDetailPage.js
 * Created at 2023. 8. 22. 오전 10:17:30.
 *
 * @author chwec
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
//	var sessionval = getSessionStorage("memsession");
	var hostProperty = app.getHostProperty("initValue");
	var freeBoardId = hostProperty["freeBoardId"];
	app.lookup("freeBoardId").value = freeBoardId;
	app.lookup("boardDetailSub").send();
	
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onBoardDetailSubSubmitSuccess(e) {
	var boardDetailSub = e.control;
	app.lookup("freeBoardTitle").redraw();
	app.lookup("freeBoardContent").redraw();
	app.lookup("memberName").redraw();
	app.lookup("freeBoardViews").redraw();
	app.lookup("freeBoardCreate").redraw();
}

/*
 * "등록" 버튼(commentBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCommentBtnClick(e) {
	var commentBtn = e.control;
	app.lookup("commentParamSub").send();
	app.lookup("commentIpb").value = "";
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onCommentParamSubSubmitSuccess(e) {
	var commentParamSub = e.control;
	app.lookup("boardDetailSub").send();
	return;
}

/*
 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	var grid = app.lookup("commentGrd");
	var selectedRowIndices = grid.getSelectedRowIndex();
	confirm("댓글을 삭제하시겠습니까?");
	grid.deleteRow(selectedRowIndices);
	app.lookup("deleteCommentSub").send();
	
}

/*
 * 그리드에서 cell-click 이벤트 발생 시 호출.
 * Grid의 Cell 클릭시 발생하는 이벤트.
 */
function onCommentGrdCellClick(e){
	var commentGrd = e.control;
	var grid = app.lookup("commentGrd");
	grid.getSelec
}

/*
 * "수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	
}
