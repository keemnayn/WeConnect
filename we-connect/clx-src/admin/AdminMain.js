/************************************************
 * adminMain.js
 * Created at 2023. 8. 9. 오후 2:08:23.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	const maxLength = 13;
	app.lookup("pendingListSub").send();
	app.lookup("noticeListSub").send();
	app.lookup("freeBoardListSub").send();
	var noticeListGrd = app.lookup("noticeListGrd");
	if (text.length > maxLength) {
		output.innerText = text.substring(0, maxLength) + '...';
	} else {
		output.innerText = text;
	}
}