/************************************************
 * Vaction.js
 * Created at 2023. 8. 9. 오전 10:47:05.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	let submission = app.lookup("LeaveRequest2");
	submission.send();
}
 
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLeaveRequest2SubmitSuccess(e){
	var leaveRequest2 = e.control;
	app.lookup("grd1").redraw();
}
