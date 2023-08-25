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
	app.lookup("registerSub").send();
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	let department = app.lookup("deparment");
	department.send();
}

/*
 * "취소" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	if (confirm("작성을 취소하시겠습니까?")) {
		window.location.href = "login";
	}
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onRegisterSubSubmitError(e) {
	var registerSub = e.control;
	alert("모든 정보를 입력해 주세요");
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onRegisterSubSubmitSuccess(e) {
	var registerSub = e.control;
	alert("회원가입 완료");
	window.location.href = "login";
}

/*
 * "중복확인" 버튼(duplicateBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onDuplicateBtnClick(e) {
	var duplicateBtn = e.control;
	app.lookup("checkEmailSub").send();
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onCheckEmailSubSubmitDone(e) {
	var checkEmailSub = e.control;
	var success = checkEmailSub.getMetadata("success");
	var message = checkEmailSub.getMetadata("message");
	alert(message);
	var memberEmailIpb = app.lookup("memberEmailIpb");
	
	if (!success) {
		memberEmailIpb.focus();
		memberEmailIpb.addEventListener("blur", forceFocus);
	} else {
		memberEmailIpb.removeEventListener("blur", forceFocus);
	}
}

// blur 이벤트 리스너 함수
function forceFocus() {
	var memberEmailIpb = app.lookup("memberEmailIpb");
	setTimeout(() => {
		memberEmailIpb.focus();
	}, 1);
}

/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onMemberEmailIpbBlur(e) {
	var memberEmailIpb = e.control;
	var emailValue = memberEmailIpb.value;
	var emailValidationOpb = app.lookup("emailValidationOpb");
	
	// 이메일 유효성 검사를 위한 정규 표현식
	var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	
	if (!emailRegex.test(emailValue)) {
		emailValidationOpb.value = "유효하지 않은 이메일 형식입니다.";
		emailValidationOpb.style.css("color", "red");
		// 이메일 입력 박스에 포커스
		memberEmailIpb.focus();
	} else {
		// 정상 메시지를 표시
		emailValidationOpb.value = "정상적인 이메일 형식입니다.";
		emailValidationOpb.style.css("color", "blue");
	}
}

/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onMemberNameBlur(e) {
	var memberName = e.control;
	var nameValue = memberName.value;
	var nameValidationOpb = app.lookup("nameValidationOpb"); // 이름 유효성 검사 결과를 표시하는 컨트롤
	
	var nameRegex = /^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/;
	
	if (!nameRegex.test(nameValue)) {
		nameValidationOpb.value = "한글만 입력 가능합니다.";
		nameValidationOpb.style.css("color", "red");
		// 이름 입력 박스에 포커스
		memberName.focus();
	} else {
		// 정상 메시지를 표시
		nameValidationOpb.value = "정상적인 이름 형식입니다.";
		nameValidationOpb.style.css("color", "blue");
	}
}

/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onPasswordIpbBlur(e) {
	var passwordIpb = e.control;
	var passwordValue = passwordIpb.value;
	var passwordValidationOpb = app.lookup("passwordValidationOpb");
	
	var passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
	
	if (!passwordRegex.test(passwordValue)) {
		passwordValidationOpb.value = "비밀번호는 8자리 이상이며, 최소 1개의 특수문자를 포함해야 합니다.";
		// 비밀번호 입력 박스에 포커스
		passwordValidationOpb.style.css("color", "red");
		passwordIpb.focus();
	} else {
		// 정상 메시지를 표시
		passwordValidationOpb.value = "정상적인 비밀번호 형식입니다.";
		passwordValidationOpb.style.css("color", "blue");
	}
}

/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onCheckPasswordIpbBlur(e) {
	var checkPasswordIpb = e.control;
	var passwordCheckValidationOpb = app.lookup("passwordCheckValidationOpb");
	
	// 처음 입력한 비밀번호 필드 값을 가져옵니다.
	var passwordIpb = app.lookup("passwordIpb");
	var originalPassword = passwordIpb.value;
	
	var passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
	
	if (!passwordRegex.test(checkPasswordIpb.value)) {
		passwordCheckValidationOpb.value = "비밀번호는 8자리 이상이며, 최소 1개의 특수문자를 포함해야 합니다.";
		passwordCheckValidationOpb.style.css("color", "red");
		checkPasswordIpb.focus();
		return;
	}
	
	if (originalPassword !== checkPasswordIpb.value) {
		passwordCheckValidationOpb.value = "비밀번호가 일치하지 않습니다.";
		passwordCheckValidationOpb.style.css("color", "red");
		checkPasswordIpb.clear();
		checkPasswordIpb.focus();
	} else {
		passwordCheckValidationOpb.value = "비밀번호가 일치합니다.";
		passwordCheckValidationOpb.style.css("color", "blue");
	}
}