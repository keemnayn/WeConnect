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