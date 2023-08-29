/************************************************
 * adminMain.js
 * Created at 2023. 8. 9. 오후 2:08:23.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	const maxLength = 13;
	app.lookup("pendingListSub").send();
	app.lookup("noticeListSub").send();
	app.lookup("freeBoardListSub").send();
	app.lookup("scheduleListSub").send();
	app.lookup("reservListSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onScheduleListSubSubmitSuccess(e) {
	var scheduleListSub = e.control;
	var calendar = app.lookup("crd");
	var dsAnnualLeavesList = app.lookup("annualLeavesList");
	var dsProjectScheduleList = app.lookup("projectScheduleList");
	var jsonData = JSON.parse(scheduleListSub.xhr.responseText);
	var annualLeavesList = jsonData.annualLeavesList;
	var projectScheduleList = jsonData.projectScheduleList;
	
	// annualLeavesList 순회
	for (var i = 0; i < annualLeavesList.length; i++) {
		var memberName = annualLeavesList[i].memberName;
		var leaveRequestType = annualLeavesList[i].leaveRequestType;
		var leaveRequestStart = annualLeavesList[i].leaveRequestStart;
		var leaveRequestEnd = annualLeavesList[i].leaveRequestEnd;
		console.log(memberName);
		console.log(leaveRequestType);
		console.log(leaveRequestStart);
		console.log(leaveRequestEnd);
		calendar.addItem(new cpr.controls.CalendarItem(memberName, new Date(leaveRequestStart), new Date(leaveRequestEnd), leaveRequestType));
	}
	// projectScheduleList 순회
	for (var i = 0; i < projectScheduleList.length; i++) {
		var memberName = projectScheduleList[i].memberName;
		var projectName = projectScheduleList[i].projectName;
		var projectStart = projectScheduleList[i].projectStart;
		var projectEnd = projectScheduleList[i].projectEnd;
		console.log(memberName);
		console.log(projectName);
		console.log(projectStart);
		console.log(projectEnd);
		calendar.addItem(new cpr.controls.CalendarItem(memberName, new Date(projectStart), new Date(projectEnd), projectName));
	}
}