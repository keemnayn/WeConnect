/************************************************
 * HolidayRequestForm.js
 * Created at 2023. 8. 9. 오후 12:06:33.
 *
 * @author chwec
 ************************************************/

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLeaveSubmitSuccess(e) {
	var leave = e.control;
	var typeCmp = app.lookup("typeCmp");
	var startDti = app.lookup("startDti");
	var endDti = app.lookup("endDti");
	var reasonTxa = app.lookup("reasonTxa");
	typeCmp.fieldLabel = "";
	typeCmp.value = "";
	startDti.clear();
	endDti.clear();
	reasonTxa.value = "";
	alert("신청 완료 되었습니다");
}

/*
 * "신청" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	let submission = app.lookup("Leave");
	if (confirm("신청 하시겠습니까?")) {
		submission.send();
	}
}

/*
 * "취소" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	var typeCmp = app.lookup("typeCmp");
	var startDti = app.lookup("startDti");
	var endDti = app.lookup("endDti");
	var reasonTxa = app.lookup("reasonTxa");
	if (confirm("작성을 취소하시겠습니까?")) {
		typeCmp.fieldLabel = "";
		typeCmp.value = "";
		startDti.clear();
		endDti.clear();
		reasonTxa.value = "";
	}
}