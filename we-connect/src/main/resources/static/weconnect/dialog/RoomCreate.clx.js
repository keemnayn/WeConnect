/*
 * App URI: dialog/RoomCreate
 * Source Location: dialog/RoomCreate.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("dialog/RoomCreate", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * RoomCreate.js
			 * Created at 2023. 8. 23. 오후 7:48:11.
			 *
			 * @author chwec
			 ************************************************/;
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1920px)", "Project");
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
			var button_1 = new cpr.controls.Button("reservBtn");
			button_1.value = "등록";
			container.addChild(button_1, {
				"right": "350px",
				"bottom": "40px",
				"left": "100px",
				"height": "50px"
			});
			
			var button_2 = new cpr.controls.Button("cancelBtn");
			button_2.value = "취소";
			container.addChild(button_2, {
				"right": "100px",
				"bottom": "40px",
				"left": "350px",
				"height": "50px"
			});
			
			var output_1 = new cpr.controls.Output();
			output_1.value = "회의실 등록";
			container.addChild(output_1, {
				"top": "10px",
				"right": "430px",
				"left": "10px",
				"height": "50px"
			});
			
			var inputBox_1 = new cpr.controls.InputBox("ipb1");
			container.addChild(inputBox_1, {
				"top": "150px",
				"left": "110px",
				"width": "480px",
				"height": "50px"
			});
			
			var output_2 = new cpr.controls.Output();
			output_2.value = "회의실";
			output_2.style.css({
				"text-align" : "center"
			});
			container.addChild(output_2, {
				"top": "150px",
				"left": "10px",
				"width": "100px",
				"height": "50px"
			});
		}
	});
	app.title = "회의실 등록 팝업";
	cpr.core.Platform.INSTANCE.register(app);
})();
