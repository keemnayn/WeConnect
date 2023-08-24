/************************************************
 * Untitled.js
 * Created at 2023. 8. 7. 오전 10:08:50.
 *
 * @author kjh970605
 ************************************************/

/*
 * "회원가입" 버튼(registerBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onRegisterBtnClick(e) {
	var registerBtn = e.control;
	window.location.href = "register";
}

/**
 * "로그인" 버튼(loginBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onLoginBtnClick(e) {
	var memberEmail = app.lookup("memberEmailIpb").value;
	var memberPassword = app.lookup("memberPasswordIpb").value;
	// Check if email and password are either null or empty
	if (isEmptyOrNull(memberEmail) || isEmptyOrNull(memberPassword)) {
		alert("이메일과 비밀번호를 입력해주세요");
		return;
	}
	let submission = app.lookup("loginSub");
	submission.send();
}
// 이메일 비밀번호 공란인지 확인
function isEmptyOrNull(value) {
	return value === null || value.trim() === "";
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLoginSubSubmitSuccess(e) {
	var submission = e.control;
	
	var redirectUrl = submission.getMetadata("url");
	var isSuccessLogin = submission.getMetadata("login");
	
	if (redirectUrl !== null && isSuccessLogin === true) {
		window.location = redirectUrl;
	}
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onLoginSubSubmitError(e) {
	var loginSub = e.control;
	var submission = app.lookup("loginSub");
	var error = submission.getMetadata("error");
	alert(error);
}

/*
 * 인풋 박스에서 keydown 이벤트 발생 시 호출.
 * 사용자가 키를 누를 때 발생하는 이벤트. 키코드 관련 상수는 {@link cpr.events.KeyCode}에서 참조할 수 있습니다.
 */
function onMemberPasswordIpbKeydown(e) {
	var memberPasswordIpb = e.control;
	if (e.keyCode == cpr.events.KeyCode.ENTER) {
		app.lookup("loginBtn").click();
	}
}

/*
 * 인풋 박스에서 focus 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 획득한 후 발생하는 이벤트.
 */
function onMemberPasswordIpbFocus(e) {
	var memberPasswordIpb = e.control;
	memberPasswordIpb.autoSelect = true;
}