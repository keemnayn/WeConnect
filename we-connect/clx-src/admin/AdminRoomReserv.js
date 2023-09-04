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
function onBodyInit(e) {
	app.lookup("reservListSub").send();
	app.lookup("roomListSub").send();
}

/*
 * "등록" 버튼(addRoomBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onAddRoomBtnClick2(e) {
	var addRoomBtn = e.control;
	var button = e.control;
	app.openDialog("dialog/RoomCreate", {
		width: 550,
		height: 350
	}, function(dialog) {
		dialog.addEventListener("close", function(e) {
			app.lookup("roomListSub").send();
		});
	});
}

/*
 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onDeleteBtnClick(e) {
	var deleteBtn = e.control;
	var grid = app.lookup("roomGrd");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length > 0) {
		if (confirm("선택한 회의실을 삭제 하시겠습니까?")) {
			grid.deleteRow(checkRowIndices);
			app.lookup("deleteRoomSub").send();
		}
	} else {
		alert("회의실을 선택해주세요");
	}
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onDeleteRoomSubSubmitDone(e) {
	var deleteRoomSub = e.control;
	app.lookup("roomListSub").send();
	app.lookup("reservListSub").send();
}