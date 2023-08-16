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
function onBodyInit(e){
	app.lookup("boardListSub").send();
}

/*
 * "새글" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
//	window.location = "boardWriteFrom.do";
	app.openDialog("dialog/BoardWriteForm", {width : 800, height : 600}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		});
	}).then(function(returnValue){
		
	});
}
