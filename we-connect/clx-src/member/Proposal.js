/************************************************
 * Proposal.js
 * Created at 2023. 8. 21. 오전 03:25:21.
 *
 * @author keemnayn
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	app.lookup("proposalListSub").send();
	var comboBox = app.lookup("searchStatusCmb");
	comboBox.fieldLabel="전체";
	comboBox.value="all";
}
