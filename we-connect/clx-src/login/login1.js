/************************************************
 * Untitled.js
 * Created at 2023. 8. 7. 오전 10:08:50.
 *
 * @author kjh970605
 ************************************************/

/*
 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	window.location.href = "register/register1.clx";
}

/*
 * "로그인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	let submission = app.lookup("login");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLoginSubmitSuccess(e){
	var login = e.control;
		/** 
	 * @type cpr.protocols.Submission
	 */
	let submission = app.lookup("login");
	let member = app.lookup("member");
	let email = member.getValue("memberEmail");
	let password = member.getValue("memberPassword");
	let metadata = submission.getMetadata("url");
	let login1 = submission.getMetadata("login");
	
	// 먼저 비밀번호 입력 유효성 검사
	if ((password == null || password.trim() === "") || (email == null || email.trim() === "")) {
		alert("아이디와 비밀번호는 필수 항목입니다!");
	} else if (login1 == null) {
		alert("아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요");
	} else {
		alert("로그인 성공"); 
		if (metadata != null) {
			cpr.core.App.load(metadata, function(newApp) {
				app.close();
				let newInst = newApp.createNewInstance();
				newInst.run();
			});
			return;
		}
	}
}
