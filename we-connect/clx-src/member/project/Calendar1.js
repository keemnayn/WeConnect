/************************************************
 * Calendar.js
 * Created at 2023. 8. 5. 오후 7:12:25.
 *
 * @author chwec
 ************************************************/
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	app.lookup("projectListSub").send();
}

/*
 * 캘린더에서 date-click 이벤트 발생 시 호출.
 * Calendar의 날짜를 클릭 했을때 발생하는 이벤트.
 */
function onCalendarDateClick(e){
	/** 
	 * @type cpr.controls.Calendar
	 */
	var calendar = e.control;
	
	var initValue = {
		start: e.date,
		end: e.date
	};
	
	// 신규 아이템 등록 팝업
	app.openDialog("CalendarSample/popup/CalendarItemDetail", {
		width: 500,
		height: 300
	}, function(dialog) {
		
		dialog.initValue = initValue;
		
		dialog.addEventListener("close", function(e) {
			var returnValue = dialog.returnValue;
			
			if (returnValue) {
				var start = returnValue["start"];
				var end = returnValue["end"];
				var event = returnValue["event"];
				var description = returnValue["description"];
				
//				var vnRowCnt = app.lookup("dsAnni").getRowCount();
//				app.lookup("dsAnni").insertRowData(vnRowCnt, true, {
//					label: event,
//					value: "newValue_" + event + "_" + vnRowCnt,
//					start: start,
//					end: end,
//					description: description
//				});
				calendar.redraw();
			}
		});
	});
}

