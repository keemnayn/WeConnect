/************************************************
 * UserSide.js
 * Created at 2023. 8. 8. 오후 3:30:36.
 *
 * @author chwec
 ************************************************/

/**
 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
 */
exports.getText = function() {
	// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
	return "";
};

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
			vcEmb.redraw();
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
		"appId": "member/MemberMain"
	};
	/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
	cpr.core.App.load("member/MemberMain", function( /*cpr.core.App*/ loadedApp) {
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
	app.lookup("memberIdSub").send();
	app.lookup("memberName").send();
	
}

/*
 * 임베디드 앱에서 load 이벤트 발생 시 호출.
 * 임베디드 앱이 준비되고 그려진 후에 디스패치 되는 이벤트.
 */
function onEa1Load(e) {
	var ea1 = e.control;
	
}

/*
 * "관리자페이지" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	var submission = app.lookup("adminSub");
	submission.send();
}

/*
 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	window.location = "register";
}

/*
 * "로그인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3(e) {
	var button = e.control;
	window.location = "login";
}

/*
 * "로그아웃" 버튼(logoutBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onLogoutBtnClick(e) {
	var logoutBtn = e.control;
	app.lookup("logoutSub").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLogoutSubSubmitSuccess(e) {
	var logoutSub = e.control;
	var submission = app.lookup("logoutSub");
	var redirectUrl = submission.getMetadata("url");
	if (redirectUrl !== null) {
		window.location = redirectUrl;
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onAdminSubSubmitSuccess(e) {
	var adminSub = e.control;
	var submission = app.lookup("adminSub");
	var url = submission.getMetadata("url");
	if (url !== null) {
		window.location = url;
	}
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onAdminSubSubmitError(e) {
	var adminSub = e.control;
	var submission = app.lookup("adminSub");
	var error = submission.getMetadata("error");
	var url = submission.getMetadata("url");
	alert(error);
	if (url != null) {
		window.location = url;
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onMemberNameSubmitSuccess2(e) {
	var memberName = e.control;
	let admin = app.lookup("adminBtn");
	let submission = app.lookup("memberName");
	let xhr = submission.xhr.responseText;
	let data = JSON.parse(xhr);
	let memberInfo = data.memberList[0];
	let managerYn = memberInfo.managerYn;
	if (managerYn != "Y") {
		admin.visible = false;
	}
}