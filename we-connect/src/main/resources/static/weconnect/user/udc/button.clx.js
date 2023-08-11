/*
 * App URI: user/udc/button
 * Source Location: user/udc/button.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("user/udc/button", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * button.js
			 * Created at 2023. 8. 8. 오후 3:14:14.
			 *
			 * @author Axl Rose
			 ************************************************/

			/**
			 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
			 */
			exports.getText = function(){
				// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
				return "";
			};;
			// End - User Script
			
			// Header
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
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "5px";
			formLayout_1.rightMargin = "5px";
			formLayout_1.bottomMargin = "5px";
			formLayout_1.leftMargin = "5px";
			formLayout_1.horizontalSpacing = "10px";
			formLayout_1.verticalSpacing = "10px";
			formLayout_1.setColumns(["1fr", "1fr", "1fr"]);
			formLayout_1.setRows(["1fr"]);
			container.setLayout(formLayout_1);
			
			// UI Configuration
			var button_1 = new cpr.controls.Button();
			button_1.value = "수정";
			container.addChild(button_1, {
				"colIndex": 0,
				"rowIndex": 0
			});
			
			var button_2 = new cpr.controls.Button();
			button_2.value = "삭제";
			container.addChild(button_2, {
				"colIndex": 1,
				"rowIndex": 0
			});
			
			var button_3 = new cpr.controls.Button();
			button_3.value = "저장";
			container.addChild(button_3, {
				"colIndex": 2,
				"rowIndex": 0
			});
		}
	});
	app.title = "button";
	cpr.core.Platform.INSTANCE.register(app);
})();