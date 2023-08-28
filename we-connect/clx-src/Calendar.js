/************************************************
 * Calendar.js
 * Created at 2021. 1. 20. 오후 3:39:18.
 *
 * @author daye
 ************************************************/

/************************************************
 * 전역 변수
 ************************************************/

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/************************************************
 * 사용자 정의 함수
 ************************************************/
/**
 * 아웃풋에 현재 날짜를 리턴합니다.
 * 아웃풋 (optMonth) 의 value 에 바인딩 (익스프레션 바인딩)
 */
cpr.expression.ExpressionEngine.INSTANCE.registerFunction("getMonth", function() {
	var cur = app.lookup("calendar").current;
	
	var year = cur.getFullYear();
	var month = monthNames[cur.getMonth()];
	return month + " " + year;
});

/************************************************
 * 컨트롤 이벤트
 ************************************************/
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad( /* cpr.events.CEvent */ e) {
	
	// 아이템 추가
	
	app.lookup("subOnLoad").send();
	
}

/*
 * "◀" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick( /* cpr.events.CMouseEvent */ e) {
	/** 
	 * @type cpr.controls.Button
	 */
	var button = e.control;
	
	// 이전 월 이동
	app.lookup("calendar").prev();
}

/*
 * "▶" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2( /* cpr.events.CMouseEvent */ e) {
	/** 
	 * @type cpr.controls.Button
	 */
	var button = e.control;
	
	// 다음 월 이동
	app.lookup("calendar").next();
}

/*
 * "today" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3( /* cpr.events.CMouseEvent */ e) {
	/** 
	 * @type cpr.controls.Button
	 */
	var button = e.control;
	
	var calendar = app.lookup("calendar");
	
	// 오늘날짜로 이동
	var now = new Date();
	calendar.navigate(now);
}

/*
 * 캘린더에서 navigate 이벤트 발생 시 호출.
 * Calendar의 다음 또는 이전 달력으로 이동 했을때 발생하는 이벤트.
 */
function onCalendarNavigate( /* cpr.events.CDateEvent */ e) {
	/** 
	 * @type cpr.controls.Calendar
	 */
	var calendar = e.control;
	app.lookup("optMonth").redraw();
}

/*
 * 캘린더에서 item-click 이벤트 발생 시 호출.
 * Calendar의 아이템을 클릭 할 때 발생하는 이벤트. relativeTargetName, item을 통해 정보를 얻을 수 있습니다.
 */
function onCalendarItemClick( /* cpr.events.CItemEvent */ e) {
	/** 
	 * @type cpr.controls.Calendar
	 */
	var calendar = e.control;
	
	if (e.relativeTargetName == "item") { // item 일 경우에만 (기념일 x)
		
		var voItem = e.item;
		
		var voInitValue = {
			start: voItem.start,
			end: voItem.end,
			item: voItem
		};
		
		app.openDialog("CalendarSample/popup/CalendarItemDetail", {
			width: 500,
			height: 300
		}, function(dialog) {
			
			dialog.initValue = voInitValue;
			
			dialog.addEventListener("close", function(e) {
				var returnValue = dialog.returnValue;
				
				if (returnValue) {
					if (returnValue == "delete") {
						// 삭제
						var vnRowIndex = voItem.row.getIndex();
						app.lookup("dsAnni").deleteRow(vnRowIndex);
						
					} else {
						// 저장
						var start = returnValue["start"];
						var end = returnValue["end"];
						var event = returnValue["event"];
						var description = returnValue["description"];
						
						voItem.row.setRowData({
							start: start,
							end: end,
							label: event,
							description: description
						})
					}
					
					calendar.redraw();
				}
			});
			
		});
		
	} 
	else if (e.relativeTargetName == "more") {
		
		var date = e.targetObject.date;
		var voCalendarItems = calendar.getItemsByDate(date); //1.0.2210(2020.07.10릴리즈) 부터 사용가능
		var voAnniversaries = calendar.getAnniversariesByDate(date);
		
		var voInitValue = {
			date: moment(date).format("YYYY-MM-DD"),
			item: voCalendarItems,
			anniversary: voAnniversaries
		};
		
		app.openDialog("CalendarSample/popup/CalendarMore", {
			width: 500,
			height: 500
		}, function(dialog) {
			
			dialog.initValue = voInitValue;
			
		});
	}
	
}

/*
 * 캘린더에서 date-click 이벤트 발생 시 호출.
 * Calendar의 날짜를 클릭 했을때 발생하는 이벤트.
 */
function onCalendarDateClick( /* cpr.events.CDateEvent */ e) {
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
				
				var vnRowCnt = app.lookup("dsAnni").getRowCount();
				app.lookup("dsAnni").insertRowData(vnRowCnt, true, {
					label: event,
					value: "newValue_" + event + "_" + vnRowCnt,
					start: start,
					end: end,
					description: description
				});
				calendar.redraw();
			}
		});
		
	});
	
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onSubOnLoadSubmitDone( /* cpr.events.CSubmissionEvent */ e) {
	/** 
	 * @type cpr.protocols.Submission
	 */
	var subOnLoad = e.control;
	if (subOnLoad.isSuccess()) {
		
		var calendar = app.lookup("calendar");
		
		// 기념일 추가 (* 포함 시 매년, 매월 설정 가능)
		// 캘린더의 showAnniversary=true 로 설정
		calendar.addAnniversary({
			date: "*1003",
			label: "개천절",
			className: "calHoliday"
		});
		calendar.addAnniversary({
			date: "*1009",
			label: "한글날",
			className: "calHoliday"
		});
		calendar.addAnniversary({
			date: "*0815",
			label: "광복절",
			className: "calHoliday"
		});
		calendar.addAnniversary({
			date: "*1225",
			label: "크리스마스",
			className: "calHoliday"
		});
		calendar.addAnniversary({
			date: "2021*10",
			label: "토마토기념일",
			className: "calHoliday"
		});
		
		// 캘린더 특정 날짜 비활성
		//			calendar.enabledDateExp = "getDay() != 0 && getDay() != 6"; // 토, 일 비활성
		
		calendar.redraw();
	}
}