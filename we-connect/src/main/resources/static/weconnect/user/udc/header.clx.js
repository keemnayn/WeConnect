/*
 * App URI: user/udc/header
 * Source Location: user/udc/header.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("user/udc/header", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * header.js
			 * Created at 2023. 8. 7. 오후 2:06:54.
			 *
			 * @author Axl Rose
			 ************************************************/

			/**
			 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
			 */
			exports.getText = function() {
				// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
				return "";
			};

			/*
			 * 이미지에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onImageClick(e) {
				var image = e.control;
				window.location = "#";
			}
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"background-color" : "#E0E0E0",
				"width" : "100%",
				"top" : "0px",
				"height" : "100%",
				"left" : "0px"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var button_1 = new cpr.controls.Button();
			button_1.style.css({
				"border-radius" : "30%",
				"border-right-style" : "none",
				"border-left-style" : "none",
				"border-bottom-style" : "none",
				"background-image" : "url('user/img/header/logout.png')",
				"border-top-style" : "none"
			});
			container.addChild(button_1, {
				"top": "0px",
				"right": "20px",
				"width": "50px",
				"height": "50px"
			});
			
			var image_1 = new cpr.controls.Image();
			image_1.src = "user/img/enjoy.png";
			if(typeof onImageClick == "function") {
				image_1.addEventListener("click", onImageClick);
			}
			container.addChild(image_1, {
				"top": "5px",
				"left": "0px",
				"width": "300px",
				"height": "40px"
			});
			
			var button_2 = new cpr.controls.Button();
			button_2.style.css({
				"border-right-style" : "none",
				"border-left-style" : "none",
				"border-bottom-style" : "none",
				"background-image" : "url('user/img/header/profile.png')",
				"border-top-style" : "none"
			});
			container.addChild(button_2, {
				"top": "0px",
				"right": "90px",
				"bottom": "0px",
				"width": "50px"
			});
			
			var button_3 = new cpr.controls.Button();
			button_3.style.css({
				"border-right-style" : "none",
				"border-left-style" : "none",
				"border-bottom-style" : "none",
				"background-image" : "url('user/img/header/notification.png')",
				"border-top-style" : "none"
			});
			container.addChild(button_3, {
				"top": "0px",
				"right": "160px",
				"bottom": "1px",
				"width": "50px"
			});
			
			var button_4 = new cpr.controls.Button();
			button_4.style.css({
				"border-right-style" : "none",
				"border-left-style" : "none",
				"border-bottom-style" : "none",
				"background-image" : "url('user/img/header/login.png')",
				"border-top-style" : "none"
			});
			container.addChild(button_4, {
				"top": "0px",
				"right": "230px",
				"bottom": "1px",
				"width": "50px"
			});
		}
	});
	app.title = "header";
	cpr.core.Platform.INSTANCE.register(app);
})();