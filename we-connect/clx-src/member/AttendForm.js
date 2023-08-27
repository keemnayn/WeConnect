/************************************************
 * AttendFrom.js
 * Created at 2023. 8. 9. 오후 12:33:33.
 *
 * @author chwec
 ************************************************/
let intervalID;
/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	let submission = app.lookup("attend1");
	submission.send();
	app.lookup("leaveRequestListSub").send();
	let dataSet = app.lookup("leaveRequestList");
	let position = dataSet.getValue(0, "position");
	let department = dataSet.getValue(0, "departmentName");
	let Name = dataSet.getValue(0, "memberName");
	let dpm = app.lookup("dpm");
	let memberName = app.lookup("name");
	memberName.value = `${Name}${position}`;
	dpm.value = `${department}팀`;
	app.lookup("leaveCount").redraw();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onAttend1SubmitSuccess(e) {
	var attend1 = e.control;
	let grid = app.lookup("grd1");
	grid.redraw();
}

/*
 * 아웃풋에서 value-change 이벤트 발생 시 호출.
 * Output의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onOutputValueChange(e) {
	var output = e.control;
}