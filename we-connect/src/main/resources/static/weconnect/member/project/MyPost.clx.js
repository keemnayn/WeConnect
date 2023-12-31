/*
 * App URI: member/project/MyPost
 * Source Location: member/project/MyPost.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/project/MyPost", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * TeamIndiPost.js
			 * Created at 2023. 8. 16. 오후 7:51:29.
			 *
			 * @author keemn
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e) {
				app.lookup("myPostSub").send();
				var memberId = app.lookup("memberDTO").getValue("memberId");
				console.log(memberId);
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onMyPostSubSubmitSuccess(e) {
				var myPostSub = e.control;
				var xhr = myPostSub.xhr;
				var jsonData = JSON.parse(xhr.responseText);
				var myPostList = jsonData.myPostList;
				var container = app.lookup("grp");
				container.removeAllChildren();
				// var pageIndexer = app.lookup("page");
				// pageIndexer.totalRowCount = totalCommentCount;
				console.log(myPostList.length);
				
				for (var i = 0; i < myPostList.length; i++) {
					(function(index) {
						//udc 동적 생성
						var myPostUdc = new udc.MyPostUdc();
						//myPostUdc.name = myPostList[i].memberName;
						myPostUdc.date = myPostList[i].myPostDate;
						myPostUdc.title = myPostList[i].myPostTitle;
						myPostUdc.content = myPostList[i].myPostContent;
						
						container.addChild(myPostUdc, {
							width: "1400px",
							height: "400px",
							autoSize: "both"
						});
						myPostUdc.addEventListener("deleteClick", function(e) {
							app.lookup("myPostIdParam").setValue("myPostId", myPostList[index].myPostId);
							if (confirm("삭제하시겠습니까?")) {
								var myPostDeleteSub = app.lookup("myPostDeleteSub");
								myPostDeleteSub.send();
							}
						});
					})(i);
				}
			}

			/*
			 * "+" 아웃풋(insertBtn)에서 value-change 이벤트 발생 시 호출.
			 * Output의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.

			function onInsertBtnValueChange(e){
				var insertBtn = e.control;
				app.openDialog("dialog/MyPostDetail", {
					width: 1580,
					height: 780
				}, function(dialog) {
					dialog.addEventListener("close", function(e) {
						app.lookup("teamPostListSub").send();
					});
				});
				* 	 */
			}
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("myPostList");
			dataSet_1.parseData({
				"columns": [
					{"name": "myPostId"},
					{"name": "myPostTitle"},
					{"name": "myPostContent"},
					{
						"name": "date",
						"dataType": "string"
					}
				],
				"rows": [{"myPostId": "1", "myPostTitle": "안내사항", "myPostContent": "오늘 회의실은 3층입니다.", "date": "2023-08-16"}]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("myPostIdParam");
			dataMap_1.parseData({
				"columns" : [{
					"name": "myPostId",
					"dataType": "number"
				}]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("memberDTO");
			dataMap_2.parseData({
				"columns" : [{
					"name": "memberId",
					"dataType": "string"
				}]
			});
			app.register(dataMap_2);
			var submission_1 = new cpr.protocols.Submission("myPostListSub");
			submission_1.method = "get";
			submission_1.action = "member/myposts/list";
			submission_1.addRequestData(dataSet_1);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("myPostDeleteSub");
			submission_2.method = "delete";
			submission_2.action = "member/myposts";
			submission_2.addRequestData(dataMap_1);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("myPostCreateSub");
			app.register(submission_3);
			app.supportMedia("all and (min-width: 1580px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1579px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
			container.setLayout(flowLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grp1");
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "Output";
				container.addChild(output_1, {
					"top": "20px",
					"left": "20px",
					"width": "260px",
					"height": "324px"
				});
				var output_2 = new cpr.controls.Output("insertBtn");
				output_2.value = "+";
				output_2.style.css({
					"border-radius" : "20px",
					"background-color" : "#F4F9FE",
					"font-size" : "80px",
					"text-align" : "center"
				});
				container.addChild(output_2, {
					"top": "20px",
					"left": "20px",
					"width": "260px",
					"height": "340px"
				});
			})(group_1);
			container.addChild(group_1, {
				"width": "1540px",
				"height": "375px"
			});
			
			var group_2 = new cpr.controls.Container("grp");
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			group_2.setLayout(verticalLayout_1);
			container.addChild(group_2, {
				"width": "1514px",
				"height": "482px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "MyPost";
	cpr.core.Platform.INSTANCE.register(app);
})();
