/************************************************
 * calendar2.js
 * Created at 2023. 8. 7. 오전 9:56:16.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 캘린더에서 date-click 이벤트 발생 시 호출.
 * Calendar의 날짜를 클릭 했을때 발생하는 이벤트.
 */
function onCalendarDateClick(e){
	var calendar = e.control;
	app.openDialog("dialog/Schedule", {width : 800, height : 600}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		});
	}).then(function(returnValue){
		;
	});
}
