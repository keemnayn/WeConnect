/************************************************
 * adminNotice.js
 * Created at 2023. 8. 9. 오전 10:03:48.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	console.log("notice");
	app.lookup("notices").send();
}