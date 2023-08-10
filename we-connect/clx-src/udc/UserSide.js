/************************************************
 * UserSide.js
 * Created at 2023. 8. 8. 오후 3:30:36.
 *
 * @author chwec
 ************************************************/

/**
 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
 */
exports.getText = function(){
	// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
	return "";
};

/*
 * 트리에서 item-click 이벤트 발생 시 호출.
 * 아이템 클릭시 발생하는 이벤트.
 */
function onTre1ItemClick(/* cpr.events.CItemEvent */ e){
	/** 
	 * @type cpr.controls.Tree
	 */
	var tre1 = e.control;
	
	var vsAppId = e.item.row.getValue("appId");
	/*앱 아이디가 없는 경우 리턴합니다.*/
	if(vsAppId == ""){
		return;
	}
	
	var vcEmb = app.lookup("ea1");
	/*초기값 설정*/
	var voInitValue = {
		"value" : e.item.label,
		"appId" : vsAppId
	};
	/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
	cpr.core.App.load(vsAppId, function(/*cpr.core.App*/ loadedApp){
		/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
		if(vcEmb.getEmbeddedAppInstance()){
			vcEmb.getEmbeddedAppInstance().dispose();
		}
		/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
		if(loadedApp){						
			/*초기값을 전달합니다.*/			
			vcEmb.ready(function(/*cpr.controls.EmbeddedApp*/embApp){
				embApp.initValue = voInitValue;
			})
			/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
			vcEmb.app = loadedApp;
		}
	}); 
}


