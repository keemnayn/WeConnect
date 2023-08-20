/************************************************
 * RoomReservList.js
 * Created at 2023. 8. 18. 오전 9:55:53.
 *
 * @author chwec
 ************************************************/

/*
 * "예약" 버튼(newReserv)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onNewReservClick(e){
	var newReserv = e.control;
	app.openDialog("dialog/RoomReserv", {width : 640, height : 480}, function(dialog){
		dialog.addEventListener("close", function(e){
			app.lookup("reservListSub").send();
		});
	});
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	app.lookup("reservListSub").send();
}
