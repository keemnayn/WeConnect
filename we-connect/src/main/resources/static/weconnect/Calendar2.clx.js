/*
 * App URI: Calendar2
 * Source Location: Calendar2.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("Calendar2", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Calendar.js
			 * Created at 2019. 5. 21. 오후 3:05:45.
			 *
			 * @author jykim
			 ************************************************/



			/*
			 * "일정 추가" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Button
				 */
				var button = e.control;
				var calendar = app.lookup("calendar");
				var dti = app.lookup("dti");
				var name = app.lookup("name");
				calendar.addAnniversary({date:dti.value, label:name.value});

				app.lookup("ds_calendar").addRowData({"date":dti.value, "name":name.value});
				app.lookup("grd1").redraw();

				dti.value="";
				name.value="";
			}


			/*
			 * "일정 삭제" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Button
				 */
				var button = e.control;
				var calendar = app.lookup("calendar");
				var rowIdx = app.lookup("grd1").getSelectedRowIndex();
				var anniversary = calendar.getAnniversary()[rowIdx];
				
				calendar.removeAnniversary(anniversary);
				app.lookup("grd1").deleteRow(rowIdx);
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds_calendar");
			dataSet_1.parseData({
				"columns" : [
					{"name": "date"},
					{"name": "name"}
				]
			});
			app.register(dataSet_1);
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
			container.addChild(calendar_1, {
				"top": "20px",
				"left": "20px",
				"width": "681px",
				"height": "506px"
			});
			
			var group_1 = new cpr.controls.Container();
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.setColumns(["100px", "1fr"]);
			formLayout_1.setColumnMinWidth(1, 120);
			formLayout_1.setRows(["25px", "25px", "25px", "25px", "25px", "1fr", "25px"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "날짜";
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "일정이름";
				container.addChild(output_2, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var inputBox_1 = new cpr.controls.InputBox("name");
				container.addChild(inputBox_1, {
					"colIndex": 1,
					"rowIndex": 1
				});
				var dateInput_1 = new cpr.controls.DateInput("dti");
				container.addChild(dateInput_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var button_1 = new cpr.controls.Button();
				button_1.value = "일정 추가";
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"colIndex": 1,
					"rowIndex": 2
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "일정리스트";
				container.addChild(output_3, {
					"colIndex": 0,
					"rowIndex": 4,
					"colSpan": 2,
					"rowSpan": 1
				});
				var grid_1 = new cpr.controls.Grid("grd1");
				grid_1.readOnly = false;
				grid_1.init({
					"dataSet": app.lookup("ds_calendar"),
					"columnMovable": false,
					"resizableColumns": "none",
					"showDeletedRow": false,
					"columns": [
						{"width": "20px"},
						{"width": "70px"},
						{"width": "150px"}
					],
					"header": {
						"rows": [{"height": "24px"}],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "date";
									cell.text = "날짜";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "name";
									cell.text = "일정명";
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
									cell.columnType = "rowindex";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.columnName = "date";
									cell.control = (function(){
										var dateInput_2 = new cpr.controls.DateInput("dti2");
										dateInput_2.readOnly = true;
										dateInput_2.hideButton = true;
										dateInput_2.style.css({
											"text-align" : "center"
										});
										dateInput_2.bind("value").toDataColumn("date");
										return dateInput_2;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.columnName = "name";
									cell.control = (function(){
										var output_4 = new cpr.controls.Output();
										output_4.value = "Output";
										output_4.bind("value").toDataColumn("name");
										return output_4;
									})();
									cell.controlConstraint = {};
								}
							}
						]
					}
				});
				container.addChild(grid_1, {
					"colIndex": 0,
					"rowIndex": 5,
					"colSpan": 2,
					"rowSpan": 1
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "일정 삭제";
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"colIndex": 1,
					"rowIndex": 6
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "20px",
				"left": "711px",
				"width": "293px",
				"height": "506px"
			});
		}
	});
	app.title = "Calendar2";
	cpr.core.Platform.INSTANCE.register(app);
})();