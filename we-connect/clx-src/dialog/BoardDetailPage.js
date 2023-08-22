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
function onBodyLoad(e){
	var hostProperty = app.getHostProperty("initValue");
	var freeBoardId = hostProperty["freeBoardId"];
	app.lookup("freeBoardId").value = freeBoardId;
	app.lookup("boardDetailSub").send();

}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onBoardDetailSubSubmitSuccess(e){
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
function onCommentBtnClick(e){
	var commentBtn = e.control;
	app.lookup("commentParamSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onCommentParamSubSubmitSuccess(e){
	var commentParamSub = e.control;
	alert("댓글 등록 완료");
	app.close();
}
