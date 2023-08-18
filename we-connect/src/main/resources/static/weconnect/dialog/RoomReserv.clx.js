/*
 * App URI: dialog/RoomReserv
 * Source Location: dialog/RoomReserv.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("dialog/RoomReserv", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * RoomReserv.js
			 * Created at 2023. 8. 18. 오전 10:07:32.
			 *
			 * @author chwec
			 ************************************************/

			/*
			 * "취소" 버튼(cancelBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onCancelBtnClick(e) {
				var cancelBtn = e.control;
				app.close(false);
			}

			/*
			 * "예약" 버튼(reservBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onReservBtnClick(e) {
				var reservBtn = e.control;
				app.lookup("roomReservSub").send();
			}

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e) {
				app.lookup("roomInfoSub").send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onRoomReservSubSubmitSuccess(e) {
				var roomReservSub = e.control;
				alert("회의실 예약 완료");
				app.close();
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("roomInfo");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "roomId",
						"dataType": "number"
					},
					{"name": "roomName"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("time");
			dataSet_2.parseData({
				"columns": [{"name": "time"}],
				"rows": [
					{"time": "9"},
					{"time": "10"},
					{"time": "11"},
					{"time": "12"},
					{"time": "13"},
					{"time": "14"},
					{"time": "15"},
					{"time": "16"},
					{"time": "17"},
					{"time": "18"},
					{"time": "19"},
					{"time": "20"}
				]
			});
			app.register(dataSet_2);
			var dataMap_1 = new cpr.data.DataMap("roomReservParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "roomReservDate"},
					{"name": "roomReservStartTime"},
					{"name": "roomReservEndTime"},
					{"name": "proposal"},
					{
						"name": "roomId",
						"dataType": "number"
					}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("roomInfoSub");
			submission_1.method = "get";
			submission_1.action = "member/room-reserv";
			submission_1.addResponseData(dataSet_1, false);
			if(typeof onRoomInfoSubSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onRoomInfoSubSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("roomReservSub");
			submission_2.action = "member/room-reserv";
			submission_2.addRequestData(dataMap_1);
			if(typeof onRoomReservSubSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onRoomReservSubSubmitSuccess);
			}
			app.register(submission_2);
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
			var output_1 = new cpr.controls.Output();
			output_1.value = "회의실 예약";
			container.addChild(output_1, {
				"top": "20px",
				"right": "1060px",
				"left": "20px",
				"height": "50px"
			});
			
			var button_1 = new cpr.controls.Button("reservBtn");
			button_1.value = "예약";
			if(typeof onReservBtnClick == "function") {
				button_1.addEventListener("click", onReservBtnClick);
			}
			container.addChild(button_1, {
				"right": "670px",
				"bottom": "30px",
				"width": "200px",
				"height": "50px"
			});
			
			var button_2 = new cpr.controls.Button("cancelBtn");
			button_2.value = "취소";
			if(typeof onCancelBtnClick == "function") {
				button_2.addEventListener("click", onCancelBtnClick);
			}
			container.addChild(button_2, {
				"bottom": "30px",
				"left": "650px",
				"width": "200px",
				"height": "50px"
			});
			
			var group_1 = new cpr.controls.Container();
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["200px", "1fr", "200px", "1fr"]);
			formLayout_1.setRows(["1fr", "1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var dateInput_1 = new cpr.controls.DateInput("dateDti");
				var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
				dateInput_1.setBindContext(dataMapContext_1);
				dateInput_1.bind("value").toDataMap(app.lookup("roomReservParam"), "roomReservDate");
				container.addChild(dateInput_1, {
					"colIndex": 3,
					"rowIndex": 0
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "종료 시간";
				container.addChild(output_2, {
					"colIndex": 2,
					"rowIndex": 1
				});
				var comboBox_1 = new cpr.controls.ComboBox("startCmd");
				var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
				comboBox_1.setBindContext(dataMapContext_2);
				comboBox_1.bind("value").toDataMap(app.lookup("roomReservParam"), "roomReservStartTime");
				(function(comboBox_1){
					comboBox_1.setItemSet(app.lookup("time"), {
						"label": "time",
						"value": "time"
					});
				})(comboBox_1);
				container.addChild(comboBox_1, {
					"colIndex": 1,
					"rowIndex": 1
				});
				var comboBox_2 = new cpr.controls.ComboBox("endCmd");
				var dataMapContext_3 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
				comboBox_2.setBindContext(dataMapContext_3);
				comboBox_2.bind("value").toDataMap(app.lookup("roomReservParam"), "roomReservEndTime");
				(function(comboBox_2){
					comboBox_2.setItemSet(app.lookup("time"), {
						"label": "time",
						"value": "time"
					});
				})(comboBox_2);
				container.addChild(comboBox_2, {
					"colIndex": 3,
					"rowIndex": 1
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "시작 시간";
				container.addChild(output_3, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var output_4 = new cpr.controls.Output();
				output_4.value = "회의실";
				container.addChild(output_4, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var comboBox_3 = new cpr.controls.ComboBox("roomNameCmb");
				var dataMapContext_4 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
				comboBox_3.setBindContext(dataMapContext_4);
				comboBox_3.bind("value").toDataMap(app.lookup("roomReservParam"), "roomId");
				(function(comboBox_3){
					comboBox_3.setItemSet(app.lookup("roomInfo"), {
						"label": "roomName",
						"value": "roomId"
					});
				})(comboBox_3);
				container.addChild(comboBox_3, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "예약 날짜";
				container.addChild(output_5, {
					"colIndex": 2,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "120px",
				"right": "20px",
				"left": "20px",
				"height": "218px"
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
			formLayout_2.setColumns(["200px", "1fr"]);
			formLayout_2.setRows(["1fr"]);
			group_2.setLayout(formLayout_2);
			(function(container){
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				var dataMapContext_5 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
				inputBox_1.setBindContext(dataMapContext_5);
				inputBox_1.bind("value").toDataMap(app.lookup("roomReservParam"), "proposal");
				container.addChild(inputBox_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var output_6 = new cpr.controls.Output();
				output_6.value = "목적";
				container.addChild(output_6, {
					"colIndex": 0,
					"rowIndex": 0,
					"colSpan": 1,
					"rowSpan": 1
				});
			})(group_2);
			container.addChild(group_2, {
				"top": "348px",
				"right": "20px",
				"left": "20px",
				"height": "200px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "회의실 예약";
	cpr.core.Platform.INSTANCE.register(app);
})();
