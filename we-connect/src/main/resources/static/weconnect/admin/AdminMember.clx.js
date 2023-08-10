/*
 * App URI: admin/AdminMember
 * Source Location: admin/AdminMember.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("admin/AdminMember", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * adminMember.js
			 * Created at 2023. 8. 9. 오전 9:55:22.
			 *
			 * @author Axl Rose
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("memberList");
			dataSet_1.parseData({
				"columns": [
					{"name": "id"},
					{"name": "email"},
					{"name": "name"},
					{
						"name": "date",
						"dataType": "string"
					},
					{"name": "grade"}
				],
				"rows": [
					{"id": "1", "email": "a@gmail.com", "name": "박해준", "date": "2023-03-27", "grade": "사원"},
					{"id": "2", "email": "b@gmail.com", "name": "김정현", "date": "2023-03-27", "grade": "사원"},
					{"id": "3", "email": "c@gmail.com", "name": "김나연", "date": "2023-03-27", "grade": "사원"},
					{"id": "4", "email": "d@gmail.com", "name": "최수연", "date": "2023-03-27", "grade": "사원"},
					{"id": "5", "email": "e@gmail.com", "name": "서정우", "date": "2023-03-27", "grade": "강사"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("registerList");
			dataSet_2.parseData({
				"columns": [
					{"name": "name"},
					{"name": "email"},
					{
						"name": "date",
						"dataType": "string"
					},
					{"name": "grade"}
				],
				"rows": [
					{"name": "name1", "email": "f@gmail.com", "date": "2023-08-08", "grade": "사원"},
					{"name": "name2", "email": "g@gmail.com", "date": "2023-08-08", "grade": "사원"},
					{"name": "name3", "email": "h@gmail.com", "date": "2023-08-08", "grade": "사원"},
					{"name": "name4", "email": "i@gmail.com", "date": "2023-08-08", "grade": "사원"}
				]
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("search");
			dataSet_3.parseData({
				"columns": [{"name": "search"}],
				"rows": [
					{"search": "전체"},
					{"search": "이름"},
					{"search": "직급"}
				]
			});
			app.register(dataSet_3);
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
				tabItem_1.text = "회원명단";
				var group_1 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var grid_1 = new cpr.controls.Grid("grd1");
					grid_1.init({
						"dataSet": app.lookup("memberList"),
						"columns": [
							{"width": "25px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"}
						],
						"header": {
							"rows": [{"height": "50px"}],
							"cells": [
								{
									"constraint": {"rowIndex": 0, "colIndex": 0},
									"configurator": function(cell){
										cell.columnType = "checkbox";
										cell.filterable = false;
										cell.sortable = false;
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "email";
										cell.text = "이메일";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "name";
										cell.text = "이름";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "date";
										cell.text = "입사일";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "grade";
										cell.text = "직급";
										cell.style.css({
											"text-align" : "center"
										});
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
										cell.columnType = "checkbox";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.columnName = "email";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_1 = new cpr.controls.Output();
											output_1.style.css({
												"text-align" : "center"
											});
											output_1.bind("value").toDataColumn("email");
											return output_1;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.columnName = "name";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_2 = new cpr.controls.Output();
											output_2.style.css({
												"text-align" : "center"
											});
											output_2.bind("value").toDataColumn("name");
											return output_2;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.columnName = "date";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_3 = new cpr.controls.Output();
											output_3.dateValueFormat = "YYYYMMDDHHmmssSSS";
											output_3.style.css({
												"text-align" : "center"
											});
											output_3.bind("value").toDataColumn("date");
											return output_3;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.columnName = "grade";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_4 = new cpr.controls.Output();
											output_4.style.css({
												"text-align" : "center"
											});
											output_4.bind("value").toDataColumn("grade");
											return output_4;
										})();
										cell.controlConstraint = {};
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
					var comboBox_1 = new cpr.controls.ComboBox("cmb1");
					comboBox_1.value = "전체";
					(function(comboBox_1){
						comboBox_1.setItemSet(app.lookup("search"), {
							"label": "search",
							"value": "search"
						});
					})(comboBox_1);
					container.addChild(comboBox_1, {
						"top": "10px",
						"right": "520px",
						"width": "100px",
						"height": "30px"
					});
					var searchInput_1 = new cpr.controls.SearchInput();
					container.addChild(searchInput_1, {
						"top": "10px",
						"right": "220px",
						"width": "280px",
						"height": "30px"
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
					formLayout_1.setColumns(["1fr", "1fr", "1fr"]);
					formLayout_1.setRows(["1fr"]);
					group_2.setLayout(formLayout_1);
					(function(container){
						var button_1 = new cpr.controls.Button();
						button_1.value = "수정";
						container.addChild(button_1, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var button_2 = new cpr.controls.Button();
						button_2.value = "삭제";
						container.addChild(button_2, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var button_3 = new cpr.controls.Button();
						button_3.value = "저장";
						container.addChild(button_3, {
							"colIndex": 2,
							"rowIndex": 0
						});
					})(group_2);
					container.addChild(group_2, {
						"top": "5px",
						"right": "0px",
						"width": "200px",
						"height": "40px"
					});
				})(group_1);
				tabItem_1.content = group_1;
				return tabItem_1;
			})(tabFolder_1);
			tabFolder_1.addTabItem(tabItem_1);
			
			var tabItem_2 = (function(tabFolder){
				var tabItem_2 = new cpr.controls.TabItem();
				tabItem_2.text = "회원승인";
				var group_3 = new cpr.controls.Container();
				var xYLayout_3 = new cpr.controls.layouts.XYLayout();
				group_3.setLayout(xYLayout_3);
				(function(container){
					var grid_2 = new cpr.controls.Grid("grd2");
					grid_2.init({
						"dataSet": app.lookup("registerList"),
						"columns": [
							{"width": "25px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"}
						],
						"header": {
							"rows": [{"height": "50px"}],
							"cells": [
								{
									"constraint": {"rowIndex": 0, "colIndex": 0},
									"configurator": function(cell){
										cell.columnType = "checkbox";
										cell.filterable = false;
										cell.sortable = false;
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "name";
										cell.text = "이름";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "email";
										cell.text = "이메일";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "date";
										cell.text = "신청일";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "grade";
										cell.text = "직급";
										cell.style.css({
											"text-align" : "center"
										});
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
										cell.columnType = "checkbox";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.columnName = "name";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_5 = new cpr.controls.Output();
											output_5.style.css({
												"text-align" : "center"
											});
											output_5.bind("value").toDataColumn("name");
											return output_5;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.columnName = "email";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_6 = new cpr.controls.Output();
											output_6.style.css({
												"text-align" : "center"
											});
											output_6.bind("value").toDataColumn("email");
											return output_6;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.columnName = "date";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_7 = new cpr.controls.Output();
											output_7.style.css({
												"text-align" : "center"
											});
											output_7.bind("value").toDataColumn("date");
											return output_7;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.columnName = "grade";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_8 = new cpr.controls.Output();
											output_8.style.css({
												"text-align" : "center"
											});
											output_8.bind("value").toDataColumn("grade");
											return output_8;
										})();
										cell.controlConstraint = {};
									}
								}
							]
						}
					});
					container.addChild(grid_2, {
						"top": "50px",
						"right": "0px",
						"bottom": "0px",
						"left": "0px"
					});
					var group_4 = new cpr.controls.Container();
					var formLayout_2 = new cpr.controls.layouts.FormLayout();
					formLayout_2.scrollable = false;
					formLayout_2.topMargin = "5px";
					formLayout_2.rightMargin = "5px";
					formLayout_2.bottomMargin = "5px";
					formLayout_2.leftMargin = "5px";
					formLayout_2.horizontalSpacing = "10px";
					formLayout_2.verticalSpacing = "10px";
					formLayout_2.setColumns(["1fr", "1fr", "1fr"]);
					formLayout_2.setRows(["1fr"]);
					group_4.setLayout(formLayout_2);
					(function(container){
						var button_4 = new cpr.controls.Button();
						button_4.value = "승인";
						container.addChild(button_4, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var button_5 = new cpr.controls.Button();
						button_5.value = "거절";
						container.addChild(button_5, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var button_6 = new cpr.controls.Button();
						button_6.value = "저장";
						container.addChild(button_6, {
							"colIndex": 2,
							"rowIndex": 0
						});
					})(group_4);
					container.addChild(group_4, {
						"top": "5px",
						"right": "0px",
						"width": "200px",
						"height": "40px"
					});
					var comboBox_2 = new cpr.controls.ComboBox("cmb2");
					comboBox_2.value = "전체";
					(function(comboBox_2){
						comboBox_2.setItemSet(app.lookup("search"), {
							"label": "search",
							"value": "search"
						});
					})(comboBox_2);
					container.addChild(comboBox_2, {
						"top": "10px",
						"right": "520px",
						"width": "100px",
						"height": "30px"
					});
					var searchInput_2 = new cpr.controls.SearchInput();
					container.addChild(searchInput_2, {
						"top": "10px",
						"right": "220px",
						"width": "280px",
						"height": "30px"
					});
				})(group_3);
				tabItem_2.content = group_3;
				return tabItem_2;
			})(tabFolder_1);
			tabFolder_1.addTabItem(tabItem_2);
			tabFolder_1.setSelectedTabItem(tabItem_1);
			container.addChild(tabFolder_1, {
				"top": "0px",
				"right": "0px",
				"bottom": "0px",
				"left": "0px"
			});
		}
	});
	app.title = "AdminMember";
	cpr.core.Platform.INSTANCE.register(app);
})();
