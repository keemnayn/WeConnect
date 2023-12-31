/************************************************
 * MyPostList.js
 * Created at 2023. 8. 29. 오전 3:14:14.
 *
 * @author keemn
 ************************************************/

/**
 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
 */
exports.getText = function(){
	// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
	return "";
};

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	app.lookup("title").text = app.getAppProperty("title");
	app.lookup("content").text = app.getAppProperty("content");
	app.lookup("date").text = app.getAppProperty("date");
}
