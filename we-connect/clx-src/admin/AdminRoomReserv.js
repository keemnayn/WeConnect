/************************************************
 * MeetingRoomReserv.js
 * Created at 2023. 8. 8. 오후 8:11:24.
 *
 * @author chwec
 ************************************************/
/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	app.lookup("reservListSub").send();
}

/*
 * "회의실 등록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	app.openDialog("dialog/RoomCreate", {width : 600, height : 400}, function(dialog){
		dialog.addEventListener("close", function(e) {
			app.lookup("reservListSub").send();
		});
	});
}
