/************************************************
 * CalendarItemDetail.js
 * Created at 2021. 1. 20. 오후 11:54:18.
 *
 * @author daye
 ************************************************/



/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(/* cpr.events.CEvent */ e){
	
	var initValue = app.getHostProperty("initValue");
	if(initValue) {
		app.lookup("dtiFrom").dateValue = initValue["start"];
		app.lookup("dtiTo").dateValue = initValue["end"];
		
		/** @type cpr.controls.CalendarItem */
		var item = initValue["item"];
		if(item) {
			app.lookup("ipbEvent").value = item.label;
			app.lookup("txaEvent").value = item.row.getValue("description");
		} else {
			app.getHost().headerTitle = "이벤트 등록";
			app.lookup("btnDel").enabled =false;
		}
	}
}


/*
 * "저장" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var button = e.control;
	
	var dmEvent = app.lookup("dmEvent");
	app.close({
		start : dmEvent.getValue("start"),
		end : dmEvent.getValue("end"),
		event : dmEvent.getValue("event"),
		description : dmEvent.getValue("description")
	})
}


/*
 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var button = e.control;
	
	app.close("delete");
}



