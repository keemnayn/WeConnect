/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	app.lookup("scheduleListSub").send();
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