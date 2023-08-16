/************************************************
 * adminNotice.js
 * Created at 2023. 8. 9. 오전 10:03:48.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("noticeListSub").send();
}

/*
 * "등록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	app.openDialog("dialog/NoticeCreate", {
		width: 1280,
		height: 720
	}, function(dialog) {}).then(function(returnValue) {});
}