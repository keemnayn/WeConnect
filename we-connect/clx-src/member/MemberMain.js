/************************************************
 * newMain.js
 * Created at 2023. 8. 8. 오후 11:40:21.
 *
 * @author kjh970605
 ************************************************/
let intervalID;

function clock() {
	const clockTarget = app.lookup("user_clock");
	const user_day = app.lookup("day");
	const date = new Date();
	const hours = date.getHours();
	const month = date.getMonth();
	const clockDate = date.getDate();
	const day = date.getDay();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const week = ['일', '월', '화', '수', '목', '금', '토'];
	
	const amPm = hours < 12 ? '오전' : '오후';
	const adjustedHours = hours > 12 ? hours - 12 : hours; // 24시간 형식을 12시간 형식으로 변경
	
	clockTarget.value = `${amPm} ${adjustedHours}시 ${minutes}분 ${seconds}초`;
	user_day.value = `${month+1}월 ${clockDate}일 ${week[day]}요일`;
}

/*
 * "출근" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	const go = app.lookup("go");
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
	go.value = `${hours}: ${formattedMinutes}`
	if (confirm("입실처리하시겠습니까")) {
		let submission = app.lookup("Attendance1");
		submission.send();
	}
}

/*
 * "퇴근" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	const back = app.lookup("back");
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
	back.value = `${hours}: ${formattedMinutes}`
	if (confirm("퇴실하시겠습니까?")) {
		let UpdateAttendance = app.lookup("UpdateAttendance");
		UpdateAttendance.send();
	}
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad2(e) {
	clock();
	intervalID = setInterval(clock, 1000);
}

/*
 * 루트 컨테이너에서 before-unload 이벤트 발생 시 호출.
 * 앱이 언로드되기 전에 발생하는 이벤트 입니다. 취소할 수 있습니다.
 */
function onBodyBeforeUnload(e) {
	clearInterval(intervalID);
}
/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onAttendance1SubmitError(e) {
	var attendance1 = e.control;
	var submission = app.lookup("Attendance1");
	let error = submission.getMetadata("error");
	let button = app.lookup("Btn_workIn");
	button.enabled = false;
	alert(error);
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit2(e) {
	var submission = app.lookup("Img");
	submission.send();
	app.lookup("noticeListSub").send();
	app.lookup("boardListSub").send();
	app.lookup("memberName").send()
	
	app.lookup("proposalListSub").send();
	app.lookup("reservListSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onImgSubmitSuccess(e) {
	var img = e.control;
	app.lookup("profile").redraw();
}

/*
 * 파일 인풋에서 value-change 이벤트 발생 시 호출.
 * FileInput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onFi1ValueChange(e) {
	var fi1 = e.control;
	var image = app.lookup("profile");
	var fileInput = app.lookup("fi1");
	let fi2 = fileInput.file
	let submission = app.lookup("imgSend");
	console.log(fi1.file);
	console.log(fi2);
	if (fileInput.files && fileInput.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			image.src = e.target.result;
		};
		reader.readAsDataURL(fileInput.files[0]);
	}
	submission.addFileParameter("profileImagePath", fi2);
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onImgSendSubmitSuccess(e) {
	var imgSend = e.control;
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onImgSendSubmitSuccess2(e) {
	var imgSend = e.control;
	alert("프로필 변경 선공");
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onMemberNameSubmitSuccess(e) {
	var memberName = e.control;
	//서브미션
	let submission = app.lookup("memberName");
	var xhr = submission.xhr.responseText;
	var data = JSON.parse(xhr);
	var member1 = app.lookup("name");
	let memberInfo = data.memberList[0];
	let memberNameValue = memberInfo.memberName; // 변수명 변경
	let position = memberInfo.position;
	let departmentName = memberInfo.departmentName + "팀";
	member1.value = memberNameValue +" "+position + "<br>" + departmentName;
}

/*
 * 그리드에서 dblclick 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 더블 클릭할 때 발생하는 이벤트.
 */
function onGrd3Dblclick(e) {
	var grd3 = e.control;
	window.location = "member/FreeBoard.clx";
}