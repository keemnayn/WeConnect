/************************************************
 * detail.js
 * Created at 2023. 8. 7. 오전 10:08:05.
 *
 * @author keemn
 ************************************************/

/*'
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("teamPostSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onTeamPostSubSubmitSuccess(e){
	var teamPostSub = e.control;
	app.lookup("memberName").redraw();
	app.lookup("teamPostContent").redraw();
	app.lookup("teamPostTitle").redraw();
	app.lookup("teamPostCreate").redraw();
}
