/************************************************
 * MeetingRoomReserv.js
 * Created at 2023. 8. 8. 오후 8:11:24.
 *
 * @author chwec
 ************************************************/

/*
 * 캘린더에서 date-click 이벤트 발생 시 호출.
 * Calendar의 날짜를 클릭 했을때 발생하는 이벤트.
 */
function onCalendarDateClick(e) {
	let crd = e.control;
	let calendar = app.lookup("crd");
	//날짜를 클릭한 경우 해당 값이 들어감 
	let value = calendar.value;
	let type = e.type;
	app.openDialog("dialog/Schedule", {
		width: 800,
		height: 600
	}, function(dialog) {
		dialog.ready(function(dialogApp) {
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
			dialogApp.initValue = {
				vsType: type,
				vsDate: value
			}
		});
	}).then(function(returnValue) {
		if (returnValue != null || returnValue != "") {
			//calendar에 새로운 일정이 추가된다.
			calendar.addItem(new cpr.controls.CalendarItem(returnValue.Label, returnValue.STAT_DTHR, returnValue.END_DTHR, returnValue.EXVALUE));
		}
	});
}

/*
 * 캘린더에서 item-click 이벤트 발생 시 호출.
 * Calendar의 아이템을 클릭 할 때 발생하는 이벤트. relativeTargetName, item을 통해 정보를 얻을 수 있습니다.
 */
function onCrdItemClick(e) {
	var crd = e.control;
	var type = e.type;
	var relativeTargetName = e.relativeTargetName;
}