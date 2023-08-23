/************************************************
 * AdminAttendance.js
 * Created at 2023. 8. 9. 오전 11:19:25.
 *
 * @author Axl Rose
 ************************************************/
/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("attendanceListSub").send();
	var comboBox = app.lookup("searchTypeCmb");
	comboBox.fieldLabel = "전체";
	comboBox.value = "all";
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onAttendanceListSubSubmitError(e) {
	var attendanceListSub = e.control;
	var error = attendanceListSub.getMetadata("error");
	var url = attendanceListSub.getMetadata("url");
	alert(error);
	window.location = url;
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchTextIpbSearch(e) {
	var searchTextIpb = e.control;
	app.lookup("searchAttendanceSub").send();
}