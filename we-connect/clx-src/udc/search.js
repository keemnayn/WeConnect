
/*
 * "Search" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(/* cpr.events.CMouseEvent */ e){
	var event = new cpr.events.CUIEvent("search");
	app.dispatchEvent(event);
}
