/************************************************
 * FreeBoardDetail.js
 * Created at 2023. 8. 16. 오전 11:52:58.
 *
 * @author chwec
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("boardDetailSub").send();
	app.lookup("boardCommentSub").send();
	
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onBoardDetailSubSubmitSuccess(e) {
	var boardDetailSub = e.control;
	app.lookup("freeBoardTitle").redraw();
	app.lookup("freeBoardContent").redraw();
	app.lookup("freeBoardCreate").redraw();
	app.lookup("freeBoardViews").redraw();
	app.lookup("memberName").redraw();
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	app.lookup("boardDetailSub").send();
	app.lookup("boardCommentSub").send();
}