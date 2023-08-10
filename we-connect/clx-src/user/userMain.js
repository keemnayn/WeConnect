/************************************************
 * newMain.js
 * Created at 2023. 8. 8. 오후 11:40:21.
 *
 * @author kjh970605
 ************************************************/

function clock() {
		const clockTarget = app.lookup("clock"); 
		const clock = app.lookup("day");
        const date = new Date();
        const hours = date.getHours();
        const month = date.getMonth();
        const clockDate = date.getDate();
        const day = date.getDay();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        clockTarget.value= `${hours}시 ${minutes}분 ${seconds}초`
      	clock.value= `${month+1}월 ${clockDate}일 ${week[day]}요일`
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	clock();
	setInterval(clock, 1000);
}

/*
 * "출근" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
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
function onButtonClick2(e){
	var button = e.control;
	const back = app.lookup("back");
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
	back.value =`${hours}: ${formattedMinutes}`
	back.redraw();
}
