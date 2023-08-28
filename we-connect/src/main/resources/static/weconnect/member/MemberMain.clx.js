/*
 * App URI: member/MemberMain
 * Source Location: member/MemberMain.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/MemberMain", { 
		onPrepare: function(loader) {
			loader.addCSS("theme/controls/grid.part.css");
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * newMain.js
			 * Created at 2023. 8. 8. 오후 11:40:21.
			 *
			 * @author kjh970605
			 ************************************************/
			let intervalID;

			function clock() {
				const clockTarget = app.lookup("user_clock");
				const user_day = app.lookup("day");
				const date = new Date();
				const hours = date.getHours();
				const month = date.getMonth();
				const clockDate = date.getDate();
				const day = date.getDay();
				const minutes = date.getMinutes();
				const seconds = date.getSeconds();
				const week = ['일', '월', '화', '수', '목', '금', '토'];

				const amPm = hours < 12 ? '오전' : '오후';
				const adjustedHours = hours > 12 ? hours - 12 : hours;  // 24시간 형식을 12시간 형식으로 변경

				clockTarget.value = `${amPm} ${adjustedHours}시 ${minutes}분 ${seconds}초`;
				user_day.value = `${month+1}월 ${clockDate}일 ${week[day]}요일`;
			}


			/*
			 * "출근" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var button = e.control;
				const go = app.lookup("go");
				const date = new Date();
				const hours = date.getHours();
				const minutes = date.getMinutes();
				const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
				go.value = `${hours}: ${formattedMinutes}`
				if (confirm("입실처리하시겠습니까")) {
					let submission = app.lookup("Attendance1");
					submission.send();
				}
			}

			/*
			 * "퇴근" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e) {
				var button = e.control;
				const back = app.lookup("back");
				const date = new Date();
				const hours = date.getHours();
				const minutes = date.getMinutes();
				const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
				back.value = `${hours}: ${formattedMinutes}`
				if (confirm("퇴실하시겠습니까?")) {
					let UpdateAttendance = app.lookup("UpdateAttendance");
					UpdateAttendance.send();
				}
			}

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad2(e) {
				clock();
				intervalID = setInterval(clock, 1000);
			}

			/*
			 * 루트 컨테이너에서 before-unload 이벤트 발생 시 호출.
			 * 앱이 언로드되기 전에 발생하는 이벤트 입니다. 취소할 수 있습니다.
			 */
			function onBodyBeforeUnload(e) {
				clearInterval(intervalID);
			}
			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onAttendance1SubmitError(e) {
				var attendance1 = e.control;
				var submission = app.lookup("Attendance1");
				let error = submission.getMetadata("error");
				let button = app.lookup("Btn_workIn");
				button.enabled = false;
				alert(error);
			}

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit2(e) {
				var submission = app.lookup("Img");
				submission.send();
				app.lookup("noticeListSub").send();
				app.lookup("boardListSub").send();
				app.lookup("leaveRequestListSub").send();
				app.lookup("proposalListSub").send();
				let dataSet = app.lookup("leaveRequestList");
				let position = dataSet.getValue(0, "position");
				let department = dataSet.getValue(0, "departmentName");
				let Name = dataSet.getValue(0, "memberName");
				let memberName = app.lookup("name");
				memberName.value = `${Name} ${position}<br>${department}팀`;
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onImgSubmitSuccess(e) {
				var img = e.control;
				app.lookup("profile").redraw();
			}

			/*
			 * 파일 인풋에서 value-change 이벤트 발생 시 호출.
			 * FileInput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
			 */
			function onFi1ValueChange(e) {
				var fi1 = e.control;
				var image = app.lookup("profile");
				var fileInput = app.lookup("fi1");
				let fi2 = fileInput.file
				let submission = app.lookup("imgSend");
				console.log(fi1.file);
				console.log(fi2);
				if (fileInput.files && fileInput.files[0]) {
					var reader = new FileReader();
					reader.onload = function(e) {
						image.src = e.target.result;
					};
					reader.readAsDataURL(fileInput.files[0]);
				}
				submission.addFileParameter("profileImagePath", fi2);
				submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onImgSendSubmitSuccess(e) {
				var imgSend = e.control;
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onImgSendSubmitSuccess2(e) {
				var imgSend = e.control;
				alert("프로필 변경 선공");
			}

			/*
			 * 그리드에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onGrd3Click(e) {
				var grd3 = e.control;
				window.location = "member/FreeBoard.clx";
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("img");
			dataSet_1.parseData({
				"columns" : [{
					"name": "profileImagePath",
					"dataType": "string"
				}]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("noticeList");
			dataSet_2.parseData({
				"columns": [
					{
						"name": "noticeId",
						"dataType": "number"
					},
					{"name": "noticeCategory"},
					{"name": "noticeTitle"},
					{"name": "noticeContent"},
					{"name": "noticeCreate"}
				],
				"rows": [
					{"noticeContent": "공지할게요", "noticeCategory": "점검"},
					{"noticeContent": "공지할게요", "noticeCategory": "공지"},
					{"noticeContent": "공지할게요", "noticeCategory": "점검"},
					{"noticeContent": "공지할게요", "noticeCategory": "점검"},
					{"noticeContent": "공지할게요", "noticeCategory": "공지"}
				]
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("boardList");
			dataSet_3.parseData({
				"columns": [
					{
						"name": "freeBoardId",
						"dataType": "number"
					},
					{
						"name": "freeBoardTitle",
						"dataType": "string"
					},
					{
						"name": "memberName",
						"dataType": "string"
					},
					{
						"name": "freeBoardCreate",
						"dataType": "string"
					},
					{
						"name": "CMemberId",
						"dataType": "number"
					}
				],
				"rows": []
			});
			app.register(dataSet_3);
			
			var dataSet_4 = new cpr.data.DataSet("leaveRequestList");
			dataSet_4.parseData({
				"columns" : [
					{
						"name": "leaveRequestId",
						"dataType": "number"
					},
					{
						"name": "memberId",
						"dataType": "number"
					},
					{
						"name": "memberName",
						"dataType": "string"
					},
					{
						"name": "position",
						"dataType": "string"
					},
					{
						"name": "departmentName",
						"dataType": "string"
					},
					{
						"name": "leaveRequestReason",
						"dataType": "string"
					},
					{
						"name": "leaveRequestStart",
						"dataType": "string"
					},
					{
						"name": "leaveRequestEnd",
						"dataType": "string"
					},
					{"name": "formattedLeaveCount"},
					{
						"name": "leaveRequestType",
						"dataType": "string"
					},
					{
						"name": "leaveRequestStatus",
						"dataType": "string"
					}
				]
			});
			app.register(dataSet_4);
			
			var dataSet_5 = new cpr.data.DataSet("proposalList");
			dataSet_5.parseData({
				"columns": [
					{"name": "proposalId"},
					{"name": "proposalTitle"},
					{"name": "proposalStatus"},
					{"name": "proposalCreate"},
					{"name": "memberId"},
					{"name": "proposalContent"}
				],
				"rows": []
			});
			app.register(dataSet_5);
			var dataMap_1 = new cpr.data.DataMap("profileImage");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "profileImageId",
						"dataType": "string"
					},
					{"name": "profileImagesName"},
					{
						"name": "profileImagePath",
						"dataType": "string"
					},
					{
						"name": "memberId",
						"dataType": "string"
					}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("Attendance1");
			submission_1.action = "member/attendance";
			if(typeof onAttendance1SubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onAttendance1SubmitSuccess2);
			}
			if(typeof onAttendance1SubmitError == "function") {
				submission_1.addEventListener("submit-error", onAttendance1SubmitError);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("UpdateAttendance");
			submission_2.method = "put";
			submission_2.action = "member/attendance";
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("Img");
			submission_3.method = "get";
			submission_3.action = "member/profile";
			submission_3.addResponseData(dataSet_1, false);
			if(typeof onImgSubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onImgSubmitSuccess);
			}
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("imgSend");
			submission_4.method = "put";
			submission_4.action = "member/profile";
			submission_4.mediaType = "multipart/form-data";
			submission_4.addRequestData(dataMap_1);
			if(typeof onImgSendSubmitSuccess2 == "function") {
				submission_4.addEventListener("submit-success", onImgSendSubmitSuccess2);
			}
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("noticeListSub");
			submission_5.method = "get";
			submission_5.action = "member/notice";
			submission_5.addResponseData(dataSet_2, false);
			app.register(submission_5);
			
			var submission_6 = new cpr.protocols.Submission("boardListSub");
			submission_6.method = "get";
			submission_6.action = "/weconnect/member/boards";
			submission_6.addResponseData(dataSet_3, false);
			app.register(submission_6);
			
			var submission_7 = new cpr.protocols.Submission("leaveRequestListSub");
			submission_7.async = false;
			submission_7.method = "get";
			submission_7.action = "admin/leave-request";
			submission_7.addResponseData(dataSet_4, false);
			app.register(submission_7);
			
			var submission_8 = new cpr.protocols.Submission("proposalListSub");
			submission_8.method = "get";
			submission_8.action = "admin/proposals";
			submission_8.addResponseData(dataSet_5, false);
			app.register(submission_8);
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"font-weight" : "400",
				"background-color" : "#F8F8F8",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			group_1.style.setClasses(["main_layout1"]);
			group_1.style.css({
				"border-right-style" : "solid",
				"border-radius" : "8px",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_1.value = "<p><\/p>";
				hTMLSnippet_1.style.setClasses(["line"]);
				hTMLSnippet_1.style.css({
					"border-top-width" : "1px",
					"color" : "#bfbfbf",
					"border-left-style" : "solid",
					"border-right-width" : "1px",
					"border-bottom-width" : "1px",
					"font-size" : "18px",
					"border-left-width" : "1px"
				});
				container.addChild(hTMLSnippet_1, {
					"top": "0px",
					"bottom": "0px",
					"left": "204px",
					"width": "13px"
				});
				var image_1 = new cpr.controls.Image("profile");
				image_1.fallbackSrc = "theme/controls/icons/prifile_none.png";
				image_1.style.css({
					"border-radius" : "8px"
				});
				image_1.bind("src").toDataSet(app.lookup("img"), "profileImagePath", 0);
				if(typeof onProfileValueChange2 == "function") {
					image_1.addEventListener("value-change", onProfileValueChange2);
				}
				container.addChild(image_1, {
					"top": "14px",
					"left": "32px",
					"width": "150px",
					"height": "150px"
				});
				var fileInput_1 = new cpr.controls.FileInput("fi1");
				fileInput_1.placeholder = "프로필 수정";
				fileInput_1.style.css({
					"border-radius" : "8px"
				});
				fileInput_1.bind("value").toDataMap(app.lookup("profileImage"), "profileImagePath");
				if(typeof onFi1ValueChange == "function") {
					fileInput_1.addEventListener("value-change", onFi1ValueChange);
				}
				container.addChild(fileInput_1, {
					"top": "270px",
					"bottom": "0px",
					"left": "27px",
					"width": "160px"
				});
				var hTMLSnippet_2 = new cpr.controls.HTMLSnippet("name");
				hTMLSnippet_2.value = "<div><\/div>";
				hTMLSnippet_2.style.css({
					"font-weight" : "normal",
					"font-size" : "18px",
					"text-align" : "center"
				});
				container.addChild(hTMLSnippet_2, {
					"top": "182px",
					"left": "42px",
					"width": "127px",
					"height": "50px"
				});
				var hTMLSnippet_3 = new cpr.controls.HTMLSnippet("user_clock");
				hTMLSnippet_3.value = " <div id=\"clock\">00:00<\/div>";
				hTMLSnippet_3.style.css({
					"color" : "#8A8989",
					"font-weight" : "900",
					"font-size" : "25px"
				});
				if(typeof onUser_clockValueChange == "function") {
					hTMLSnippet_3.addEventListener("value-change", onUser_clockValueChange);
				}
				container.addChild(hTMLSnippet_3, {
					"top": "62px",
					"left": "227px",
					"width": "224px",
					"height": "47px"
				});
				var hTMLSnippet_4 = new cpr.controls.HTMLSnippet("day");
				hTMLSnippet_4.style.css({
					"color" : "#8A8989",
					"font-size" : "20px",
					"text-align" : "center"
				});
				if(typeof onDayValueChange == "function") {
					hTMLSnippet_4.addEventListener("value-change", onDayValueChange);
				}
				container.addChild(hTMLSnippet_4, {
					"top": "24px",
					"left": "247px",
					"width": "184px",
					"height": "31px"
				});
				var hTMLSnippet_5 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_5.value = "<div>출근:<\/div>";
				hTMLSnippet_5.style.css({
					"font-size" : "18px"
				});
				container.addChild(hTMLSnippet_5, {
					"top": "133px",
					"left": "226px",
					"width": "48px",
					"height": "40px"
				});
				var hTMLSnippet_6 = new cpr.controls.HTMLSnippet("go");
				hTMLSnippet_6.style.css({
					"font-size" : "18px"
				});
				container.addChild(hTMLSnippet_6, {
					"top": "133px",
					"left": "273px",
					"width": "100px",
					"height": "40px"
				});
				var hTMLSnippet_7 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_7.value = "<div>퇴근:<\/div>";
				hTMLSnippet_7.style.css({
					"font-size" : "18px"
				});
				container.addChild(hTMLSnippet_7, {
					"top": "195px",
					"left": "226px",
					"width": "48px",
					"height": "40px"
				});
				var hTMLSnippet_8 = new cpr.controls.HTMLSnippet("back");
				hTMLSnippet_8.value = "<span><\/span>";
				hTMLSnippet_8.style.css({
					"font-size" : "18px"
				});
				container.addChild(hTMLSnippet_8, {
					"top": "195px",
					"left": "269px",
					"width": "100px",
					"height": "40px"
				});
				var button_1 = new cpr.controls.Button("Btn_workIn");
				button_1.value = "출근";
				button_1.style.setClasses(["btn_go"]);
				button_1.style.css({
					"border-radius" : "10px",
					"background-color" : "#E0E1E2",
					"background-image" : "none",
					"text-align" : "center"
				});
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"right": "149px",
					"bottom": "0px",
					"width": "100px",
					"height": "50px"
				});
				var button_2 = new cpr.controls.Button("btn_out");
				button_2.value = "퇴근";
				button_2.style.css({
					"border-radius" : "10px",
					"background-color" : "#F7EEEB",
					"font-weight" : "500",
					"background-image" : "none",
					"text-align" : "center"
				});
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"bottom": "0px",
					"left": "363px",
					"width": "100px",
					"height": "50px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "3px",
				"left": "0px",
				"width": "470px",
				"height": "321px"
			});
			
			var group_2 = new cpr.controls.Container();
			group_2.style.setClasses(["main_layout1"]);
			group_2.style.css({
				"border-right-style" : "solid",
				"border-radius" : "8px",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_3 = new cpr.controls.layouts.XYLayout();
			group_2.setLayout(xYLayout_3);
			(function(container){
				var tabFolder_1 = new cpr.controls.TabFolder();
				
				var tabItem_1 = (function(tabFolder){
					var tabItem_1 = new cpr.controls.TabItem();
					tabItem_1.text = "건의사항";
					var group_3 = new cpr.controls.Container();
					var xYLayout_4 = new cpr.controls.layouts.XYLayout();
					group_3.setLayout(xYLayout_4);
					(function(container){
						var grid_1 = new cpr.controls.Grid("grd2");
						grid_1.init({
							"dataSet": app.lookup("proposalList"),
							"columns": [
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"}
							],
							"header": {
								"rows": [{"height": "35px"}],
								"cells": [
									{
										"constraint": {"rowIndex": 0, "colIndex": 0},
										"configurator": function(cell){
											cell.text = "번호";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.text = "등록일";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.text = "제목";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.text = "처리상태";
										}
									}
								]
							},
							"detail": {
								"rows": [{"height": "24px"}],
								"cells": [
									{
										"constraint": {"rowIndex": 0, "colIndex": 0},
										"configurator": function(cell){
											cell.columnName = "proposalId";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.columnName = "proposalCreate";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.columnName = "proposalTitle";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.columnName = "proposalStatus";
										}
									}
								]
							}
						});
						grid_1.style.header.css({
							"background-color" : "#E0E1E2",
							"font-weight" : "700",
							"background-image" : "none"
						});
						container.addChild(grid_1, {
							"top": "0px",
							"right": "0px",
							"bottom": "0px",
							"left": "0px"
						});
					})(group_3);
					tabItem_1.content = group_3;
					return tabItem_1;
				})(tabFolder_1);
				tabFolder_1.addTabItem(tabItem_1);
				tabFolder_1.setSelectedTabItem(tabItem_1);
				container.addChild(tabFolder_1, {
					"top": "0px",
					"right": "0px",
					"bottom": "0px",
					"left": "0px"
				});
			})(group_2);
			container.addChild(group_2, {
				"top": "4px",
				"left": "494px",
				"width": "610px",
				"height": "320px"
			});
			
			var group_4 = new cpr.controls.Container();
			group_4.style.setClasses(["main_layout1"]);
			group_4.style.css({
				"border-right-style" : "solid",
				"border-radius" : "8px",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_5 = new cpr.controls.layouts.XYLayout();
			group_4.setLayout(xYLayout_5);
			container.addChild(group_4, {
				"top": "4px",
				"right": "0px",
				"width": "458px",
				"height": "320px"
			});
			
			var group_5 = new cpr.controls.Container();
			group_5.style.setClasses(["main_layout1"]);
			group_5.style.css({
				"border-right-style" : "solid",
				"border-radius" : "8px",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_6 = new cpr.controls.layouts.XYLayout();
			group_5.setLayout(xYLayout_6);
			(function(container){
				var calendar_1 = new cpr.controls.Calendar();
				calendar_1.style.setClasses(["main-calendar"]);
				container.addChild(calendar_1, {
					"top": "0px",
					"right": "0px",
					"bottom": "0px",
					"left": "0px"
				});
			})(group_5);
			container.addChild(group_5, {
				"top": "334px",
				"right": "0px",
				"bottom": "0px",
				"width": "461px"
			});
			
			var group_6 = new cpr.controls.Container();
			group_6.style.setClasses(["main_layout1"]);
			group_6.style.css({
				"border-right-style" : "solid",
				"border-radius" : "8px",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_7 = new cpr.controls.layouts.XYLayout();
			group_6.setLayout(xYLayout_7);
			(function(container){
				var tabFolder_2 = new cpr.controls.TabFolder();
				
				var tabItem_2 = (function(tabFolder){
					var tabItem_2 = new cpr.controls.TabItem();
					tabItem_2.text = "자유게시판";
					var group_7 = new cpr.controls.Container();
					var xYLayout_8 = new cpr.controls.layouts.XYLayout();
					group_7.setLayout(xYLayout_8);
					(function(container){
						var grid_2 = new cpr.controls.Grid("grd3");
						grid_2.init({
							"dataSet": app.lookup("boardList"),
							"columns": [
								{
									"width": "100px",
									"visible": false
								},
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"}
							],
							"header": {
								"rows": [{"height": "35px"}],
								"cells": [
									{
										"constraint": {"rowIndex": 0, "colIndex": 0},
										"configurator": function(cell){
											cell.text = "freeBoardId";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.text = "작성일";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.text = "제목";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.text = "작성자";
										}
									}
								]
							},
							"detail": {
								"rows": [{"height": "24px"}],
								"cells": [
									{
										"constraint": {"rowIndex": 0, "colIndex": 0},
										"configurator": function(cell){
											cell.columnName = "freeBoardId";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.columnName = "freeBoardCreate";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.columnName = "freeBoardTitle";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.columnName = "memberName";
										}
									}
								]
							}
						});
						grid_2.style.css({
							"border-right-style" : "none",
							"border-left-style" : "none",
							"border-bottom-style" : "none",
							"border-top-style" : "none"
						});
						grid_2.style.header.css({
							"background-color" : "#E0E1E2",
							"border-right-style" : "none",
							"font-weight" : "700",
							"border-left-style" : "none",
							"border-bottom-style" : "none",
							"background-image" : "none",
							"border-top-style" : "none"
						});
						grid_2.style.detail.css({
							"border-right-style" : "none",
							"border-left-style" : "none",
							"border-bottom-style" : "none",
							"border-top-style" : "none"
						});
						if(typeof onGrd3Click == "function") {
							grid_2.addEventListener("click", onGrd3Click);
						}
						container.addChild(grid_2, {
							"top": "0px",
							"right": "0px",
							"bottom": "0px",
							"left": "0px"
						});
					})(group_7);
					tabItem_2.content = group_7;
					return tabItem_2;
				})(tabFolder_2);
				tabFolder_2.addTabItem(tabItem_2);
				tabFolder_2.setSelectedTabItem(tabItem_2);
				container.addChild(tabFolder_2, {
					"top": "0px",
					"right": "0px",
					"bottom": "0px",
					"left": "0px"
				});
			})(group_6);
			container.addChild(group_6, {
				"top": "334px",
				"bottom": "0px",
				"left": "3px",
				"width": "470px"
			});
			
			var group_8 = new cpr.controls.Container();
			group_8.style.setClasses(["main_layout1"]);
			group_8.style.css({
				"border-right-style" : "solid",
				"border-radius" : "8px",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_9 = new cpr.controls.layouts.XYLayout();
			group_8.setLayout(xYLayout_9);
			(function(container){
				var tabFolder_3 = new cpr.controls.TabFolder();
				tabFolder_3.style.header.css({
					"border-top-width" : "1px",
					"border-right-width" : "1px",
					"border-bottom-width" : "1px",
					"border-left-width" : "1px"
				});
				
				var tabItem_3 = (function(tabFolder){
					var tabItem_3 = new cpr.controls.TabItem();
					tabItem_3.text = "공지사항";
					var group_9 = new cpr.controls.Container();
					var xYLayout_10 = new cpr.controls.layouts.XYLayout();
					group_9.setLayout(xYLayout_10);
					(function(container){
						var grid_3 = new cpr.controls.Grid("grd1");
						grid_3.init({
							"dataSet": app.lookup("noticeList"),
							"columns": [
								{
									"width": "100px",
									"visible": false
								},
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"}
							],
							"header": {
								"rows": [{"height": "35px"}],
								"cells": [
									{
										"constraint": {"rowIndex": 0, "colIndex": 0},
										"configurator": function(cell){
											cell.text = "noticeId";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.text = "분류";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.text = "등록일";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.text = "제목";
										}
									}
								]
							},
							"detail": {
								"rows": [{"height": "24px"}],
								"cells": [
									{
										"constraint": {"rowIndex": 0, "colIndex": 0},
										"configurator": function(cell){
											cell.columnName = "noticeId";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.columnName = "noticeCategory";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.columnName = "noticeCreate";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.columnName = "noticeTitle";
										}
									}
								]
							}
						});
						grid_3.style.setClasses(["main"]);
						grid_3.style.css({
							"border-right-style" : "none",
							"border-top-width" : "1px",
							"border-left-style" : "none",
							"border-right-width" : "1px",
							"border-bottom-width" : "1px",
							"border-bottom-style" : "none",
							"border-left-width" : "1px",
							"border-top-style" : "none"
						});
						grid_3.style.header.css({
							"background-color" : "#E0E1E2",
							"border-right-style" : "none",
							"font-weight" : "700",
							"border-left-style" : "none",
							"border-bottom-style" : "none",
							"background-image" : "none",
							"border-top-style" : "none"
						});
						grid_3.style.detail.css({
							"border-right-style" : "none",
							"border-left-style" : "none",
							"border-bottom-style" : "none",
							"border-top-style" : "none"
						});
						container.addChild(grid_3, {
							"top": "0px",
							"right": "0px",
							"bottom": "0px",
							"left": "0px"
						});
					})(group_9);
					tabItem_3.content = group_9;
					return tabItem_3;
				})(tabFolder_3);
				tabFolder_3.addTabItem(tabItem_3);
				tabFolder_3.setSelectedTabItem(tabItem_3);
				container.addChild(tabFolder_3, {
					"top": "0px",
					"right": "0px",
					"bottom": "0px",
					"left": "0px"
				});
			})(group_8);
			container.addChild(group_8, {
				"top": "334px",
				"bottom": "0px",
				"left": "494px",
				"width": "610px"
			});
			if(typeof onBodyPropertyChange == "function"){
				app.addEventListener("property-change", onBodyPropertyChange);
			}
			if(typeof onBodyHostChange2 == "function"){
				app.addEventListener("host-change", onBodyHostChange2);
			}
			if(typeof onBodyLoad2 == "function"){
				app.addEventListener("load", onBodyLoad2);
			}
			if(typeof onBodyUnload == "function"){
				app.addEventListener("unload", onBodyUnload);
			}
			if(typeof onBodyBeforeUnload == "function"){
				app.addEventListener("before-unload", onBodyBeforeUnload);
			}
			if(typeof onBodyInit2 == "function"){
				app.addEventListener("init", onBodyInit2);
			}
			if(typeof onBodyClick == "function"){
				app.getContainer().addEventListener("click", onBodyClick);
			}
		}
	});
	app.title = "MemberMain";
	cpr.core.Platform.INSTANCE.register(app);
})();
