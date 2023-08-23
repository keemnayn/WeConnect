/*
 * App URI: admin/Admin
 * Source Location: admin/Admin.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("admin/Admin", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
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
			function onBodyInit(e){
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
			        clock.value= `${month+1}월 ${clockDate}일 ${week[day]}요일 ${hours}시 ${minutes}분`
			}

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				clock();
				setInterval(clock, 1000);
			}

			/*
			 * 트리에서 selection-change 이벤트 발생 시 호출.
			 * 선택된 Item 값이 저장된 후에 발생하는 이벤트.
			 */
			function onTre1SelectionChange(e){
				var tre1 = e.control;
				
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("adminMenu");
			dataSet_1.parseData({
				"stateRestore": true,
				"columns": [
					{"name": "label"},
					{"name": "value"},
					{"name": "parent"},
					{"name": "appId"},
					{"name": "icon"}
				],
				"rows": [
					{"label": "홈", "value": "홈", "parent": "", "appId": "admin/AdminMain", "icon": "img/user/home.png"},
					{"label": "회원", "value": "회원", "parent": "", "icon": "img/icon/team.png"},
					{"label": "프로젝트", "value": "프로젝트", "parent": "", "icon": "img/icon/project.png"},
					{"label": "게시판", "value": "게시판", "parent": "", "icon": "img/icon/board.png"},
					{"label": "일정", "value": "일정", "parent": "", "icon": "img/icon/calendar.png", "appId": ""},
					{"label": "회의실", "value": "회의실", "parent": ""},
					{"label": "회원관리", "value": "회원관리", "parent": "회원", "appId": "admin/AdminMember"},
					{"label": "근태관리", "value": "근태관리", "parent": "회원", "appId": "admin/AdminAttendance"},
					{"label": "연차관리", "value": "연차관리", "parent": "회원", "appId": "admin/AdminVacation"},
					{"label": "조직도", "value": "조직도", "parent": "회원", "appId": ""},
					{"label": "공지사항", "value": "공지사항", "parent": "게시판", "appId": "admin/AdminNotice"},
					{"label": "자유게시판", "value": "자유게시판", "parent": "게시판", "appId": "admin/AdminBoard"},
					{"label": "건의사항", "value": "건의사항", "parent": "게시판", "appId": "admin/AdminSuggestions"},
					{"label": "회의실예약현황", "value": "회의실예약현황", "parent": "회의실", "appId": "admin/AdminRoomReserv"},
					{"label": "일정관리", "value": "일정관리", "parent": "일정", "appId": "admin/AdminSchedule", "icon": "img/icon/calendar.png"},
					{"label": "프로젝트관리", "value": "프로젝트관리", "parent": "프로젝트", "appId": "admin/AdminProjectManagement"}
				]
			});
			app.register(dataSet_1);
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var tree_1 = new cpr.controls.Tree("tre1");
			tree_1.style.setClasses(["admin_tree"]);
			tree_1.style.css({
				"background-color" : "#F1EFFF",
				"border-right-style" : "none",
				"border-left-style" : "none",
				"border-bottom-style" : "none",
				"border-top-style" : "none",
				"text-align" : "left"
			});
			(function(tree_1){
				tree_1.setItemSet(app.lookup("adminMenu"), {
					"label": "label",
					"value": "value",
					"icon": "icon",
					"parentValue": "parent"
				});
			})(tree_1);
			if(typeof onTre1ItemClick == "function") {
				tree_1.addEventListener("item-click", onTre1ItemClick);
			}
			if(typeof onTre1SelectionChange == "function") {
				tree_1.addEventListener("selection-change", onTre1SelectionChange);
			}
			container.addChild(tree_1, {
				"top": "50px",
				"bottom": "50px",
				"left": "0px",
				"width": "300px"
			});
			
			var group_1 = new cpr.controls.Container();
			group_1.style.css({
				"background-color" : "#F1EFFF"
			});
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var image_1 = new cpr.controls.Image();
				image_1.style.css({
					"background-image" : "url('img/enjoy.png')"
				});
				container.addChild(image_1, {
					"top": "5px",
					"bottom": "0px",
					"left": "0px",
					"width": "300px"
				});
				var output_1 = new cpr.controls.Output();
				output_1.value = " 관리자님";
				output_1.style.css({
					"font-size" : "15px",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					"top": "10px",
					"right": "0px",
					"bottom": "0px",
					"width": "90px"
				});
				var output_2 = new cpr.controls.Output("clock1");
				output_2.value = "현재시간";
				output_2.style.css({
					"font-size" : "15px",
					"text-align" : "center"
				});
				container.addChild(output_2, {
					"top": "10px",
					"right": "75px",
					"bottom": "0px",
					"width": "186px"
				});
			})(group_1);
			if(typeof onGroupClick == "function") {
				group_1.addEventListener("click", onGroupClick);
			}
			container.addChild(group_1, {
				"top": "0px",
				"right": "0px",
				"left": "0px",
				"height": "50px"
			});
			
			var embeddedApp_1 = new cpr.controls.EmbeddedApp("ea1");
			if(typeof onEa1Init == "function") {
				embeddedApp_1.addEventListener("init", onEa1Init);
			}
			container.addChild(embeddedApp_1, {
				"top": "70px",
				"right": "20px",
				"bottom": "70px",
				"left": "320px"
			});
			
			var group_2 = new cpr.controls.Container();
			group_2.style.css({
				"background-color" : "#F1EFFF"
			});
			var xYLayout_3 = new cpr.controls.layouts.XYLayout();
			group_2.setLayout(xYLayout_3);
			container.addChild(group_2, {
				"right": "0px",
				"bottom": "0px",
				"width": "1920px",
				"height": "50px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "Admin";
	cpr.core.Platform.INSTANCE.register(app);
})();
