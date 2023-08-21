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
function onBodyInit(e) {
	app.lookup("proposalListSub").send();
}

/*
 * "새글" 버튼(createBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCreateBtnClick(e) {
	var createBtn = e.control;
	var grid = app.lookup("proposalGrd");
	app.openDialog("dialog/ProposalCreate", {
		width: 1280,
		height: 720
	}, function(dialog) {
		dialog.addEventListener("close", function(e) {
			app.lookup("proposalListSub").send();
		});
	});
}

/*
 * 그리드에서 dblclick 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 더블 클릭할 때 발생하는 이벤트.
 */
function onProposalGrdDblclick(e) {
	var proposalGrd = e.control;
	
}