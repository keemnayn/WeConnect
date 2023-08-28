/************************************************
 * Calendar.js
 * Created at 2019. 5. 21. 오후 3:05:45.
 *
 * @author jykim
 ************************************************/



/*
 * "일정 추가" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var button = e.control;
	var calendar = app.lookup("calendar");
	var dti = app.lookup("dti");
	var name = app.lookup("name");
	calendar.addAnniversary({date:dti.value, label:name.value});

	app.lookup("ds_calendar").addRowData({"date":dti.value, "name":name.value});
	app.lookup("grd1").redraw();

	dti.value="";
	name.value="";
}


/*
 * "일정 삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var button = e.control;
	var calendar = app.lookup("calendar");
	var rowIdx = app.lookup("grd1").getSelectedRowIndex();
	var anniversary = calendar.getAnniversary()[rowIdx];
	
	calendar.removeAnniversary(anniversary);
	app.lookup("grd1").deleteRow(rowIdx);
}
