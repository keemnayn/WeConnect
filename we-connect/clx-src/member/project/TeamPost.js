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
function onTeamPostSubSubmitSuccess(e) {
	var teamPostSub = e.control;
	app.lookup("teamPostTitle").redraw();
	app.lookup("teamPostContent").redraw();
	app.lookup("teamPostCreateDate").redraw();
	app.lookup("memberName").redraw();
	app.lookup("projectName").redraw();
	app.lookup("departmentName").redraw();
}

/*
 * 인풋 박스에서 mousedown 이벤트 발생 시 호출.
 * 사용자가 컨트롤 위에 포인터를 위치한 상태로 마우스 버튼을 누를 때 발생하는 이벤트.
 */
function onInsertIpbMousedown(e) {
	var insertIpb = e.control;
	app.openDialog("dialog/TeamPostCreate", {
		width: 400,
		height: 300
	}, function(dialog) {
		dialog.ready(function(dialogApp) {
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		});
	}).then(function(returnValue) {
		;
	});
}