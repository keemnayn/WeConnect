/*
 * App URI: Calendar
 * Source Location: Calendar.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("Calendar", { 
		onPrepare: function(loader) {
			loader.addCSS("calendarSample.part.css");
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Calendar.js
			 * Created at 2021. 1. 20. 오후 3:39:18.
			 *
			 * @author daye
			 ************************************************/

			/************************************************
			 * 전역 변수
			 ************************************************/

			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			/************************************************
			 * 사용자 정의 함수
			 ************************************************/
			/**
			 * 아웃풋에 현재 날짜를 리턴합니다.
			 * 아웃풋 (optMonth) 의 value 에 바인딩 (익스프레션 바인딩)
			 */
			cpr.expression.ExpressionEngine.INSTANCE.registerFunction("getMonth", function() {
				var cur = app.lookup("calendar").current;
				
				var year = cur.getFullYear();
				var month = monthNames[cur.getMonth()];
				return month + " " + year;
			});

			/************************************************
			 * 컨트롤 이벤트
			 ************************************************/
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad( /* cpr.events.CEvent */ e) {
				
				// 아이템 추가
				
				app.lookup("subOnLoad").send();
				
			}

			/*
			 * "◀" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick( /* cpr.events.CMouseEvent */ e) {
				/** 
				 * @type cpr.controls.Button
				 */
				var button = e.control;
				
				// 이전 월 이동
				app.lookup("calendar").prev();
			}

			/*
			 * "▶" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2( /* cpr.events.CMouseEvent */ e) {
				/** 
				 * @type cpr.controls.Button
				 */
				var button = e.control;
				
				// 다음 월 이동
				app.lookup("calendar").next();
			}

			/*
			 * "today" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick3( /* cpr.events.CMouseEvent */ e) {
				/** 
				 * @type cpr.controls.Button
				 */
				var button = e.control;
				
				var calendar = app.lookup("calendar");
				
				// 오늘날짜로 이동
				var now = new Date();
				calendar.navigate(now);
			}

			/*
			 * 캘린더에서 navigate 이벤트 발생 시 호출.
			 * Calendar의 다음 또는 이전 달력으로 이동 했을때 발생하는 이벤트.
			 */
			function onCalendarNavigate( /* cpr.events.CDateEvent */ e) {
				/** 
				 * @type cpr.controls.Calendar
				 */
				var calendar = e.control;
				app.lookup("optMonth").redraw();
			}

			/*
			 * 캘린더에서 item-click 이벤트 발생 시 호출.
			 * Calendar의 아이템을 클릭 할 때 발생하는 이벤트. relativeTargetName, item을 통해 정보를 얻을 수 있습니다.
			 */
			function onCalendarItemClick( /* cpr.events.CItemEvent */ e) {
				/** 
				 * @type cpr.controls.Calendar
				 */
				var calendar = e.control;
				
				if (e.relativeTargetName == "item") { // item 일 경우에만 (기념일 x)
					
					var voItem = e.item;
					
					var voInitValue = {
						start: voItem.start,
						end: voItem.end,
						item: voItem
					};
					
					app.openDialog("CalendarSample/popup/CalendarItemDetail", {
						width: 500,
						height: 300
					}, function(dialog) {
						
						dialog.initValue = voInitValue;
						
						dialog.addEventListener("close", function(e) {
							var returnValue = dialog.returnValue;
							
							if (returnValue) {
								if (returnValue == "delete") {
									// 삭제
									var vnRowIndex = voItem.row.getIndex();
									app.lookup("dsAnni").deleteRow(vnRowIndex);
									
								} else {
									// 저장
									var start = returnValue["start"];
									var end = returnValue["end"];
									var event = returnValue["event"];
									var description = returnValue["description"];
									
									voItem.row.setRowData({
										start: start,
										end: end,
										label: event,
										description: description
									})
								}
								
								calendar.redraw();
							}
						});
						
					});
					
				} else if (e.relativeTargetName == "more") {
					
					var date = e.targetObject.date;
					var voCalendarItems = calendar.getItemsByDate(date); //1.0.2210(2020.07.10릴리즈) 부터 사용가능
					var voAnniversaries = calendar.getAnniversariesByDate(date);
					
					var voInitValue = {
						date: moment(date).format("YYYY-MM-DD"),
						item: voCalendarItems,
						anniversary: voAnniversaries
					};
					
					app.openDialog("CalendarSample/popup/CalendarMore", {
						width: 500,
						height: 500
					}, function(dialog) {
						
						dialog.initValue = voInitValue;
						
					});
				}
				
			}

			/*
			 * 캘린더에서 date-click 이벤트 발생 시 호출.
			 * Calendar의 날짜를 클릭 했을때 발생하는 이벤트.
			 */
			function onCalendarDateClick( /* cpr.events.CDateEvent */ e) {
				/** 
				 * @type cpr.controls.Calendar
				 */
				var calendar = e.control;
				
				var initValue = {
					start: e.date,
					end: e.date
				};
				
				// 신규 아이템 등록 팝업
				
				app.openDialog("CalendarSample/popup/CalendarItemDetail", {
					width: 500,
					height: 300
				}, function(dialog) {
					
					dialog.initValue = initValue;
					
					dialog.addEventListener("close", function(e) {
						var returnValue = dialog.returnValue;
						
						if (returnValue) {
							var start = returnValue["start"];
							var end = returnValue["end"];
							var event = returnValue["event"];
							var description = returnValue["description"];
							
							var vnRowCnt = app.lookup("dsAnni").getRowCount();
							app.lookup("dsAnni").insertRowData(vnRowCnt, true, {
								label: event,
								value: "newValue_" + event + "_" + vnRowCnt,
								start: start,
								end: end,
								description: description
							});
							calendar.redraw();
						}
					});
					
				});
				
			}

			/*
			 * 서브미션에서 submit-done 이벤트 발생 시 호출.
			 * 응답처리가 모두 종료되면 발생합니다.
			 */
			function onSubOnLoadSubmitDone( /* cpr.events.CSubmissionEvent */ e) {
				/** 
				 * @type cpr.protocols.Submission
				 */
				var subOnLoad = e.control;
				if (subOnLoad.isSuccess()) {
					
					var calendar = app.lookup("calendar");
					
					// 기념일 추가 (* 포함 시 매년, 매월 설정 가능)
					// 캘린더의 showAnniversary=true 로 설정
					calendar.addAnniversary({
						date: "*1003",
						label: "개천절",
						className: "calHoliday"
					});
					calendar.addAnniversary({
						date: "*1009",
						label: "한글날",
						className: "calHoliday"
					});
					calendar.addAnniversary({
						date: "*0815",
						label: "광복절",
						className: "calHoliday"
					});
					calendar.addAnniversary({
						date: "*1225",
						label: "크리스마스",
						className: "calHoliday"
					});
					calendar.addAnniversary({
						date: "2021*10",
						label: "토마토기념일",
						className: "calHoliday"
					});
					
					// 캘린더 특정 날짜 비활성
					//			calendar.enabledDateExp = "getDay() != 0 && getDay() != 6"; // 토, 일 비활성
					
					calendar.redraw();
				}
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsAnni");
			dataSet_1.parseData({
				"columns" : [
					{"name": "label"},
					{"name": "value"},
					{"name": "start"},
					{"name": "end"},
					{"name": "description"}
				]
			});
			app.register(dataSet_1);
			var submission_1 = new cpr.protocols.Submission("subOnLoad");
			submission_1.action = "CalendarSample/calendarSampleData.json";
			submission_1.addResponseData(dataSet_1, false);
			if(typeof onSubOnLoadSubmitDone == "function") {
				submission_1.addEventListener("submit-done", onSubOnLoadSubmitDone);
			}
			app.register(submission_1);
			app.supportMedia("all and (min-width: 1024px)", "default");
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
			var calendar_1 = new cpr.controls.Calendar("calendar");
			calendar_1.headerVisible = false;
			calendar_1.footerVisible = false;
			calendar_1.showAnniversary = true;
			(function(calendar_1){
				calendar_1.setItemSet(app.lookup("dsAnni"), {
					"label": "label",
					"value": "value",
					"tooltip": "label",
					"start": "start",
					"end": "end"
				});
			})(calendar_1);
			if(typeof onCalendarItemClick == "function") {
				calendar_1.addEventListener("item-click", onCalendarItemClick);
			}
			if(typeof onCalendarNavigate == "function") {
				calendar_1.addEventListener("navigate", onCalendarNavigate);
			}
			if(typeof onCalendarDateClick == "function") {
				calendar_1.addEventListener("date-click", onCalendarDateClick);
			}
			container.addChild(calendar_1, {
				"top": "310px",
				"right": "20px",
				"bottom": "20px",
				"left": "20px"
			});
			
			var group_1 = new cpr.controls.Container();
			group_1.style.setClasses(["cl-form-group"]);
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "1px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["1fr", "1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var button_1 = new cpr.controls.Button();
				button_1.tooltip = "이전 월 이동";
				button_1.value = "◀";
				button_1.style.setClasses(["btn-square"]);
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var button_2 = new cpr.controls.Button();
				button_2.tooltip = "다음 월 이동";
				button_2.value = "▶";
				button_2.style.setClasses(["btn-square"]);
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "270px",
				"left": "20px",
				"width": "140px",
				"height": "30px"
			});
			
			var output_1 = new cpr.controls.Output("optMonth");
			output_1.style.setClasses(["fw-bold", "text-primary"]);
			output_1.style.css({
				"font-size" : "18px"
			});
			output_1.bind("value").toExpression("getMonth()");
			container.addChild(output_1, {
				"top": "270px",
				"right": "100px",
				"left": "170px",
				"height": "28px"
			});
			
			var button_3 = new cpr.controls.Button();
			button_3.value = "today";
			if(typeof onButtonClick3 == "function") {
				button_3.addEventListener("click", onButtonClick3);
			}
			container.addChild(button_3, {
				"top": "270px",
				"right": "20px",
				"width": "70px",
				"height": "28px"
			});
			
			var output_2 = new cpr.controls.Output();
			output_2.value = "eXBuilder6 에서 제공하는 캘린더 컨트롤로 구성한 일정관리 화면입니다.\r\n\r\n캘린더에는 anniversary, item, more 세 가지 항목을 추가 할 수 있습니다.\r\n- anniversary : 기념일, 스크립트를 통해 추가 할 수 있습니다.\r\n- item : 일정 관련 아이템, 스크립트 및 데이터셋 바인딩을 통해 추가 할 수 있습니다.\r\n- more : 기념일과 아이템이 날짜칸 대비 개수가 많을 경우 'n개 더보기' 항목이 생성됩니다.\r\n자세한 설정은 스크립트 및 캘린더 속성창을 통해 확인하십시오.\r\n\r\n아래 캘린더의 날짜 및 각 아이템을 클릭하여 동작을 확인하십시오.\r\n- 날짜를 선택하면 새 일정 등록 다이얼로그가 오픈됩니다.\r\n- 기념일이 아닌 이미 지정된 일정(아이템)을 클릭하면 수정 다이얼로그가 오픈됩니다.\r\n- n개 더보기 항목 클릭시 해당 날짜에 등록된 일정 리스트 다이얼로그가 오픈됩니다.";
			output_2.style.setClasses(["bg-gray-dim", "rounded"]);
			output_2.style.css({
				"padding-top" : "10px",
				"padding-left" : "10px",
				"padding-bottom" : "10px",
				"padding-right" : "10px"
			});
			container.addChild(output_2, {
				"top": "7px",
				"right": "232px",
				"left": "20px",
				"height": "252px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "Calendar";
	cpr.core.Platform.INSTANCE.register(app);
})();
