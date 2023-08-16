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
}

/*
 * 콤보 박스에서 selection-change 이벤트 발생 시 호출.
 * ComboBox Item을 선택하여 선택된 값이 저장된 후에 발생하는 이벤트.
 */
function onCmb2SelectionChange(e){
	var cmb2 = e.control;
	var control = app.lookup("department");
	
}
