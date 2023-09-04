/************************************************
 * notice.js
 * Created at 2023. 8. 5. 오후 7:26:53.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	app.lookup("noticeListSub").send();
	var comboBox = app.lookup("searchTypeCmb");	
	comboBox.fieldLabel = "전체";
	comboBox.value = "all";
	
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchIpbSearch(e){
	var searchIpb = e.control;
	app.lookup("searchNoticeSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSearchNoticeSubSubmitSuccess(e){
	var searchNoticeSub = e.control;
	app.lookup("noticeGrd").redraw();
}
