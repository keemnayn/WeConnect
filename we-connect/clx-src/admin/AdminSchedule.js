/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	/** 
	 * @type cpr.controls.Calendar
	 */
	let calendar = app.lookup("crd");
	let dataSet = app.lookup("project");
	var submission = app.lookup("calrendar");
	submission.send();
	var date = e.targetObject.date;
	var voCalendarItems = calendar.getItemsByDate(dataSet); //1.0.2210(2020.07.10릴리즈) 부터 사용가능
	var voAnniversaries = calendar.getAnniversariesByDate(date);
	
	var voInitValue = {
		date: moment(date).format("YYYY-MM-DD"),
		item: voCalendarItems,
		anniversary: voAnniversaries
	};
	/*
	 * 서브미션에서 submit-progress 이벤트 발생 시 호출.
	 * 서버로 부터 일정 크기의 데이터를 전송받았을 때 발생합니다. 하나의 응답에 대해 여러 번 발생할 수 있습니다.
	 */
	function onCalrendarSubmitProgress(e) {
		var calrendar = e.control;
		alert("성공");
		app.lookup("crd").redraw();
		
	}
}