/************************************************
 * Untitled.js
 * Created at 2023. 8. 7. 오전 10:51:08.
 *
 * @author Axl Rose
 ************************************************/

/*
 * "저장" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	var calendarItemInsertSub = app.lookup("calendarItemInsertSub");
	var projectName = app.lookup("categoryCmb");
	var projectStrat = app.lookup("dtiFrom");
	var projectEnd = app.lookup("dtiTo");
	calendarItemInsertSub.send();
}

/*
 * "취소" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	app.close();
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	var comboBox = app.lookup("categoryCmb");
	comboBox.fieldLabel = "프로젝트";
	comboBox.value = "프로젝트";
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onCalendarItemInsertSubSubmitSuccess(e){
	var calendarItemInsertSub = e.control;
	app.close();
}
