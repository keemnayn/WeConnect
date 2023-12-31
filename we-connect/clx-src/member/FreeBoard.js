/************************************************
 * board.js
 * Created at 2023. 8. 8. 오후 3:41:40.
 *
 * @author chwec
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("boardListSub").send();
	var comboBox = app.lookup("searchCmb");
	comboBox.fieldLabel = "전체";
	comboBox.value = "all";
}

/*
 * "새글" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	//	window.location = "boardWriteFrom.do";
	app.openDialog("dialog/BoardWriteForm", {
		width: 1280,
		height: 720
	}, function(dialog) {
		//팝업이 닫히면 리스트를 다시 send해서 reload 해줌.
		dialog.addEventListener("close", function(e) {
			app.lookup("boardListSub").send();
		});
	});
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onBoardParamSubSubmitSuccess(e) {
	var boardParamSub = e.control;
	var submission = app.lookup("boardParamSub");
}

/*
 * 그리드에서 row-dblclick 이벤트 발생 시 호출.
 * detail이 row를 더블클릭 한 경우 발생하는 이벤트.
 */
function onBoardListGrdRowDblclick(e){
	var boardListGrd = e.control;
	var grid = app.lookup("boardListGrd");
	var selectedRowIndices = grid.getSelectedRowIndices();
	if (selectedRowIndices.length == 1) {
		var freeBoardId = grid.dataSet.getValue(selectedRowIndices[0], "freeBoardId");
		var value = {
			"freeBoardId": freeBoardId
		}
	}
	//팝업 열기
	app.openDialog("dialog/BoardDetailPage", {width : 1580, height : 780}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
			dialogApp.initValue = value;
		});
		// 닫기 하면 send 후 reload
		dialog.addEventListener("close", function(e) {
			app.lookup("boardListSub").send();
		});
	});
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchTextIpbSearch(e){
	var searchTextIpb = e.control;
	app.lookup("searchParamSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSearchParamSubSubmitSuccess(e){
	var searchParamSub = e.control;
	app.lookup("boardListGrd").redraw();
}
