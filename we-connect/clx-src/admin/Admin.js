/************************************************
 * Embedded.js
 * Created at 2023. 8. 9. 오전 9:31:11.
 *
 * @author Axl Rose
 ************************************************/

/*
 * 트리에서 item-click 이벤트 발생 시 호출.
 * 아이템 클릭시 발생하는 이벤트.
 */
function onTre1ItemClick( /* cpr.events.CItemEvent */ e) {
	/** 
	 * @type cpr.controls.Tree
	 */
	var tre1 = e.control;
	
	var vsAppId = e.item.row.getValue("appId");
	
	/*앱 아이디가 없는 경우 리턴합니다.*/
	if (vsAppId == "") {
		return;
	}
	
	var vcEmb = app.lookup("ea1");
	/*초기값 설정*/
	var voInitValue = {
		"value": e.item.label,
		"appId": vsAppId
	};
	/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
	cpr.core.App.load(vsAppId, function( /*cpr.core.App*/ loadedApp) {
		/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
		if (vcEmb.getEmbeddedAppInstance()) {
			vcEmb.getEmbeddedAppInstance().dispose();
		}
		/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
		if (loadedApp) {
			/*초기값을 전달합니다.*/
			vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
				embApp.initValue = voInitValue;
			})
			/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
			vcEmb.app = loadedApp;
		}
	});
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	var vcEmb = app.lookup("ea1");
	/*초기값 설정*/
	var voInitValue = {
		"value": "홈",
		"appId": "admin/AdminMain"
	};
	/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
	cpr.core.App.load("admin/AdminMain", function( /*cpr.core.App*/ loadedApp) {
		/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
		if (vcEmb.getEmbeddedAppInstance()) {
			vcEmb.getEmbeddedAppInstance().dispose();
		}
		/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
		if (loadedApp) {
			/*초기값을 전달합니다.*/
			vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
				embApp.initValue = voInitValue;
			})
			/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
			vcEmb.app = loadedApp;
		}
	});
	app.lookup("memberNameSub").send();
	
}

function clock() {
	const clock = app.lookup("clock1");
	const date = new Date();
	const hours = date.getHours();
	const month = date.getMonth();
	const clockDate = date.getDate();
	const day = date.getDay();
	const minutes = date.getMinutes();
	const week = ['일', '월', '화', '수', '목', '금', '토'];
	clock.value = `${month+1}월 ${clockDate}일 ${week[day]}요일 ${hours}시 ${minutes}분`
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	clock();
	setInterval(clock, 1000);
}

/*
 * 트리에서 selection-change 이벤트 발생 시 호출.
 * 선택된 Item 값이 저장된 후에 발생하는 이벤트.
 */
function onTre1SelectionChange(e) {
	var tre1 = e.control;
	
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onMemberNameSubSubmitDone2(e) {
	var memberNameSub = e.control;
	app.lookup("memberNameOpb").redraw();
}