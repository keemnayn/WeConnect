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
			function onBodyInit(e) {
				app.lookup("proposalListSub").send();
				var comboBox = app.lookup("cmb1");
				comboBox.fieldLabel = "전체";
				comboBox.value = "all";
			}

			/*
			 * "처리" 버튼(updateStatusBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onUpdateStatusBtnClick(e) {
				var updateStatusBtn = e.control;
				var grid = app.lookup("proposalGrd");
				var checkRowIndices = grid.getCheckRowIndices();
				if (checkRowIndices.length === 1) {
					if (confirm("처리완료 하시겠습니까?")) {
						grid.deleteRow(checkRowIndices);
						app.lookup("updateStatusSub").send();
					}
				} else if (checkRowIndices.length === 0) {
					alert("하나 이상 선택하셔야 합니다.");
				} else {
					alert("처리는 하나씩만 가능합니다.");
				}
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onUpdateStatusSubSubmitSuccess(e) {
				var updateStatusSub = e.control;
				app.lookup("updateStatusSub").send();
				app.lookup("proposalListSub").send();
				app.lookup("proposalGrd").redraw();
			}

			/*
			 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onDeleteBtnClick(e) {
				var deleteBtn = e.control;
				var grid = app.lookup("proposalGrd");
				var checkRowIndices = grid.getCheckRowIndices();
				if (checkRowIndices.length > 0) {
					if (confirm("선택한 건의사항을 삭제하시겠습니까?")) {
						grid.deleteRow(checkRowIndices);
						app.lookup("deleteProposalSub").send();
					}
				} else {
					alert("건의사항을 선택해주세요");
				}
			}

			/*
			 * 서브미션에서 submit-done 이벤트 발생 시 호출.
			 * 응답처리가 모두 종료되면 발생합니다.
			 */
			function onDeleteProposalSubSubmitDone(e) {
				var deleteProposalSub = e.control;
				app.lookup("deleteProposalSub").send();
			}

			/*
			 * 서치 인풋에서 search 이벤트 발생 시 호출.
			 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
			 */
			function onSearchInputSearch(e) {
				var searchInput = e.control;
				var submission = app.lookup("searchProposalSub");
				submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSearchProposalSubSubmitSuccess(e) {
				var searchProposalSub = e.control;
				app.lookup("proposalGrd").redraw();
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("proposalSearch");
			dataSet_1.parseData({
				"columns": [
					{"name": "type"},
					{"name": "value"}
				],
				"rows": [
					{"type": "전체", "value": "all"},
					{"type": "제목", "value": "title"},
					{"type": "내용", "value": "content"},
					{"type": "상태", "value": "status"}
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
			submission_2.action = "admin/proposals/search";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_2, false);
			if(typeof onSearchProposalSubSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onSearchProposalSubSubmitSuccess);
			}
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("updateStatusSub");
			submission_3.method = "put";
			submission_3.action = "admin/proposals";
			submission_3.addRequestData(dataSet_2);
			if(typeof onUpdateStatusSubSubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onUpdateStatusSubSubmitSuccess);
			}
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("deleteProposalSub");
			submission_4.method = "delete";
			submission_4.action = "admin/proposals";
			submission_4.addRequestData(dataSet_2);
			if(typeof onDeleteProposalSubSubmitDone == "function") {
				submission_4.addEventListener("submit-done", onDeleteProposalSubSubmitDone);
			}
			app.register(submission_4);
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
						var button_1 = new cpr.controls.Button("deleteBtn");
						button_1.value = "삭제";
						if(typeof onDeleteBtnClick == "function") {
							button_1.addEventListener("click", onDeleteBtnClick);
						}
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
					var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("searchParam"));
					comboBox_1.setBindContext(dataMapContext_1);
					comboBox_1.bind("value").toDataMap(app.lookup("searchParam"), "searchType");
					(function(comboBox_1){
						comboBox_1.setItemSet(app.lookup("proposalSearch"), {
							"label": "type",
							"value": "value"
						});
					})(comboBox_1);
					container.addChild(comboBox_1, {
						"top": "10px",
						"right": "520px",
						"width": "100px",
						"height": "30px"
					});
					var searchInput_1 = new cpr.controls.SearchInput();
					var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("searchParam"));
					searchInput_1.setBindContext(dataMapContext_2);
					searchInput_1.bind("value").toDataMap(app.lookup("searchParam"), "searchText");
					if(typeof onSearchInputValueChange == "function") {
						searchInput_1.addEventListener("value-change", onSearchInputValueChange);
					}
					if(typeof onSearchInputSearch == "function") {
						searchInput_1.addEventListener("search", onSearchInputSearch);
					}
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
