/*
 * App URI: user/udc/left
 * Source Location: user/udc/left.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("user/udc/left", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * left.js
			 * Created at 2023. 8. 7. 오후 2:00:42.
			 *
			 * @author Axl Rose
			 ************************************************/

			/**
			 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
			 */
			exports.getText = function() {
				// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
				return "";
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("menu");
			dataSet_1.parseData({
				"columns": [
					{"name": "label"},
					{"name": "value"},
					{"name": "icon"},
					{"name": "parent"}
				],
				"rows": [
					{"label": "근태", "value": "근태", "icon": "icon1", "parent": ""},
					{"label": "일정", "value": "일정", "icon": "icon2", "parent": ""},
					{"label": "예약", "value": "예약", "icon": "icon3", "parent": ""},
					{"label": "게시판", "value": "게시판", "icon": "icon4", "parent": ""},
					{"label": "출/퇴근", "value": "출/퇴근", "icon": "icon5", "parent": "근태"},
					{"label": "연차", "value": "연차", "icon": "icon6", "parent": "근태"},
					{"label": "프로젝트", "value": "프로젝트", "icon": "icon7", "parent": "일정"},
					{"label": "업무보드", "value": "업무보드", "icon": "icon8", "parent": "일정"},
					{"label": "회의실예약", "value": "회의실예약", "icon": "icon9", "parent": "예약"},
					{"label": "자유게시판", "value": "자유게시판", "icon": "icon10", "parent": "게시판"},
					{"label": "공지사항", "value": "공지사항", "icon": "icon11", "parent": "게시판"},
					{"label": "건의사항", "value": "건의사항", "icon": "icon12", "parent": "게시판"}
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
				"top" : "0px",
				"height" : "100%",
				"left" : "0px"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var tree_1 = new cpr.controls.Tree("tre1");
			tree_1.style.css({
				"background-color" : "#E0E0E0"
			});
			(function(tree_1){
				tree_1.setItemSet(app.lookup("menu"), {
					"label": "label",
					"value": "value",
					"icon": "icon",
					"parentValue": "parent"
				});
			})(tree_1);
			container.addChild(tree_1, {
				"bottom": "0px",
				"left": "0px",
				"width": "300px",
				"height": "1030px"
			});
		}
	});
	app.title = "left";
	cpr.core.Platform.INSTANCE.register(app);
})();