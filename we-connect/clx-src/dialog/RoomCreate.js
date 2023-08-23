/************************************************
 * RoomCreate.js
 * Created at 2023. 8. 23. 오후 7:48:11.
 *
 * @author chwec
 ************************************************/

/*
 * "취소" 버튼(cancelBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCancelBtnClick(e){
	var cancelBtn = e.control;
	app.close();
}

/*
 * "등록" 버튼(reservBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onReservBtnClick(e){
	var reservBtn = e.control;
	app.lookup("roomInfoSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onRoomInfoSubSubmitSuccess(e){
	var roomInfoSub = e.control;
	alert("회의실 등록을 완료 했습니다.");
	app.close();
}
