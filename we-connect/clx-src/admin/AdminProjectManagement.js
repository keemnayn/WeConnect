/************************************************
 * adminProjectManagement.js
 * Created at 2023. 8. 11. 오후 12:37:12.
 *
 * @author kjh970605
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("projectListSub").send();
}