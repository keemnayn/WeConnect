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
/// start - udc.MyPostUdc
/*
 * UDC Qualified Name: udc.MyPostUdc
 * App URI: udc/MyPostUdc
 * Source Location: udc/MyPostUdc.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/MyPostUdc", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * MyPostList.js
				 * Created at 2023. 8. 29. 오전 3:14:14.
				 *
				 * @author keemn
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};
	
				/*
				 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
				 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
				 */
				function onBodyLoad(e){
					app.lookup("title").text = app.getAppProperty("title");
					app.lookup("content").text = app.getAppProperty("content");
					app.lookup("date").text = app.getAppProperty("date");
				};
				// End - User Script
				
				// Header
				app.declareAppProperty("title", null);
				app.declareAppProperty("content", null);
				app.declareAppProperty("date", null);
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
					var output_1 = new cpr.controls.Output("date");
					output_1.value = "myPostDate";
					container.addChild(output_1, {
						"top": "10px",
						"left": "20px",
						"width": "220px",
						"height": "30px"
					});
					var output_2 = new cpr.controls.Output("content");
					output_2.value = "myPostContent";
					container.addChild(output_2, {
						"top": "90px",
						"left": "20px",
						"width": "220px",
						"height": "230px"
					});
					var output_3 = new cpr.controls.Output("title");
					output_3.value = "myPostTitle";
					container.addChild(output_3, {
						"top": "50px",
						"left": "20px",
						"width": "220px",
						"height": "30px"
					});
				})(group_1);
				container.addChild(group_1, {
					"top": "20px",
					"left": "20px",
					"width": "260px",
					"height": "340px"
				});
				if(typeof onBodyLoad == "function"){
					app.addEventListener("load", onBodyLoad);
				}
			}
		});
	internalApp.title = "MyPostUdc";
	
	// Type declaration for MyPostUdc
	cpr.utils.Util.ensurePackage("udc").MyPostUdc = function(id){
		cpr.controls.UDCBase.call(this, "udc.MyPostUdc", internalApp, id);
	};
	
	udc.MyPostUdc.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.MyPostUdc.prototype, "type", {
		get : function(){
			return "udc.MyPostUdc";
		},
		
		configurable: true
	});
	
	// App Properties
	Object.defineProperty(udc.MyPostUdc.prototype, "title", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("title");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("title", newValue, true);
		}
	});
	Object.defineProperty(udc.MyPostUdc.prototype, "content", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("content");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("content", newValue, true);
		}
	});
	Object.defineProperty(udc.MyPostUdc.prototype, "date", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("date");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("date", newValue, true);
		}
	});
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.MyPostUdc
/// start - udc.TeamPostCommentUdc
/*
 * UDC Qualified Name: udc.TeamPostCommentUdc
 * App URI: udc/TeamPostCommentUdc
 * Source Location: udc/TeamPostCommentUdc.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/TeamPostCommentUdc", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * TeamPostCommentUdc.js
				 * Created at 2023. 8. 28. 오후 9:33:43.
				 *
				 * @author keemn
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
					app.lookup("name").text = app.getAppProperty("name");
					app.lookup("date").text = app.getAppProperty("date");
					app.lookup("content").text = app.getAppProperty("content");
					app.lookup("deleteBtn").visible = app.getAppProperty("deleteBtn");
				}
	
				/*
				 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onDeleteBtnClick(e) {
					var deleteBtn = e.control;
					var event = new cpr.events.CAppEvent("deleteClick");
					app.dispatchEvent(event);
				}
				// End - User Script
				
				// Header
				app.declareAppProperty("name", null);
				app.declareAppProperty("date", null);
				app.declareAppProperty("content", null);
				app.declareAppProperty("deleteBtn", null);
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
					var output_1 = new cpr.controls.Output("name");
					output_1.value = "memberName";
					container.addChild(output_1, {
						"top": "20px",
						"left": "20px",
						"width": "100px",
						"height": "30px"
					});
					var output_2 = new cpr.controls.Output("content");
					output_2.value = "teamPostCommentContent";
					output_2.style.css({
						"border-radius" : "20px"
					});
					container.addChild(output_2, {
						"top": "49px",
						"left": "20px",
						"width": "1440px",
						"height": "70px"
					});
					var output_3 = new cpr.controls.Output("date");
					output_3.value = "teamPostCommentDate";
					container.addChild(output_3, {
						"top": "20px",
						"left": "119px",
						"width": "100px",
						"height": "30px"
					});
					var button_1 = new cpr.controls.Button("deleteBtn");
					button_1.value = "삭제";
					if(typeof onDeleteBtnClick == "function") {
						button_1.addEventListener("click", onDeleteBtnClick);
					}
					container.addChild(button_1, {
						"top": "20px",
						"left": "1388px",
						"width": "50px",
						"height": "20px"
					});
				})(group_1);
				container.addChild(group_1, {
					"top": "10px",
					"left": "10px",
					"width": "1480px",
					"height": "130px"
				});
				if(typeof onBodyLoad == "function"){
					app.addEventListener("load", onBodyLoad);
				}
			}
		});
	internalApp.title = "TeamPostCommentUdc";
	
	// Type declaration for TeamPostCommentUdc
	cpr.utils.Util.ensurePackage("udc").TeamPostCommentUdc = function(id){
		cpr.controls.UDCBase.call(this, "udc.TeamPostCommentUdc", internalApp, id);
	};
	
	udc.TeamPostCommentUdc.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.TeamPostCommentUdc.prototype, "type", {
		get : function(){
			return "udc.TeamPostCommentUdc";
		},
		
		configurable: true
	});
	
	// App Properties
	Object.defineProperty(udc.TeamPostCommentUdc.prototype, "name", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("name");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("name", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostCommentUdc.prototype, "date", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("date");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("date", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostCommentUdc.prototype, "content", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("content");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("content", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostCommentUdc.prototype, "deleteBtn", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("deleteBtn");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("deleteBtn", newValue, true);
		}
	});
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.TeamPostCommentUdc
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
				 * TeamPostUdc.js
				 * Created at 2023. 8. 25. 오후 12:21:20.
				 *
				 * @author keemn
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
					app.lookup("name").text = app.getAppProperty("name");
					app.lookup("date").text = app.getAppProperty("date");
					app.lookup("title").text = app.getAppProperty("title");
					app.lookup("content").text = app.getAppProperty("content");
					app.lookup("project").text = app.getAppProperty("project");
					app.lookup("department").text = app.getAppProperty("department");
					app.lookup("updateBtn").visible = app.getAppProperty("updateBtn");
					app.lookup("deleteBtn").visible = app.getAppProperty("deleteBtn");
				}
	
				/*
				 * "수정" 버튼(updateBtn)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onUpdateBtnClick(e){
					var updateBtn = e.control;
					var event = new cpr.events.CAppEvent("updateClick");
					app.dispatchEvent(event);
				}
	
				/*
				 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onDeleteBtnClick(e){
					var deleteBtn = e.control;
					var event = new cpr.events.CAppEvent("deleteClick");
					app.dispatchEvent(event);
				}
				// End - User Script
				
				// Header
				app.declareAppProperty("name", null);
				app.declareAppProperty("date", null);
				app.declareAppProperty("title", null);
				app.declareAppProperty("content", null);
				app.declareAppProperty("project", null);
				app.declareAppProperty("department", null);
				app.declareAppProperty("updateBtn", null);
				app.declareAppProperty("deleteBtn", null);
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
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var output_1 = new cpr.controls.Output("name");
					output_1.value = "memberName";
					container.addChild(output_1, {
						"top": "20px",
						"left": "22px",
						"width": "100px",
						"height": "30px"
					});
					var output_2 = new cpr.controls.Output("date");
					output_2.value = "teamPostCreateDate";
					container.addChild(output_2, {
						"top": "20px",
						"left": "131px",
						"width": "220px",
						"height": "30px"
					});
					var output_3 = new cpr.controls.Output("department");
					output_3.value = "department";
					container.addChild(output_3, {
						"top": "20px",
						"left": "1301px",
						"width": "150px",
						"height": "30px"
					});
					var output_4 = new cpr.controls.Output("project");
					output_4.value = "project";
					container.addChild(output_4, {
						"top": "20px",
						"left": "1113px",
						"width": "150px",
						"height": "30px"
					});
					var button_1 = new cpr.controls.Button("deleteBtn");
					button_1.value = "삭제";
					if(typeof onDeleteBtnClick == "function") {
						button_1.addEventListener("click", onDeleteBtnClick);
					}
					container.addChild(button_1, {
						"top": "256px",
						"left": "1400px",
						"width": "50px",
						"height": "20px"
					});
					var button_2 = new cpr.controls.Button("updateBtn");
					button_2.visible = false;
					button_2.value = "수정";
					if(typeof onUpdateBtnClick == "function") {
						button_2.addEventListener("click", onUpdateBtnClick);
					}
					container.addChild(button_2, {
						"top": "256px",
						"left": "1351px",
						"width": "50px",
						"height": "20px"
					});
					var inputBox_1 = new cpr.controls.InputBox("title");
					inputBox_1.value = "teamPostTitle";
					inputBox_1.style.css({
						"border-right-style" : "none",
						"border-left-style" : "none",
						"border-bottom-style" : "none",
						"border-top-style" : "none"
					});
					container.addChild(inputBox_1, {
						"top": "60px",
						"left": "20px",
						"width": "1430px",
						"height": "30px"
					});
					var inputBox_2 = new cpr.controls.InputBox("content");
					inputBox_2.value = "teamPostContent";
					inputBox_2.style.css({
						"border-right-style" : "none",
						"border-left-style" : "none",
						"border-bottom-style" : "none",
						"border-top-style" : "none"
					});
					container.addChild(inputBox_2, {
						"top": "100px",
						"left": "20px",
						"width": "1430px",
						"height": "150px"
					});
				})(group_1);
				if(typeof onGroupClick == "function") {
					group_1.addEventListener("click", onGroupClick);
				}
				container.addChild(group_1, {
					"top": "20px",
					"right": "40px",
					"left": "20px",
					"height": "279px"
				});
				if(typeof onBodyLoad == "function"){
					app.addEventListener("load", onBodyLoad);
				}
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
	Object.defineProperty(udc.TeamPostUdc.prototype, "name", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("name");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("name", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "date", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("date");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("date", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "title", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("title");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("title", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "content", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("content");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("content", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "project", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("project");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("project", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "department", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("department");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("department", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "updateBtn", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("updateBtn");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("updateBtn", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "deleteBtn", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("deleteBtn");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("deleteBtn", newValue, true);
		}
	});
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.TeamPostUdc
