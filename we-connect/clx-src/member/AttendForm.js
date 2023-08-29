/************************************************
 * AttendFrom.js
 * Created at 2023. 8. 9. 오후 12:33:33.
 *
 * @author chwec
 ************************************************/
let intervalID;

function clock() {
	const user_day = app.lookup("day");
	const date = new Date();
	const year = date.getFullYear(); // 년도 추가
	const hours = date.getHours();
	const month = date.getMonth();
	const clockDate = date.getDate();
	const day = date.getDay();
	const week = ['일', '월', '화', '수', '목', '금', '토'];
	user_day.value = `${year}년 ${month+1}월 ${clockDate}일 (${week[day]})`;
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	let submission = app.lookup("attend1");
	submission.send();
	app.lookup("leaveRequestListSub").send();
	clock();
	app.lookup("memberName").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onAttend1SubmitSuccess(e) {
	var attend1 = e.control;
	let grid = app.lookup("grd1");
	grid.redraw();
	let submission = app.lookup("attend1");
	let xhr = submission.xhr.responseText;
	let data = JSON.parse(xhr);
	let tardiness = app.lookup("tardiness");
	let work = app.lookup("workInTime");
	let noShow = app.lookup("noShow");
	let attendInfo = data.attend;
	// 지각 카운트 초기화
	let tardinessCount = 0;
	
	// attendInfo 배열 순회
	for (let i = 0; i < attendInfo.length; i++) {
		// attendanceStatus가 '지각'인 경우 카운트 증가
		if (attendInfo[i].attendanceStatus === "지각") {
			tardinessCount++;
		}
	}
	
	// 결과를 표시하거나 사용하는 코드 (예: tardiness 객체에 값을 설정)
	tardiness.value = "지각\n" + tardinessCount;
	
	let workInCount = 0;
	
	for (let i = 0; i < attendInfo.length; i++) {
		if (attendInfo[i].workInTime && attendInfo[i].workInTime !== "00:00") {
			workInCount++;
		}
	}
	work.value = "출근\n" + workInCount;
	
	//결근카운트 
	let absenceCount = 0;
	
	for (let i = 0; i < attendInfo.length; i++) {
		// attendanceStatus가 '지각'인 경우 카운트 증가
		if (attendInfo[i].attendanceStatus === "결근") {
			absenceCount++;
		}
	}
	noShow.value = "결근\n" + absenceCount;
	
}

/*
 * 아웃풋에서 value-change 이벤트 발생 시 호출.
 * Output의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onOutputValueChange(e) {
	var output = e.control;
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onMemberNameSubmitSuccess(e) {
	var memberName = e.control;
	let submission = app.lookup("memberName");
	let xhr = submission.xhr.responseText;
	let data = JSON.parse(xhr);
	let member1 = app.lookup("name");
	let leaveCount =  app.lookup("leave");
	let memberInfo = data.memberList[0];
	let memberNameValue = memberInfo.memberName;
	let position = memberInfo.position;
	let formattedMemberName = memberNameValue + position + "님";
	let memberLeaveCount = memberInfo.leaveCount;
	console.log(memberLeaveCount);
	leaveCount.value = "연차 갯수\n"  + memberLeaveCount;
	member1.value = formattedMemberName;
	
}
