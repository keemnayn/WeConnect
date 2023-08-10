/*
 * App URI: user/BoardWriteForm
 * Source Location: user/BoardWriteForm.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("user/BoardWriteForm", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * BoardWriteForm.js
			 * Created at 2023. 8. 9. 오전 9:59:36.
			 *
			 * @author chwec
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("boardForm");
			dataSet_1.parseData({
				"columns": [
					{"name": "boardNo"},
					{
						"name": "empName",
						"dataType": "string"
					},
					{"name": "title"},
					{"name": "content"},
					{"name": "file"}
				],
				"rows": [{"boardNo": "boardNo1", "empName": "empName1", "title": "title1", "content": "content1", "file": "file1"}]
			});
			app.register(dataSet_1);
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			var dataRowContext_1 = new cpr.bind.DataRowContext(app.lookup("boardForm"), 0);
			container.setBindContext(dataRowContext_1);
			
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
			formLayout_1.setColumns(["100px", "150px", "100px", "1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "작성자";
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "제목";
				container.addChild(output_2, {
					"colIndex": 2,
					"rowIndex": 0
				});
				var output_3 = new cpr.controls.Output();
				output_3.bind("value").toDataColumn("empName");
				container.addChild(output_3, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.bind("value").toDataColumn("title");
				container.addChild(inputBox_1, {
					"colIndex": 3,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "0px",
				"left": "0px",
				"width": "1580px",
				"height": "50px"
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
			formLayout_2.setColumns(["100px", "1fr"]);
			formLayout_2.setRows(["1fr"]);
			group_2.setLayout(formLayout_2);
			(function(container){
				var output_4 = new cpr.controls.Output();
				output_4.value = "내용";
				container.addChild(output_4, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb2");
				inputBox_2.bind("value").toDataColumn("content");
				container.addChild(inputBox_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_2);
			container.addChild(group_2, {
				"top": "50px",
				"bottom": "145px",
				"left": "0px",
				"width": "1580px"
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
			formLayout_3.setColumns(["100px", "1fr"]);
			formLayout_3.setRows(["1fr"]);
			group_3.setLayout(formLayout_3);
			(function(container){
				var fileInput_1 = new cpr.controls.FileInput("fi1");
				container.addChild(fileInput_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "파일 첨부";
				container.addChild(output_5, {
					"colIndex": 0,
					"rowIndex": 0
				});
			})(group_3);
			container.addChild(group_3, {
				"bottom": "100px",
				"left": "0px",
				"width": "1580px",
				"height": "50px"
			});
			
			var group_4 = new cpr.controls.Container();
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_4.setLayout(xYLayout_2);
			(function(container){
				var button_1 = new cpr.controls.Button();
				button_1.value = "취소";
				container.addChild(button_1, {
					"right": "675px",
					"bottom": "20px",
					"width": "100px",
					"height": "30px"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "등록";
				container.addChild(button_2, {
					"bottom": "20px",
					"left": "665px",
					"width": "100px",
					"height": "30px"
				});
			})(group_4);
			container.addChild(group_4, {
				"bottom": "0px",
				"left": "0px",
				"width": "1580px",
				"height": "100px"
			});
		}
	});
	app.title = "BoardWriteForm";
	cpr.core.Platform.INSTANCE.register(app);
})();
