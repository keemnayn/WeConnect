/************************************************
 * newMain.js
 * Created at 2023. 8. 8. 오후 11:40:21.
 *
 * @author kjh970605
 ************************************************/
let intervalID; 

function clock() {
	const clockTarget = app.lookup("user_clock");
	console.log(clockTarget);
	const user_day = app.lookup("day");
	const date = new Date();
	const hours = date.getHours();
	const month = date.getMonth();
	const clockDate = date.getDate();
	const day = date.getDay();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const week = ['일', '월', '화', '수', '목', '금', '토'];
	clockTarget.value = `${hours}시 ${minutes}분 ${seconds}초`
	user_day.value = `${month+1}월 ${clockDate}일 ${week[day]}요일`
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
	back.redraw();
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad2(e){
	 clock();
	 intervalID = setInterval(clock, 1000);
}

/*
 * 루트 컨테이너에서 before-unload 이벤트 발생 시 호출.
 * 앱이 언로드되기 전에 발생하는 이벤트 입니다. 취소할 수 있습니다.
 */
function onBodyBeforeUnload(e){
	clearInterval(intervalID);
}
