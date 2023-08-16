/*
 * App URI: member/RoomReservForm
 * Source Location: member/RoomReservForm.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/RoomReservForm", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * MeetingRoomReserv.js
			 * Created at 2023. 8. 8. 오후 8:11:24.
			 *
			 * @author chwec
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("room");
			dataSet_1.parseData({
				"columns": [{"name": "room"}],
				"rows": [
					{"room": "8층 대회의실"},
					{"room": "8층 소회의실"},
					{"room": "6층 소회의실"},
					{"room": "5층 대회의실"},
					{"room": "5층 소회의실"},
					{"room": "접견실"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("time");
			dataSet_2.parseData({
				"columns": [{
					"name": "time",
					"dataType": "string"
				}],
				"rows": [
					{"time": "9:00"},
					{"time": "10:00"},
					{"time": "11:00"},
					{"time": "12:00"},
					{"time": "13:00"},
					{"time": "14:00"},
					{"time": "15:00"},
					{"time": "16:00"},
					{"time": "17:00"},
					{"time": "18:00"},
					{"time": "19:00"},
					{"time": "20:00"}
				]
			});
			app.register(dataSet_2);
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
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["200px", "1fr"]);
			formLayout_1.setRows(["100px", "100px", "100px", "250px", "250px"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "회의실";
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "종료 날짜";
				container.addChild(output_2, {
					"colIndex": 0,
					"rowIndex": 2
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "목적";
				container.addChild(output_3, {
					"colIndex": 0,
					"rowIndex": 3
				});
				var group_2 = new cpr.controls.Container();
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.scrollable = false;
				formLayout_2.topMargin = "0px";
				formLayout_2.rightMargin = "0px";
				formLayout_2.bottomMargin = "0px";
				formLayout_2.leftMargin = "0px";
				formLayout_2.horizontalSpacing = "0px";
				formLayout_2.verticalSpacing = "0px";
				formLayout_2.setColumns(["300px", "300px", "300px"]);
				formLayout_2.setRows(["1fr"]);
				group_2.setLayout(formLayout_2);
				(function(container){
					var dateInput_1 = new cpr.controls.DateInput("dti2");
					container.addChild(dateInput_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var output_4 = new cpr.controls.Output();
					output_4.value = "시작 시간";
					container.addChild(output_4, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var comboBox_1 = new cpr.controls.ComboBox("cmb2");
					(function(comboBox_1){
						comboBox_1.setItemSet(app.lookup("time"), {
							"label": "time",
							"value": "time"
						});
					})(comboBox_1);
					container.addChild(comboBox_1, {
						"colIndex": 2,
						"rowIndex": 0
					});
				})(group_2);
				container.addChild(group_2, {
					"colIndex": 1,
					"rowIndex": 1
				});
				var comboBox_2 = new cpr.controls.ComboBox("cmb1");
				(function(comboBox_2){
					comboBox_2.setItemSet(app.lookup("room"), {
						"label": "room",
						"value": "room"
					});
				})(comboBox_2);
				container.addChild(comboBox_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var group_3 = new cpr.controls.Container();
				var formLayout_3 = new cpr.controls.layouts.FormLayout();
				formLayout_3.scrollable = false;
				formLayout_3.topMargin = "0px";
				formLayout_3.rightMargin = "0px";
				formLayout_3.bottomMargin = "0px";
				formLayout_3.leftMargin = "0px";
				formLayout_3.horizontalSpacing = "0px";
				formLayout_3.verticalSpacing = "0px";
				formLayout_3.setColumns(["300px", "300px", "300px"]);
				formLayout_3.setRows(["1fr"]);
				group_3.setLayout(formLayout_3);
				(function(container){
					var dateInput_2 = new cpr.controls.DateInput("dti1");
					container.addChild(dateInput_2, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var output_5 = new cpr.controls.Output();
					output_5.value = "종료 시간";
					container.addChild(output_5, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var comboBox_3 = new cpr.controls.ComboBox("cmb3");
					(function(comboBox_3){
						comboBox_3.setItemSet(app.lookup("time"), {
							"label": "time",
							"value": "time"
						});
					})(comboBox_3);
					container.addChild(comboBox_3, {
						"colIndex": 2,
						"rowIndex": 0
					});
				})(group_3);
				container.addChild(group_3, {
					"colIndex": 1,
					"rowIndex": 2
				});
				var output_6 = new cpr.controls.Output();
				output_6.value = "시작 날짜";
				container.addChild(output_6, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				container.addChild(inputBox_1, {
					"colIndex": 1,
					"rowIndex": 3
				});
				var group_4 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_4.setLayout(xYLayout_2);
				(function(container){
					var button_1 = new cpr.controls.Button();
					button_1.value = "취소";
					container.addChild(button_1, {
						"right": "650px",
						"bottom": "88px",
						"width": "100px",
						"height": "30px"
					});
					var button_2 = new cpr.controls.Button();
					button_2.value = "신청";
					container.addChild(button_2, {
						"bottom": "88px",
						"left": "690px",
						"width": "100px",
						"height": "30px"
					});
				})(group_4);
				container.addChild(group_4, {
					"colIndex": 0,
					"rowIndex": 4,
					"colSpan": 2,
					"rowSpan": 1
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
	app.title = "RoomReservForm";
	cpr.core.Platform.INSTANCE.register(app);
})();
