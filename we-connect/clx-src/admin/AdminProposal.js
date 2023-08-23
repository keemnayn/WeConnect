/************************************************
 * adminSuggestions.js
 * Created at 2023. 8. 9. 오전 10:06:52.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	app.lookup("proposalListSub").send();
}

/*
 * "처리" 버튼(updateStatusBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onUpdateStatusBtnClick(e){
	var updateStatusBtn = e.control;
	var grid=app.lookup("proposalGrd");
	var checkRowIndices = grid.getCheckRowIndices();
	if (checkRowIndices.length == 1) {
		if(confirm("처리완료 하시겠습니까?")) {
			grid.updateRow(checkRowIndices);
			app.lookup("updateStateSub").send();
		}
	} else {
		alert("처리는 하나의 열만 선택 가능합니다");
	}
}
