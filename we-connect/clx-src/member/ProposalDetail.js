/************************************************
 * ProposalDetail.js
 * Created at 2023. 8. 21. 오후 5:18:05.
 *
 * @author keemn
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("proposalDetailSub").send();
	app.lookup("proposalCommentSub").send();
	
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onProposalDetailSubSubmitSuccess(e) {
	var proposalDetailSub = e.control;
	app.lookup("proposalTitle").redraw();
	app.lookup("proposalContent").redraw();
	app.lookup("proposalCreate").redraw();
	app.lookup("proposalStatus").redraw();
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	app.lookup("proposalDetailSub").send();
	app.lookup("proposalCommentSub").send();
}
