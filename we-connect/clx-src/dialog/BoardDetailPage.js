/************************************************
 * BoardDetailPage.js
 * Created at 2023. 8. 22. 오전 10:17:30.
 *
 * @author chwec
 ************************************************/
//function get session(key) {
//	var item = sessionStorage.getItem(Key);
//
//}
//
//	
	
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
//	var sessionval = getSessionStorage("memsession");
	var hostProperty = app.getHostProperty("initValue");
	var freeBoardId = hostProperty["freeBoardId"];
	var freeBoardTitle = hostProperty["freeBoardTitle"];
	var memberName = hostProperty["memberName"];
	var freeBoardViews = hostProperty["freeBoardViews"];
	var freeBoardCreate = hostProperty["freeBoardCreate"];
	var freeBoardContent = hostProperty["freeBoardContent"];
	app.lookup("freeBoardId").value = freeBoardId;
	app.lookup("boardTitleIpb").value = freeBoardTitle;
	app.lookup("memberNameIpb").value = memberName;
	app.lookup("boardViewsIpb").value = freeBoardViews;
	app.lookup("boardCreateIpb").value = freeBoardCreate;
	app.lookup("boardContentIpb").value = freeBoardContent;
	app.lookup("boardDetailSub").send();
	
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onBoardDetailSubSubmitSuccess(e) {
	var boardDetailSub = e.control;
	app.lookup("boardTitleIpb").redraw();
	app.lookup("boardCreateIpb").redraw();
	app.lookup("memberNameIpb").redraw();
	app.lookup("boardViewsIpb").redraw();
	app.lookup("boardContentIpb").redraw();
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
 * 그리드에서 cell-click 이벤트 발생 시 호출.
 * Grid의 Cell 클릭시 발생하는 이벤트.
 */
function onCommentGrdCellClick(e){
	var commentGrd = e.control;
	var grid = app.lookup("commentGrd");

}

/*
 * "수정" 버튼(boardUpdateBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBoardUpdateBtnClick(e){
	var boardUpdateBtn = e.control;
	app.lookup("updateBoardSub").send();
}

/*
 * "삭제" 버튼(boardDeleteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBoardDeleteBtnClick(e){
	var boardDeleteBtn = e.control;
	app.lookup("deleteBoardSub").send();
}

/*
 * "댓글 수정" 버튼(commentUpdateBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCommentUpdateBtnClick(e){
	var commentUpdateBtn = e.control;
	
}

/*
 * "댓글 삭제" 버튼(commentDeleteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCommentDeleteBtnClick(e){
	var commentDeleteBtn = e.control;
	var grid = app.lookup("commentGrd");
	var selectedRowIndices = grid.getSelectedRowIndex();
	confirm("댓글을 삭제하시겠습니까?");
	grid.deleteRow(selectedRowIndices);
	app.lookup("deleteCommentSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onDeleteCommentSubSubmitSuccess(e){
	var deleteCommentSub = e.control;
	app.lookup("commentGrd").redraw();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onDeleteBoardSubSubmitSuccess(e){
	var deleteBoardSub = e.control;
	if (!confirm("해당 글을 삭제하시겠습니까?")) {
		// 취소(아니오) 버튼 클릭 시 이벤트
		alert("취소를 누르셨습니다");
	} else {
		alert("게시글 삭제 완료");
		app.close();
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onUpdateBoardSubSubmitSuccess(e){
	var updateBoardSub = e.control;
	if (!confirm("해당 글을 수정하시겠습니까?")) {
		// 취소(아니오) 버튼 클릭 시 이벤트
		alert("취소를 누르셨습니다");
	} else {
		alert("게시글 수정 완료");
		app.close();
	}
}
