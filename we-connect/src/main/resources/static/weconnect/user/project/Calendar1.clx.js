/*
 * App URI: user/project/Calendar1
 * Source Location: user/project/Calendar1.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("user/project/Calendar1", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Calendar.js
			 * Created at 2023. 8. 5. 오후 7:12:25.
			 *
			 * @author chwec
			 ************************************************/;
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1024px)", "default");
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
			var calendar_1 = new cpr.controls.Calendar();
			container.addChild(calendar_1, {
				"top": "20px",
				"left": "20px",
				"width": "819px",
				"height": "472px"
			});
			
			var textArea_1 = new cpr.controls.TextArea("txa3");
			textArea_1.value = "프로젝트 생성시 날짜 데이터 입력 받는대로 캘린더에 나타남";
			container.addChild(textArea_1, {
				"top": "485px",
				"left": "78px",
				"width": "395px",
				"height": "22px"
			});
		}
	});
	app.title = "Calendar1";
	cpr.core.Platform.INSTANCE.register(app);
})();