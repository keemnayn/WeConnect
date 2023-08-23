/************************************************
 * writeForm.js
 * Created at 2023. 8. 14. 오후 3:43:26.
 *
 * @author chwec
 ************************************************/

/*
 * "취소" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	app.close(false);
}

/*
 * "등록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	app.lookup("boardSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onBoardSubSubmitSuccess(e){
	var boardSub = e.control;
	alert("게시글 등록 완료");
}
