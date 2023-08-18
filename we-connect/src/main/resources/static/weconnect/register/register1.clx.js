/*
 * App URI: register/register1
 * Source Location: register/register1.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("register/register1", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * register1.js
			 * Created at 2023. 8. 7. 오전 11:45:06.
			 *
			 * @author kjh970605
			 ************************************************/

			/*
			 * "확인" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				let submission = app.lookup("memberList");
				submission.send();
				window.location= "login/login1.clx";
			}



			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit2(e){
				let department = app.lookup("deparment");
				department.send();
			}

			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onMemberListSubmitError(e){
				var memberList = e.control;
				alert("회원가입 실패");
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onMemberListSubmitSuccess(e){
				var memberList = e.control;
					alert("회원가입 완료");
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("departmentList");
			dataSet_1.parseData({
				"info": "selet",
				"columns": [
					{
						"name": "departmentId",
						"dataType": "string"
					},
					{
						"name": "departmentName",
						"dataType": "string"
					}
				],
				"rows": []
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("positionList");
			dataSet_2.parseData({
				"columns": [{
					"name": "position",
					"dataType": "string"
				}],
				"rows": [
					{"position": "사원"},
					{"position": "주임"},
					{"position": "대리"},
					{"position": "과장"}
				]
			});
			app.register(dataSet_2);
			var dataMap_1 = new cpr.data.DataMap("member");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "memberId",
						"dataType": "string"
					},
					{
						"name": "memberName",
						"dataType": "string"
					},
					{
						"name": "memberEmail",
						"dataType": "string"
					},
					{
						"name": "position",
						"dataType": "string"
					},
					{
						"name": "memberPassword",
						"dataType": "string"
					},
					{
						"name": "memberStatus",
						"dataType": "string"
					},
					{
						"name": "managerYn",
						"dataType": "string"
					},
					{
						"name": "departmentId",
						"dataType": "string"
					},
					{
						"name": "leaveCount",
						"dataType": "string"
					}
				]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("department1");
			dataMap_2.parseData({
				"columns" : [
					{
						"name": "departmentName",
						"dataType": "string"
					},
					{"name": "departmentId"}
				]
			});
			app.register(dataMap_2);
			var submission_1 = new cpr.protocols.Submission("memberList");
			submission_1.method = "post";
			submission_1.action = "member";
			submission_1.addRequestData(dataMap_1);
			submission_1.addRequestData(dataSet_1);
			submission_1.addRequestData(dataMap_2);
			if(typeof onMemberListSubmitError == "function") {
				submission_1.addEventListener("submit-error", onMemberListSubmitError);
			}
			if(typeof onMemberListSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onMemberListSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("deparment");
			submission_2.method = "get";
			submission_2.action = "member";
			submission_2.addRequestData(dataMap_2);
			submission_2.addResponseData(dataSet_1, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("position");
			app.register(submission_3);
			app.supportMedia("all and (min-width: 1928px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1927px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"background-image" : "none",
				"background-color" : "#F8F8F8",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			group_1.style.setClasses(["cl-form-group1"]);
			group_1.style.css({
				"border-radius" : "30px",
				"background-color" : "#FEFEFF",
				"color" : "#FFFFFF",
				"background-image" : "none"
			});
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var button_1 = new cpr.controls.Button();
				button_1.value = "중복 확인";
				button_1.style.setClasses(["button1"]);
				button_1.style.css({
					"background-color" : "#EBEBEB",
					"border-radius" : "5px",
					"color" : "#070000",
					"font-size" : "16px",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				container.addChild(button_1, {
					"top": "156px",
					"left": "523px",
					"width": "109px",
					"height": "48px"
				});
				var inputBox_1 = new cpr.controls.InputBox("memberName");
				inputBox_1.placeholder = "\r\n";
				inputBox_1.style.css({
					"border-radius" : "5px",
					"background-color" : "#FFFFFF",
					"color" : "#070000",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("member"), "memberName");
				container.addChild(inputBox_1, {
					"top": "262px",
					"left": "160px",
					"width": "352px",
					"height": "48px"
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb3");
				inputBox_2.placeholder = "\r\n";
				inputBox_2.style.css({
					"border-radius" : "5px",
					"background-color" : "#FFFFFF",
					"color" : "#070000",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				inputBox_2.bind("value").toDataMap(app.lookup("member"), "memberPassword");
				container.addChild(inputBox_2, {
					"top": "377px",
					"left": "160px",
					"width": "352px",
					"height": "48px"
				});
				var inputBox_3 = new cpr.controls.InputBox("ipb4");
				inputBox_3.placeholder = "\r\n";
				inputBox_3.style.css({
					"border-radius" : "5px",
					"background-color" : "#FFFFFF",
					"color" : "#070000",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				inputBox_3.bind("value").toDataMap(app.lookup("member"), "memberPassword");
				container.addChild(inputBox_3, {
					"top": "486px",
					"left": "160px",
					"width": "352px",
					"height": "48px"
				});
				var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_1.value = "<div>비밀번호 <\/div>";
				hTMLSnippet_1.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_1, {
					"top": "348px",
					"left": "160px",
					"width": "100px",
					"height": "30px"
				});
				var hTMLSnippet_2 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_2.value = "<div>비밀번호 확인<\/div>";
				hTMLSnippet_2.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_2, {
					"top": "458px",
					"left": "160px",
					"width": "234px",
					"height": "30px"
				});
				var hTMLSnippet_3 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_3.value = "<div>성명 <\/div>";
				hTMLSnippet_3.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_3, {
					"top": "235px",
					"left": "160px",
					"width": "100px",
					"height": "30px"
				});
				var hTMLSnippet_4 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_4.value = "<div>이메일<\/div>\r\n";
				hTMLSnippet_4.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_4, {
					"top": "126px",
					"left": "160px",
					"width": "100px",
					"height": "30px"
				});
				var comboBox_1 = new cpr.controls.ComboBox("cmb1");
				comboBox_1.placeholder = "(선택)";
				comboBox_1.style.css({
					"border-radius" : "5px",
					"color" : "#A0A0A0",
					"font-weight" : "500"
				});
				comboBox_1.style.button.css({
					"width" : "30px"
				});
				comboBox_1.bind("value").toDataMap(app.lookup("member"), "position");
				(function(comboBox_1){
					comboBox_1.setItemSet(app.lookup("positionList"), {
						"label": "position",
						"value": "position"
					});
				})(comboBox_1);
				container.addChild(comboBox_1, {
					"top": "729px",
					"left": "160px",
					"width": "352px",
					"height": "48px"
				});
				var hTMLSnippet_5 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_5.value = "<div>직급<\/div>";
				hTMLSnippet_5.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_5, {
					"top": "699px",
					"left": "160px",
					"width": "100px",
					"height": "30px"
				});
				var hTMLSnippet_6 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_6.value = "<div>부서<\/div>";
				hTMLSnippet_6.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_6, {
					"top": "576px",
					"left": "160px",
					"width": "100px",
					"height": "30px"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "확인";
				button_2.style.setClasses(["btn-success"]);
				button_2.style.css({
					"background-color" : "#4680FF",
					"color" : "#FFFFFF",
					"font-size" : "16px",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				if(typeof onButtonClick == "function") {
					button_2.addEventListener("click", onButtonClick);
				}
				container.addChild(button_2, {
					"top": "813px",
					"left": "133px",
					"width": "150px",
					"height": "50px"
				});
				var button_3 = new cpr.controls.Button();
				button_3.value = "취소";
				button_3.style.setClasses(["btn-fail"]);
				button_3.style.css({
					"background-color" : "#929292",
					"color" : "#FFFFFF",
					"font-size" : "16px",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				container.addChild(button_3, {
					"top": "813px",
					"left": "398px",
					"width": "150px",
					"height": "50px"
				});
				var textArea_1 = new cpr.controls.TextArea("txa1");
				textArea_1.value = "회원가입";
				textArea_1.style.css({
					"border-right-style" : "none",
					"color" : "#E1E1E1",
					"border-left-style" : "none",
					"font-weight" : "900",
					"font-size" : "45px",
					"border-bottom-style" : "none",
					"font-style" : "normal",
					"background-image" : "none",
					"border-top-style" : "none",
					"text-align" : "center"
				});
				container.addChild(textArea_1, {
					"top": "0px",
					"left": "12px",
					"width": "229px",
					"height": "83px"
				});
				var comboBox_2 = new cpr.controls.ComboBox("cmb2");
				comboBox_2.placeholder = "(선택)";
				comboBox_2.style.css({
					"background-color" : "#FFFFFF",
					"border-radius" : "5px",
					"color" : "#A0A0A0",
					"font-weight" : "500",
					"line-height" : "none",
					"text-align" : "left"
				});
				comboBox_2.style.button.css({
					"background-size" : "contain",
					"width" : "30px"
				});
				comboBox_2.bind("value").toDataMap(app.lookup("department1"), "departmentId");
				(function(comboBox_2){
					comboBox_2.addItem(new cpr.controls.Item("", "value3"));
					comboBox_2.setItemSet(app.lookup("departmentList"), {
						"label": "departmentName",
						"value": "departmentId"
					});
				})(comboBox_2);
				if(typeof onCmb2SelectionChange == "function") {
					comboBox_2.addEventListener("selection-change", onCmb2SelectionChange);
				}
				container.addChild(comboBox_2, {
					"top": "605px",
					"left": "160px",
					"width": "352px",
					"height": "48px"
				});
				var inputBox_4 = new cpr.controls.InputBox("memberId");
				inputBox_4.placeholder = "이메일 주소는 ID로 사용됩니다.";
				inputBox_4.style.css({
					"border-radius" : "5px",
					"background-color" : "#FFFFF",
					"color" : "#000000",
					"font-weight" : "500",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				inputBox_4.bind("value").toDataMap(app.lookup("member"), "memberEmail");
				if(typeof onMemberIdValueChange == "function") {
					inputBox_4.addEventListener("value-change", onMemberIdValueChange);
				}
				container.addChild(inputBox_4, {
					"top": "156px",
					"left": "158px",
					"width": "355px",
					"height": "48px"
				});
			})(group_1);
			if(typeof onGroupClick == "function") {
				group_1.addEventListener("click", onGroupClick);
			}
			container.addChild(group_1, {
				"top": "20px",
				"left": "605px",
				"width": "737px",
				"height": "874px"
			});
			if(typeof onBodyInit2 == "function"){
				app.addEventListener("init", onBodyInit2);
			}
		}
	});
	app.title = "register1";
	cpr.core.Platform.INSTANCE.register(app);
})();
