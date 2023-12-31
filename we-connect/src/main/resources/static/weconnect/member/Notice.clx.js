/*
 * App URI: member/Notice
 * Source Location: member/Notice.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/Notice", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * notice.js
			 * Created at 2023. 8. 5. 오후 7:26:53.
			 *
			 * @author Axl Rose
			 ************************************************/

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e){
				app.lookup("noticeListSub").send();
				var comboBox = app.lookup("searchTypeCmb");	
				comboBox.fieldLabel = "전체";
				comboBox.value = "all";
				
			}

			/*
			 * 서치 인풋에서 search 이벤트 발생 시 호출.
			 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
			 */
			function onSearchIpbSearch(e){
				var searchIpb = e.control;
				app.lookup("searchNoticeSub").send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSearchNoticeSubSubmitSuccess(e){
				var searchNoticeSub = e.control;
				app.lookup("noticeGrd").redraw();
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("noticeList");
			dataSet_1.parseData({
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
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("noticeSearch");
			dataSet_2.parseData({
				"columns": [
					{"name": "type"},
					{"name": "value"}
				],
				"rows": [
					{"type": "전체", "value": "all"},
					{"type": "제목", "value": "title"},
					{"type": "분류", "value": "category"}
				]
			});
			app.register(dataSet_2);
			var dataMap_1 = new cpr.data.DataMap("searchParam");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "searchType",
						"dataType": "string"
					},
					{"name": "searchText"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("noticeListSub");
			submission_1.method = "get";
			submission_1.action = "member/notice";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("searchNoticeSub");
			submission_2.method = "get";
			submission_2.action = "member/notice/search";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_1, false);
			if(typeof onSearchNoticeSubSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onSearchNoticeSubSubmitSuccess);
			}
			app.register(submission_2);
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
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
			var grid_1 = new cpr.controls.Grid("noticeGrd");
			grid_1.init({
				"dataSet": app.lookup("noticeList"),
				"columns": [
					{
						"width": "100px",
						"visible": false
					},
					{"width": "20px"},
					{"width": "30px"},
					{"width": "50px"},
					{"width": "20px"}
				],
				"header": {
					"rows": [{"height": "50px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeId";
								cell.text = "noticeId";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeCategory";
								cell.text = "분류";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeTitle";
								cell.text = "제목";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeContent";
								cell.text = "상세 내용";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeCreate";
								cell.text = "등록일";
							}
						}
					]
				},
				"detail": {
					"rows": [{"height": "50px"}],
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
								cell.columnName = "noticeTitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "noticeContent";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.columnName = "noticeCreate";
							}
						}
					]
				}
			});
			grid_1.style.header.css({
				"font-weight" : "700",
				"background-image" : "none"
			});
			container.addChild(grid_1, {
				"top": "80px",
				"right": "0px",
				"bottom": "100px",
				"left": "0px"
			});
			
			var group_1 = new cpr.controls.Container();
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var searchInput_1 = new cpr.controls.SearchInput("searchIpb");
				searchInput_1.style.css({
					"border-radius" : "8px"
				});
				var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("searchParam"));
				searchInput_1.setBindContext(dataMapContext_1);
				searchInput_1.bind("value").toDataMap(app.lookup("searchParam"), "searchText");
				if(typeof onSearchIpbSearch == "function") {
					searchInput_1.addEventListener("search", onSearchIpbSearch);
				}
				container.addChild(searchInput_1, {
					"top": "0px",
					"right": "0px",
					"width": "560px",
					"height": "30px"
				});
				var comboBox_1 = new cpr.controls.ComboBox("searchTypeCmb");
				comboBox_1.style.css({
					"border-radius" : "8px",
					"text-align" : "center"
				});
				var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("searchParam"));
				comboBox_1.setBindContext(dataMapContext_2);
				comboBox_1.bind("value").toDataMap(app.lookup("searchParam"), "searchType");
				(function(comboBox_1){
					comboBox_1.setItemSet(app.lookup("noticeSearch"), {
						"label": "type",
						"value": "value"
					});
				})(comboBox_1);
				container.addChild(comboBox_1, {
					"top": "0px",
					"right": "560px",
					"width": "100px",
					"height": "30px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "40px",
				"width": "660px",
				"height": "30px",
				"left": "calc(50% - 330px)"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "Notice";
	cpr.core.Platform.INSTANCE.register(app);
})();
