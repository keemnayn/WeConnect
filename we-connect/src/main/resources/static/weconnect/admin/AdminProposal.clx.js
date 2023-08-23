/*
 * App URI: admin/AdminProposal
 * Source Location: admin/AdminProposal.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("admin/AdminProposal", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * adminSuggestions.js
			 * Created at 2023. 8. 9. 오전 10:06:52.
			 *
			 * @author Axl Rose
			 ************************************************/

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e){
				app.lookup("proposalListSub").send();
			}

			/*
			 * "처리" 버튼(updateStatusBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onUpdateStatusBtnClick(e){
				var updateStatusBtn = e.control;
				var grid=app.lookup("proposalGrd");
				var checkRowIndices = grid.getCheckRowIndices();
				if (checkRowIndices.length == 1) {
					if(confirm("처리완료 하시겠습니까?")) {
						grid.updateRow(checkRowIndices);
						app.lookup("updateStateSub").send();
					}
				} else {
					alert("처리는 하나의 열만 선택 가능합니다");
				}
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("proposalSearch");
			dataSet_1.parseData({
				"columns": [{"name": "type"}],
				"rows": [
					{"type": "전체"},
					{"type": "제목"},
					{"type": "분류"},
					{"type": "상태"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("proposalList");
			dataSet_2.parseData({
				"columns": [
					{"name": "proposalId"},
					{"name": "proposalTitle"},
					{"name": "proposalContent"},
					{"name": "memberId"},
					{"name": "proposalCreate"},
					{"name": "proposalStatus"}
				],
				"rows": []
			});
			app.register(dataSet_2);
			var dataMap_1 = new cpr.data.DataMap("searchParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "searchType"},
					{"name": "searchText"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("proposalListSub");
			submission_1.method = "get";
			submission_1.action = "member/proposals";
			submission_1.addResponseData(dataSet_2, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("searchProposalSub");
			submission_2.method = "get";
			submission_2.action = "member/proposals/search";
			submission_2.addResponseData(dataSet_2, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("updateStateSub");
			submission_3.method = "put";
			submission_3.action = "admin/proposals";
			submission_3.addRequestData(dataSet_2);
			app.register(submission_3);
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
			var tabFolder_1 = new cpr.controls.TabFolder();
			
			var tabItem_1 = (function(tabFolder){
				var tabItem_1 = new cpr.controls.TabItem();
				tabItem_1.text = "건의사항관리";
				var group_1 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var grid_1 = new cpr.controls.Grid("proposalGrd");
					grid_1.init({
						"dataSet": app.lookup("proposalList"),
						"columns": [
							{"width": "25px"},
							{"width": "39px"},
							{"width": "308px"},
							{"width": "356px"},
							{
								"width": "98px",
								"visible": false
							},
							{"width": "68px"},
							{"width": "77px"}
						],
						"header": {
							"rows": [{"height": "24px"}],
							"cells": [
								{
									"constraint": {"rowIndex": 0, "colIndex": 0},
									"configurator": function(cell){
										cell.columnType = "checkbox";
										cell.filterable = false;
										cell.sortable = false;
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "proposalId";
										cell.text = "번호";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "proposalTitle";
										cell.text = "제목";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "proposalContent";
										cell.text = "내용";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "memberId";
										cell.text = "작성자";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "proposalCreate";
										cell.text = "등록일";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "proposalStatus";
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
										cell.columnType = "checkbox";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.columnName = "proposalId";
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
										cell.columnName = "proposalContent";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.columnName = "memberId";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.columnName = "proposalCreate";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
									"configurator": function(cell){
										cell.columnName = "proposalStatus";
									}
								}
							]
						}
					});
					container.addChild(grid_1, {
						"top": "50px",
						"right": "0px",
						"bottom": "0px",
						"left": "0px"
					});
					var group_2 = new cpr.controls.Container();
					var formLayout_1 = new cpr.controls.layouts.FormLayout();
					formLayout_1.scrollable = false;
					formLayout_1.topMargin = "5px";
					formLayout_1.rightMargin = "5px";
					formLayout_1.bottomMargin = "5px";
					formLayout_1.leftMargin = "5px";
					formLayout_1.horizontalSpacing = "10px";
					formLayout_1.verticalSpacing = "10px";
					formLayout_1.setColumns(["1fr", "1fr"]);
					formLayout_1.setRows(["1fr"]);
					group_2.setLayout(formLayout_1);
					(function(container){
						var button_1 = new cpr.controls.Button();
						button_1.value = "삭제";
						container.addChild(button_1, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var button_2 = new cpr.controls.Button("updateStatusBtn");
						button_2.value = "처리";
						if(typeof onUpdateStatusBtnClick == "function") {
							button_2.addEventListener("click", onUpdateStatusBtnClick);
						}
						container.addChild(button_2, {
							"colIndex": 0,
							"rowIndex": 0,
							"colSpan": 1,
							"rowSpan": 1
						});
					})(group_2);
					container.addChild(group_2, {
						"top": "5px",
						"right": "0px",
						"width": "200px",
						"height": "40px"
					});
					var comboBox_1 = new cpr.controls.ComboBox("cmb1");
					comboBox_1.bind("value").toDataSet(app.lookup("proposalSearch"), "type", 0);
					(function(comboBox_1){
						comboBox_1.setItemSet(app.lookup("proposalSearch"), {
							"label": "type",
							"value": "type"
						});
					})(comboBox_1);
					container.addChild(comboBox_1, {
						"top": "10px",
						"right": "520px",
						"width": "100px",
						"height": "30px"
					});
					var searchInput_1 = new cpr.controls.SearchInput();
					searchInput_1.bind("value").toDataMap(app.lookup("searchParam"), "searchText");
					container.addChild(searchInput_1, {
						"top": "10px",
						"right": "220px",
						"width": "280px",
						"height": "30px"
					});
				})(group_1);
				tabItem_1.content = group_1;
				return tabItem_1;
			})(tabFolder_1);
			tabFolder_1.addTabItem(tabItem_1);
			tabFolder_1.setSelectedTabItem(tabItem_1);
			container.addChild(tabFolder_1, {
				"top": "20px",
				"right": "5px",
				"bottom": "0px",
				"left": "0px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "AdminProposal";
	cpr.core.Platform.INSTANCE.register(app);
})();
