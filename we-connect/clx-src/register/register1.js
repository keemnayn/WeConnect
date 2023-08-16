/************************************************
 * register1.js
 * Created at 2023. 8. 7. 오전 11:45:06.
 *
 * @author kjh970605
 ************************************************/

/*
 * "확인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	let submission = app.lookup("memberList");
	submission.send();
	alert("회원가입 완료");
	window.location= "login/login1.clx";
}



/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit2(e){
	let department = app.lookup("deparment");
	department.send();
}
