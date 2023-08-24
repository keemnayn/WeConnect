/************************************************
 * AttendFrom.js
 * Created at 2023. 8. 9. 오후 12:33:33.
 *
 * @author chwec
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	let submission = app.lookup("attend1");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onAttend1SubmitSuccess(e){
	var attend1 = e.control;
	let grid = app.lookup("grd1");
	grid.redraw();
}
