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
	alert("작성완료");
}


/*
 * "신청" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	let submission = app.lookup("Leave");
	submission.send();
}

/*
 * "취소" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
		if (confirm("작성을 취소하시겠습니까?")) {
		window.location.href = "/";
	}
}
