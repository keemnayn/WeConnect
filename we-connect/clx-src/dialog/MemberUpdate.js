/************************************************
 * MemberUpdate.js
 * Created at 2023. 8. 18. 오후 2:26:42.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	app.lookup("departmentNameSub").send();
}

/*
 * "수정" 버튼(updateBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onUpdateBtnClick(e) {
	var updateBtn = e.control;
	var updateBtn = e.control;
	var submission = app.lookup("updateMemberSub");
	var memberName = app.lookup("memberNameIpb").value;
	var position = app.lookup("positionCmb").value;
	var departmentName = app.lookup("departmentNameCmb").value;
	if (!memberName || !position || !departmentName) {
		alert("회원의 이름, 직급, 부서를 모두 입력해주세요.");
	} else if (confirm("회원 정보 수정 하시겠습니까?")) {
		submission.send();
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onDepartmentNameSubSubmitSuccess(e) {
	var departmentNameSub = e.control;
	var hostProperty = app.getHostProperty("initValue");
	var memberId = hostProperty["memberId"];
	var memberName = hostProperty["memberName"];
	var position = hostProperty["position"];
	var departmentId = hostProperty["departmentId"];
	var departmentName = hostProperty["departmentName"];
	console.log(departmentName);
	app.lookup("memberIdOutput").value = memberId;
	app.lookup("memberNameIpb").value = memberName;
	app.lookup("positionCmb").value = position;
	var comboBox = app.lookup("departmentNameCmb");
	comboBox.fieldLabel = departmentName;
	comboBox.value = departmentId;
	console.log(departmentId);
}

/*
 * "취소" 버튼(cancelBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCancelBtnClick(e) {
	var cancelBtn = e.control;
	app.close();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onUpdateMemberSubSubmitSuccess(e) {
	var updateMemberSub = e.control;
	app.close();
}