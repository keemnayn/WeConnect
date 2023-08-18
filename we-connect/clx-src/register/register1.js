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
function onButtonClick(e) {
	var button = e.control;
	let submission = app.lookup("memberList");
	submission.send();
	window.location = "login/login1.clx";
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit2(e) {
	let department = app.lookup("deparment");
	department.send();
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onMemberListSubmitError(e) {
	var memberList = e.control;
	alert("회원가입 실패");
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onMemberListSubmitSuccess(e) {
	var memberList = e.control;
	alert("회원가입 완료");
}

/*
 * "취소" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
    let result = confirm("작성을 취소하시겠습니까?");
    if (result) {
        window.location.href = "login/login1.clx"; 
    }
}

/*
 * "중복 확인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3(e) {
	var button = e.control;
	let submission = app.lookup("check");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onCheckSubmitSuccess(e) {
	var check = e.control;
	let emailCheck = app.lookup("check");
	let email = emailCheck.getMetadata("email");
	let memberEmail = app.lookup("memberEmail");
	
	// 입력값이 비어있는지 확인
	if (memberEmail.value.trim() === "") {
		alert("이메일을 입력하세요");
		return; // 사용자가 이메일을 입력할 때까지 다음 코드를 실행하지 않음
	}
	
	// 이메일 중복 확인
	if (email !== null) {
		alert("중복된 이메일입니다.");
	} else {
		alert("사용가능한 이메일입니다.");
	}
}