/*
 * App URI: user/LeaveRequestForm
 * Source Location: user/LeaveRequestForm.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("user/LeaveRequestForm", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * HolidayRequestForm.js
			 * Created at 2023. 8. 9. 오후 12:06:33.
			 *
			 * @author chwec
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("type");
			dataSet_1.parseData({
				"columns": [{"name": "type"}],
				"rows": [
					{"type": "오전 반차"},
					{"type": "오후 반차"},
					{"type": "연차"}
				]
			});
			app.register(dataSet_1);
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
			var group_1 = new cpr.controls.Container();
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var group_2 = new cpr.controls.Container();
				group_2.style.css({
					"border-right-style" : "solid",
					"border-left-style" : "solid",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid"
				});
				var xYLayout_3 = new cpr.controls.layouts.XYLayout();
				group_2.setLayout(xYLayout_3);
				(function(container){
					var group_3 = new cpr.controls.Container();
					group_3.style.css({
						"border-right-style" : "solid",
						"border-left-style" : "solid",
						"border-bottom-style" : "solid",
						"border-top-style" : "solid"
					});
					var xYLayout_4 = new cpr.controls.layouts.XYLayout();
					group_3.setLayout(xYLayout_4);
					(function(container){
						var output_1 = new cpr.controls.Output();
						output_1.value = "사유";
						output_1.style.css({
							"text-align" : "center"
						});
						container.addChild(output_1, {
							"top": "0px",
							"right": "0px",
							"bottom": "0px",
							"left": "0px"
						});
					})(group_3);
					container.addChild(group_3, {
						"top": "49px",
						"bottom": "2px",
						"left": "0px",
						"width": "236px"
					});
					var group_4 = new cpr.controls.Container();
					var xYLayout_5 = new cpr.controls.layouts.XYLayout();
					group_4.setLayout(xYLayout_5);
					(function(container){
						var group_5 = new cpr.controls.Container();
						var xYLayout_6 = new cpr.controls.layouts.XYLayout();
						group_5.setLayout(xYLayout_6);
						(function(container){
							var dateInput_1 = new cpr.controls.DateInput("dti1");
							container.addChild(dateInput_1, {
								"top": "0px",
								"bottom": "0px",
								"left": "0px",
								"width": "334px"
							});
							var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
							hTMLSnippet_1.value = "<span>~<\/span>";
							hTMLSnippet_1.style.css({
								"text-align" : "center"
							});
							container.addChild(hTMLSnippet_1, {
								"top": "0px",
								"left": "290px",
								"width": "100px",
								"height": "50px"
							});
							var dateInput_2 = new cpr.controls.DateInput("dti2");
							container.addChild(dateInput_2, {
								"top": "0px",
								"right": "4px",
								"width": "331px",
								"height": "50px"
							});
						})(group_5);
						container.addChild(group_5, {
							"top": "0px",
							"left": "383px",
							"width": "693px",
							"height": "50px"
						});
						var output_2 = new cpr.controls.Output();
						output_2.value = "기간";
						output_2.style.css({
							"border-right-style" : "solid",
							"border-left-style" : "solid",
							"border-bottom-style" : "solid",
							"border-top-style" : "solid",
							"text-align" : "center"
						});
						container.addChild(output_2, {
							"top": "0px",
							"bottom": "0px",
							"left": "0px",
							"width": "384px"
						});
					})(group_4);
					container.addChild(group_4, {
						"top": "0px",
						"right": "0px",
						"left": "496px",
						"height": "50px"
					});
					var group_6 = new cpr.controls.Container();
					group_6.style.css({
						"border-right-style" : "solid",
						"border-left-style" : "solid",
						"border-bottom-style" : "solid",
						"border-top-style" : "solid"
					});
					var xYLayout_7 = new cpr.controls.layouts.XYLayout();
					group_6.setLayout(xYLayout_7);
					(function(container){
						var output_3 = new cpr.controls.Output();
						output_3.value = "근태구분";
						output_3.style.css({
							"text-align" : "center"
						});
						container.addChild(output_3, {
							"top": "0px",
							"right": "0px",
							"bottom": "0px",
							"left": "0px"
						});
					})(group_6);
					container.addChild(group_6, {
						"top": "0px",
						"left": "0px",
						"width": "236px",
						"height": "50px"
					});
					var group_7 = new cpr.controls.Container();
					var xYLayout_8 = new cpr.controls.layouts.XYLayout();
					group_7.setLayout(xYLayout_8);
					(function(container){
						var button_1 = new cpr.controls.Button();
						button_1.value = "신청";
						container.addChild(button_1, {
							"bottom": "0px",
							"left": "450px",
							"width": "100px",
							"height": "30px"
						});
						var button_2 = new cpr.controls.Button();
						button_2.value = "취소";
						container.addChild(button_2, {
							"right": "450px",
							"bottom": "0px",
							"width": "100px",
							"height": "30px"
						});
					})(group_7);
					container.addChild(group_7, {
						"right": "0px",
						"bottom": "0px",
						"left": "240px",
						"height": "315px"
					});
					var inputBox_1 = new cpr.controls.InputBox("ipb1");
					inputBox_1.value = "ㅇㄴㅇㄴㅁ";
					inputBox_1.style.css({
						"background-color" : "#EBEBEB",
						"white-space" : "normal",
						"text-align" : "left"
					});
					container.addChild(inputBox_1, {
						"top": "53px",
						"right": "0px",
						"bottom": "53px",
						"left": "235px"
					});
					var group_8 = new cpr.controls.Container();
					var xYLayout_9 = new cpr.controls.layouts.XYLayout();
					group_8.setLayout(xYLayout_9);
					(function(container){
						var comboBox_1 = new cpr.controls.ComboBox("cmb1");
						comboBox_1.style.css({
							"border-right-style" : "solid",
							"border-left-style" : "solid",
							"border-bottom-style" : "solid",
							"border-top-style" : "solid"
						});
						(function(comboBox_1){
							comboBox_1.setItemSet(app.lookup("type"), {
								"label": "type",
								"value": "type"
							});
						})(comboBox_1);
						container.addChild(comboBox_1, {
							"top": "0px",
							"right": "0px",
							"bottom": "0px",
							"left": "0px"
						});
					})(group_8);
					container.addChild(group_8, {
						"top": "0px",
						"left": "239px",
						"width": "257px",
						"height": "50px"
					});
				})(group_2);
				container.addChild(group_2, {
					"top": "0px",
					"right": "0px",
					"bottom": "0px",
					"left": "0px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "0px",
				"right": "0px",
				"bottom": "0px",
				"left": "0px"
			});
		}
	});
	app.title = "LeaveRequestForm";
	cpr.core.Platform.INSTANCE.register(app);
})();