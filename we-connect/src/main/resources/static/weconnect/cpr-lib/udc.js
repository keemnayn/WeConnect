/// start - udc.FreeBoardCommentUdc
/*
 * UDC Qualified Name: udc.FreeBoardCommentUdc
 * App URI: udc/FreeBoardCommentUdc
 * Source Location: udc/FreeBoardCommentUdc.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/FreeBoardCommentUdc", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * FreeBoardCommentUbc.js
				 * Created at 2023. 8. 24. 오전 10:42:12.
				 *
				 * @author chwec
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function() {
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};
				/*
				 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
				 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
				 */
				function onBodyLoad(e) {
					var memberNameOutput = app.lookup("memberName");
					var memberName = app.getAppProperty("memberName");
					memberNameOutput.text = memberName;
					memberNameOutput.redraw();
					
					var freeBoardCommentIdOutput = app.lookup("freeBoardCommentId");
					var freeBoardCommentId = app.getAppProperty("freeBoardCommentId");
					freeBoardCommentIdOutput.text = freeBoardCommentId;
					freeBoardCommentIdOutput.redraw();
					
					var freeBoardCommentDateOutput = app.lookup("freeBoardCommentDate");
					var freeBoardCommentDate = app.getAppProperty("freeBoardCommentDate");
					freeBoardCommentDateOutput.text = freeBoardCommentDate;
					freeBoardCommentDateOutput.redraw();
					
					var freeBoardCommentContentIpb = app.lookup("freeBoardCommentContent");
					var freeBoardCommentContent = app.getAppProperty("freeBoardCommentContent");
					freeBoardCommentContentIpb.text = freeBoardCommentContent;
					
					app.lookup("deleteBtn").visible = app.getAppProperty("deleteBtn");
					app.lookup("updateBtn").visible = app.getAppProperty("updateBtn");
					
				}
	
				/*
				 * "수정" 버튼에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onButtonClick(e) {
					var button = e.control;
					var event = new cpr.events.CAppEvent("updateClick");
					app.dispatchEvent(event);
					
				}
	
				/*
				 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onButtonClick2(e) {
					var button = e.control;
					var event = new cpr.events.CAppEvent("deleteClick");
					app.dispatchEvent(event);
				}
				// End - User Script
				
				// Header
				app.declareAppProperty("memberName", null);
				app.declareAppProperty("freeBoardCommentDate", null);
				app.declareAppProperty("freeBoardCommentContent", null);
				app.declareAppProperty("deleteBtn", null);
				app.declareAppProperty("updateBtn", null);
				app.declareAppProperty("freeBoardCommentId", null);
				app.supportMedia("all and (min-width: 1920px)", "Project");
				app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
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
				var output_1 = new cpr.controls.Output("memberName");
				output_1.value = "Output";
				container.addChild(output_1, {
					"top": "10px",
					"left": "0px",
					"width": "50px",
					"height": "30px"
				});
				
				var output_2 = new cpr.controls.Output("freeBoardCommentDate");
				output_2.value = "Output";
				container.addChild(output_2, {
					"top": "20px",
					"left": "50px",
					"width": "130px",
					"height": "20px"
				});
				
				var button_1 = new cpr.controls.Button("deleteBtn");
				button_1.value = "삭제";
				if(typeof onButtonClick2 == "function") {
					button_1.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_1, {
					"top": "20px",
					"right": "0px",
					"width": "100px",
					"height": "20px"
				});
				
				var button_2 = new cpr.controls.Button("updateBtn");
				button_2.value = "수정";
				if(typeof onButtonClick == "function") {
					button_2.addEventListener("click", onButtonClick);
				}
				container.addChild(button_2, {
					"top": "20px",
					"right": "100px",
					"width": "100px",
					"height": "20px"
				});
				
				var inputBox_1 = new cpr.controls.InputBox("freeBoardCommentContent");
				inputBox_1.readOnly = true;
				container.addChild(inputBox_1, {
					"top": "40px",
					"right": "0px",
					"left": "0px",
					"height": "50px"
				});
				
				var output_3 = new cpr.controls.Output("freeBoardCommentId");
				output_3.value = "Output";
				container.addChild(output_3, {
					"top": "20px",
					"left": "180px",
					"width": "100px",
					"height": "20px"
				});
				if(typeof onBodyLoad == "function"){
					app.addEventListener("load", onBodyLoad);
				}
			}
		});
	internalApp.title = "FreeBoardCommentUdc";
	
	// Type declaration for FreeBoardCommentUdc
	cpr.utils.Util.ensurePackage("udc").FreeBoardCommentUdc = function(id){
		cpr.controls.UDCBase.call(this, "udc.FreeBoardCommentUdc", internalApp, id);
	};
	
	udc.FreeBoardCommentUdc.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "type", {
		get : function(){
			return "udc.FreeBoardCommentUdc";
		},
		
		configurable: true
	});
	
	// App Properties
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "memberName", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("memberName");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("memberName", newValue, true);
		}
	});
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "freeBoardCommentDate", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("freeBoardCommentDate");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("freeBoardCommentDate", newValue, true);
		}
	});
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "freeBoardCommentContent", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("freeBoardCommentContent");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("freeBoardCommentContent", newValue, true);
		}
	});
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "deleteBtn", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("deleteBtn");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("deleteBtn", newValue, true);
		}
	});
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "updateBtn", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("updateBtn");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("updateBtn", newValue, true);
		}
	});
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "freeBoardCommentId", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("freeBoardCommentId");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("freeBoardCommentId", newValue, true);
		}
	});
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.FreeBoardCommentUdc
/// start - udc.myPostList
/*
 * UDC Qualified Name: udc.myPostList
 * App URI: udc/myPostList
 * Source Location: udc/myPostList.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/myPostList", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * myPostList.js
				 * Created at 2023. 8. 24. 오후 4:14:14.
				 *
				 * @author keemn
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};;
				// End - User Script
				
				// Header
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
				var group_1 = new cpr.controls.Container();
				group_1.style.css({
					"background-color" : "#D7E4F2",
					"border-radius" : "20px"
				});
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var output_1 = new cpr.controls.Output();
					output_1.value = "myPostTitle";
					container.addChild(output_1, {
						"top": "20px",
						"left": "20px",
						"width": "220px",
						"height": "20px"
					});
					var output_2 = new cpr.controls.Output();
					output_2.value = "myPostContent";
					container.addChild(output_2, {
						"top": "50px",
						"left": "20px",
						"width": "220px",
						"height": "254px"
					});
				})(group_1);
				container.addChild(group_1, {
					"top": "20px",
					"left": "20px",
					"width": "260px",
					"height": "324px"
				});
			}
		});
	internalApp.title = "myPostList";
	
	// Type declaration for myPostList
	cpr.utils.Util.ensurePackage("udc").myPostList = function(id){
		cpr.controls.UDCBase.call(this, "udc.myPostList", internalApp, id);
	};
	
	udc.myPostList.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.myPostList.prototype, "type", {
		get : function(){
			return "udc.myPostList";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.myPostList
/// start - udc.search
/*
 * UDC Qualified Name: udc.search
 * App URI: udc/search
 * Source Location: udc/search.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/search", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
	
				/*
				 * "Search" 버튼에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onButtonClick(/* cpr.events.CMouseEvent */ e){
					var event = new cpr.events.CUIEvent("search");
					app.dispatchEvent(event);
				};
				// End - User Script
				
				// Header
				app.declareAppProperty("searchWord", null);
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
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.bind("value").toAppProperty("searchWord");
				container.addChild(inputBox_1, {
					"top": "0px",
					"right": "90px",
					"bottom": "0px",
					"left": "0px"
				});
				
				var button_1 = new cpr.controls.Button();
				button_1.value = "Search";
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"top": "0px",
					"right": "0px",
					"bottom": "0px",
					"width": "80px"
				});
			}
		});
	internalApp.title = "search";
	
	// Type declaration for search
	cpr.utils.Util.ensurePackage("udc").search = function(id){
		cpr.controls.UDCBase.call(this, "udc.search", internalApp, id);
	};
	
	udc.search.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.search.prototype, "type", {
		get : function(){
			return "udc.search";
		},
		
		configurable: true
	});
	
	// App Properties
	Object.defineProperty(udc.search.prototype, "searchWord", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("searchWord");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("searchWord", newValue, true);
		}
	});
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.search
/// start - udc.TeamPostUdc
/*
 * UDC Qualified Name: udc.TeamPostUdc
 * App URI: udc/TeamPostUdc
 * Source Location: udc/TeamPostUdc.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/TeamPostUdc", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * teamPostUdc.js
				 * Created at 2023. 8. 21. 오전 3:28:51.
				 *
				 * @author keemn
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};;
				// End - User Script
				
				// Header
				var dataSet_1 = new cpr.data.DataSet("teamPostList");
				dataSet_1.parseData({
					"columns": [
						{"name": "teamPostId"},
						{
							"name": "teamPostTitle",
							"dataType": "string"
						},
						{"name": "teamPostContent"},
						{"name": "teamPostCreateDate"},
						{"name": "memberName"},
						{
							"name": "projectName",
							"dataType": "string"
						}
					],
					"rows": []
				});
				app.register(dataSet_1);
				
				var dataSet_2 = new cpr.data.DataSet("comment");
				dataSet_2.parseData({
					"columns": [
						{"name": "memberId"},
						{"name": "memberName"},
						{"name": "teamPostComment"},
						{"name": "date"}
					],
					"rows": [{"memberId": "1", "memberName": "최훈", "teamPostComment": "유익한 정보 감사합니다!", "date": "2023-08-18"}]
				});
				app.register(dataSet_2);
				app.supportMedia("all and (min-width: 1580px)", "new-screen");
				app.supportMedia("all and (min-width: 1024px) and (max-width: 1579px)", "default");
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
				var dataRowContext_1 = new cpr.bind.DataRowContext(app.lookup("comment"), 0);
				container.setBindContext(dataRowContext_1);
				
				// Layout
				var xYLayout_1 = new cpr.controls.layouts.XYLayout();
				container.setLayout(xYLayout_1);
				
				// UI Configuration
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.placeholder = "댓글 달기";
				inputBox_1.style.css({
					"border-right-style" : "none",
					"color" : "#7D7878",
					"border-bottom-color" : "#ffffff",
					"border-left-style" : "none",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-bottom-style" : "none",
					"border-right-color" : "#ffffff",
					"font-family" : "IBM Plex Sans KR",
					"border-top-style" : "none"
				});
				container.addChild(inputBox_1, {
					"top": "310px",
					"left": "13px",
					"width": "1450px",
					"height": "50px"
				});
				
				var button_1 = new cpr.controls.Button();
				button_1.value = "등록";
				button_1.style.css({
					"font-family" : "IBM Plex Sans KR"
				});
				container.addChild(button_1, {
					"top": "330px",
					"left": "1475px",
					"width": "45px",
					"height": "40px"
				});
				
				var image_1 = new cpr.controls.Image();
				image_1.src = "img/member/attach-file.png";
				image_1.style.css({
					"font-family" : "IBM Plex Sans KR"
				});
				container.addChild(image_1, {
					"top": "291px",
					"left": "1475px",
					"width": "20px",
					"height": "20px"
				});
				
				var image_2 = new cpr.controls.Image();
				image_2.src = "img/member/bookmark-white.png";
				image_2.style.css({
					"font-family" : "IBM Plex Sans KR"
				});
				container.addChild(image_2, {
					"top": "291px",
					"left": "1500px",
					"width": "20px",
					"height": "20px"
				});
				
				var group_1 = new cpr.controls.Container();
				group_1.style.css({
					"background-color" : "#D7E4F2",
					"border-radius" : "20px"
				});
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var output_1 = new cpr.controls.Output();
					output_1.bind("value").toDataSet(app.lookup("comment"), "memberName", 0);
					container.addChild(output_1, {
						"top": "20px",
						"left": "20px",
						"width": "100px",
						"height": "30px"
					});
					var output_2 = new cpr.controls.Output();
					output_2.style.css({
						"border-radius" : "20px"
					});
					output_2.bind("value").toDataSet(app.lookup("comment"), "teamPostComment", 0);
					container.addChild(output_2, {
						"top": "49px",
						"left": "20px",
						"width": "1500px",
						"height": "100px"
					});
					var output_3 = new cpr.controls.Output();
					output_3.bind("value").toDataSet(app.lookup("comment"), "date", 0);
					container.addChild(output_3, {
						"top": "20px",
						"left": "119px",
						"width": "100px",
						"height": "30px"
					});
				})(group_1);
				container.addChild(group_1, {
					"top": "380px",
					"left": "10px",
					"width": "1545px",
					"height": "170px"
				});
				
				var group_2 = new cpr.controls.Container();
				var dataRowContext_2 = new cpr.bind.DataRowContext(app.lookup("teamPostList"), 0);
				group_2.setBindContext(dataRowContext_2);
				var xYLayout_3 = new cpr.controls.layouts.XYLayout();
				group_2.setLayout(xYLayout_3);
				(function(container){
					var output_4 = new cpr.controls.Output("memberName");
					output_4.bind("value").toDataSet(app.lookup("teamPostList"), "memberName", 0);
					container.addChild(output_4, {
						"top": "19px",
						"left": "19px",
						"width": "100px",
						"height": "30px"
					});
					var output_5 = new cpr.controls.Output("teamPostCreate");
					output_5.bind("value").toDataSet(app.lookup("teamPostList"), "teamPostCreateDate", 0);
					container.addChild(output_5, {
						"top": "19px",
						"left": "128px",
						"width": "220px",
						"height": "30px"
					});
					var textArea_1 = new cpr.controls.TextArea("teamPostContent");
					textArea_1.style.css({
						"border-right-style" : "none",
						"border-left-style" : "none",
						"border-bottom-style" : "none",
						"font-family" : "IBM Plex Sans KR",
						"border-top-style" : "none"
					});
					textArea_1.bind("value").toDataSet(app.lookup("teamPostList"), "teamPostContent", 0);
					container.addChild(textArea_1, {
						"top": "100px",
						"left": "19px",
						"width": "1520px",
						"height": "150px"
					});
					var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
					hTMLSnippet_1.style.css({
						"border-right-style" : "none",
						"color" : "#010101",
						"border-bottom-color" : "#686565",
						"font-weight" : "normal",
						"border-left-color" : "#686565",
						"font-size" : "14px",
						"border-right-color" : "#686565",
						"font-style" : "normal",
						"border-top-style" : "none",
						"border-left-style" : "none",
						"border-top-color" : "#686565",
						"font-family" : "IBM Plex Sans KR",
						"border-bottom-style" : "none",
						"text-align" : "right"
					});
					hTMLSnippet_1.bind("value").toDataSet(app.lookup("teamPostList"), "projectName", 0);
					container.addChild(hTMLSnippet_1, {
						"top": "19px",
						"left": "1419px",
						"width": "100px",
						"height": "30px"
					});
					var output_6 = new cpr.controls.Output("teamPostTitle");
					output_6.bind("value").toDataSet(app.lookup("teamPostList"), "teamPostTitle", 0);
					container.addChild(output_6, {
						"top": "57px",
						"left": "18px",
						"width": "1520px",
						"height": "30px"
					});
				})(group_2);
				container.addChild(group_2, {
					"top": "10px",
					"left": "13px",
					"width": "1540px",
					"height": "260px"
				});
			}
		});
	internalApp.title = "TeamPostUdc";
	
	// Type declaration for TeamPostUdc
	cpr.utils.Util.ensurePackage("udc").TeamPostUdc = function(id){
		cpr.controls.UDCBase.call(this, "udc.TeamPostUdc", internalApp, id);
	};
	
	udc.TeamPostUdc.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.TeamPostUdc.prototype, "type", {
		get : function(){
			return "udc.TeamPostUdc";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.TeamPostUdc
