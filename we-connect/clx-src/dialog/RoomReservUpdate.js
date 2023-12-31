/************************************************
 * RoomReserv.js
 * Created at 2023. 8. 18. 오전 10:07:32.
 *
 * @author chwec
 ************************************************/

/*
 * "취소" 버튼(cancelBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCancelBtnClick(e) {
	var cancelBtn = e.control;
	app.close(false);
}

/*
 * "예약" 버튼(reservBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onReservBtnClick(e) {
	var reservBtn = e.control;
	app.lookup("roomReservSub").send();
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("roomInfoSub").send();
}

/*
 * 콤보 박스에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onStartCmdClick(e) {
	var startCmd = e.control;
	//	app.lookup("startCmd").getin
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onRoomReservSubSubmitDone(e) {
	var roomReservSub = e.control;
	var success = roomReservSub.getMetadata("success");
	var message = roomReservSub.getMetadata("message");
	if (success) {
		app.close();
	}
	alert(message);
}