/*
 * App URI: dialog/BoardDetailPage
 * Source Location: dialog/BoardDetailPage.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("dialog/BoardDetailPage", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * BoardDetailPage.js
			 * Created at 2023. 8. 22. 오전 10:17:30.
			 *
			 * @author chwec
			 ************************************************/
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e) {
				//	var sessionval = getSessionStorage("memsession");
				var hostProperty = app.getHostProperty("initValue");
				var freeBoardId = hostProperty["freeBoardId"];
				app.lookup("freeBoardId").value = freeBoardId;
				app.lookup("boardDetailSub").send();
				app.lookup("commentListSub").send();
				app.lookup("boardUpdateBtn").redraw();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onBoardDetailSubSubmitSuccess(e) {
				var boardDetailSub = e.control;
				app.lookup("boardTitleIpb").redraw();
				app.lookup("boardCreateIpb").redraw();
				app.lookup("memberNameIpb").redraw();
				app.lookup("boardViewsIpb").redraw();
				app.lookup("boardContentIpb").redraw();
				app.lookup("fMemberId").redraw();
				var FMemberId = app.lookup("freeBoardDetail").getValue("FMemberId");
				var memberId = app.lookup("memberDTO").getValue("memberId");
				var boardUpdateBtn = app.lookup("boardUpdateBtn");
				var boardDeleteBtn = app.lookup("boardDeleteBtn");
				if (memberId == FMemberId) {
					boardUpdateBtn.visible = true;
					boardDeleteBtn.visible = true;
				}
			}

			/*
			 * "글 삭제" 버튼(boardDeleteBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBoardDeleteBtnClick(e) {
				var boardDeleteBtn = e.control;
				if (confirm("해당 글을 삭제하시겠습니까?")) {
					app.lookup("deleteBoardSub").send();
				}
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onDeleteBoardSubSubmitSuccess(e) {
				var deleteBoardSub = e.control;
				alert("게시글 삭제 완료");
				app.close();
			}

			/*
			 * "글 수정" 버튼(boardUpdateBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBoardUpdateBtnClick2(e) {
				var boardUpdateBtn = e.control;
				if (confirm("해당 글을 수정하시겠습니까?")) {
					app.lookup("updateBoardSub").send();
				}
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onUpdateBoardSubSubmitSuccess(e) {
				var updateBoardSub = e.control;
				alert("게시글 수정 완료");
			}

			/*
			 * 서브미션에서 receive 이벤트 발생 시 호출.
			 * 서버로 부터 데이터를 모두 전송받았을 때 발생합니다.
			 */
			function onCommentListSubReceive(e) {
				var commentListSub = e.control;
				var xhr = commentListSub.xhr;
				var jsonData = JSON.parse(xhr.responseText);
				var boardComment = jsonData.freeBoardComment;
				var container = app.lookup("commentGrp");
				
				//댓글 등록, 삭제 시 재조회 할 수 있게 기존 목록 삭제
				container.removeAllChildren();
				for (var i = 0; i < boardComment.length; i++) {
					(function(index) {
						//udc 동적 생성
						var comment = new udc.FreeBoardCommentUdc();
						//udc에서 출판한 이미지 경로 앱 속성 지정
						comment.memberName = boardComment[i].memberName;
						comment.freeBoardCommentDate = boardComment[i].freeBoardCommentDate;
						comment.freeBoardCommentContent = boardComment[i].freeBoardCommentContent;
						comment.freeBoardCommentId = boardComment[i].freeBoardCommentId;
						comment.fbcMemberId = boardComment[i].fbcMemberId;
						container.addChild(comment, {
							height: "100px",
							width: "1550px",
							autoSize: "both"
						});
						comment.addEventListener("deleteClick", function(e) {
							app.lookup("dmFreeBoardCommentId").setValue("freeBoardCommentId", boardComment[index].freeBoardCommentId);
							console.log(comment.freeBoardCommentId);
							if (confirm("댓글을 삭제하시겠습니까?")) {
								app.lookup("deleteCommentSub").send();
							}
						});
					})(i);
				}
			}
			//댓글 등록
			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onInsertCommentSubSubmitSuccess(e) {
				var insertCommentSub = e.control;
				app.lookup("commentListSub").send();
				app.lookup("commentIpb").text = "";
			}

			/*
			 * "등록" 버튼(commentBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onCommentBtnClick2(e) {
				var commentBtn = e.control;
				var hostProperty = app.getHostProperty("initValue");
				var freeBoardId = hostProperty["freeBoardId"];
				app.lookup("freeBoardId").value = freeBoardId;
				app.lookup("commentInsertParam").setValue("freeBoardId", freeBoardId);
				var contentValue = app.lookup("commentInsertParam").getValue("freeBoardCommentContent");
				if (contentValue == null || contentValue == "") {
					alert("내용을 입력하세요");
					app.lookup("commentIpb").focus();
					return;
				}
				app.lookup("insertCommentSub").send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onDeleteCommentSubSubmitSuccess2(e) {
				var deleteCommentSub = e.control;
				app.lookup("commentListSub").send();
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("freeBoardComment");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "freeBoardCommentId",
						"dataType": "number"
					},
					{"name": "memberName"},
					{"name": "freeBoardCommentContent"},
					{"name": "freeBoardCommentDate"},
					{
						"name": "freeBoardId",
						"dataType": "number"
					},
					{
						"name": "fbcMemberId",
						"dataType": "number"
					}
				]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("detailBoardParam");
			dataMap_1.parseData({
				"columns" : [{
					"name": "freeBoardId",
					"dataType": "number"
				}]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("freeBoardDetail");
			dataMap_2.parseData({
				"columns" : [
					{
						"name": "freeBoardId",
						"dataType": "number"
					},
					{"name": "freeBoardTitle"},
					{"name": "freeBoardContent"},
					{
						"name": "freeBoardViews",
						"dataType": "number"
					},
					{"name": "memberName"},
					{"name": "freeBoardFileName"},
					{"name": "freeBoardCreate"},
					{
						"name": "FMemberId",
						"dataType": "number"
					}
				]
			});
			app.register(dataMap_2);
			
			var dataMap_3 = new cpr.data.DataMap("commentInsertParam");
			dataMap_3.parseData({
				"columns" : [
					{"name": "freeBoardCommentContent"},
					{
						"name": "freeBoardId",
						"dataType": "number"
					}
				]
			});
			app.register(dataMap_3);
			
			var dataMap_4 = new cpr.data.DataMap("commentIdParam");
			dataMap_4.parseData({
				"columns" : [{
					"name": "freeBoardCommentId",
					"dataType": "number"
				}]
			});
			app.register(dataMap_4);
			
			var dataMap_5 = new cpr.data.DataMap("memberDTO");
			dataMap_5.parseData({
				"columns" : [{
					"name": "memberId",
					"dataType": "number"
				}]
			});
			app.register(dataMap_5);
			
			var dataMap_6 = new cpr.data.DataMap("dmFreeBoardCommentId");
			dataMap_6.parseData({
				"columns" : [{"name": "freeBoardCommentId"}]
			});
			app.register(dataMap_6);
			var submission_1 = new cpr.protocols.Submission("boardDetailSub");
			submission_1.method = "get";
			submission_1.action = "member/boards/detail";
			submission_1.addRequestData(dataMap_1);
			submission_1.addResponseData(dataMap_2, false);
			submission_1.addResponseData(dataMap_5, false);
			if(typeof onBoardDetailSubSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onBoardDetailSubSubmitSuccess);
			}
			if(typeof onBoardDetailSubSubmitDone == "function") {
				submission_1.addEventListener("submit-done", onBoardDetailSubSubmitDone);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("boardParamSub");
			submission_2.action = "member/boards";
			submission_2.addRequestData(dataMap_1);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("commentParamSub");
			submission_3.action = "member/boards/detail/comments";
			submission_3.addRequestData(dataMap_3);
			submission_3.addRequestData(dataMap_1);
			if(typeof onCommentParamSubSubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onCommentParamSubSubmitSuccess);
			}
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("deleteCommentSub");
			submission_4.method = "delete";
			submission_4.action = "member/boards/detail/comments";
			submission_4.addRequestData(dataMap_6);
			if(typeof onDeleteCommentSubSubmitSuccess2 == "function") {
				submission_4.addEventListener("submit-success", onDeleteCommentSubSubmitSuccess2);
			}
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("deleteBoardSub");
			submission_5.method = "delete";
			submission_5.action = "member/boards";
			submission_5.addRequestData(dataMap_2);
			if(typeof onDeleteBoardSubSubmitSuccess == "function") {
				submission_5.addEventListener("submit-success", onDeleteBoardSubSubmitSuccess);
			}
			app.register(submission_5);
			
			var submission_6 = new cpr.protocols.Submission("updateBoardSub");
			submission_6.method = "put";
			submission_6.action = "member/boards";
			submission_6.addRequestData(dataMap_2);
			if(typeof onUpdateBoardSubSubmitSuccess == "function") {
				submission_6.addEventListener("submit-success", onUpdateBoardSubSubmitSuccess);
			}
			app.register(submission_6);
			
			var submission_7 = new cpr.protocols.Submission("updateCommentSub");
			submission_7.method = "put";
			submission_7.action = "member/boards/comments";
			submission_7.addRequestData(dataSet_1);
			app.register(submission_7);
			
			var submission_8 = new cpr.protocols.Submission("commentListSub");
			submission_8.method = "get";
			submission_8.action = "member/boards/detail/comments";
			submission_8.addRequestData(dataMap_1);
			if(typeof onCommentListSubSubmitSuccess == "function") {
				submission_8.addEventListener("submit-success", onCommentListSubSubmitSuccess);
			}
			if(typeof onCommentListSubReceive == "function") {
				submission_8.addEventListener("receive", onCommentListSubReceive);
			}
			app.register(submission_8);
			
			var submission_9 = new cpr.protocols.Submission("insertCommentSub");
			submission_9.action = "member/boards/detail/comments";
			submission_9.addRequestData(dataMap_3);
			if(typeof onInsertCommentSubSubmitSuccess == "function") {
				submission_9.addEventListener("submit-success", onInsertCommentSubSubmitSuccess);
			}
			app.register(submission_9);
			app.supportMedia("all and (min-width: 1920px)", "Project");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			container.bind("readOnly").toDataMap(app.lookup("freeBoardDetail"), "memberName");
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.distribution = "center";
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_1);
			(function(container){
				var inputBox_1 = new cpr.controls.InputBox("boardTitleIpb");
				var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("freeBoardDetail"));
				inputBox_1.setBindContext(dataMapContext_1);
				inputBox_1.bind("value").toDataMap(app.lookup("freeBoardDetail"), "freeBoardTitle");
				inputBox_1.bind("readOnly").toExpression("FMemberId == #memberDTO.memberId ? false:true");
				container.addChild(inputBox_1, {
					"top": "0px",
					"width": "1560px",
					"height": "30px",
					"left": "calc(50% - 780px)"
				});
				var button_1 = new cpr.controls.Button("boardUpdateBtn");
				button_1.visible = false;
				button_1.value = "수정";
				if(typeof onBoardUpdateBtnClick2 == "function") {
					button_1.addEventListener("click", onBoardUpdateBtnClick2);
				}
				container.addChild(button_1, {
					"top": "0px",
					"right": "100px",
					"width": "100px",
					"height": "30px"
				});
				var button_2 = new cpr.controls.Button("boardDeleteBtn");
				button_2.visible = false;
				button_2.value = "삭제";
				if(typeof onBoardDeleteBtnClick == "function") {
					button_2.addEventListener("click", onBoardDeleteBtnClick);
				}
				container.addChild(button_2, {
					"top": "0px",
					"right": "0px",
					"width": "100px",
					"height": "30px"
				});
			})(group_1);
			container.addChild(group_1, {
				"width": "1560px",
				"height": "30px"
			});
			
			var group_2 = new cpr.controls.Container();
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["100px", "1fr", "100px", "1fr", "100px", "1fr", "1fr", "1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_2.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "작성자";
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "작성일";
				container.addChild(output_2, {
					"colIndex": 2,
					"rowIndex": 0
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "조회수";
				container.addChild(output_3, {
					"colIndex": 4,
					"rowIndex": 0
				});
				var inputBox_2 = new cpr.controls.InputBox("memberNameIpb");
				inputBox_2.readOnly = true;
				var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("freeBoardDetail"));
				inputBox_2.setBindContext(dataMapContext_2);
				inputBox_2.bind("value").toDataMap(app.lookup("freeBoardDetail"), "memberName");
				container.addChild(inputBox_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var inputBox_3 = new cpr.controls.InputBox("boardCreateIpb");
				inputBox_3.readOnly = true;
				var dataMapContext_3 = new cpr.bind.DataMapContext(app.lookup("freeBoardDetail"));
				inputBox_3.setBindContext(dataMapContext_3);
				inputBox_3.bind("value").toDataMap(app.lookup("freeBoardDetail"), "freeBoardCreate");
				container.addChild(inputBox_3, {
					"colIndex": 3,
					"rowIndex": 0
				});
				var inputBox_4 = new cpr.controls.InputBox("boardViewsIpb");
				inputBox_4.readOnly = true;
				var dataMapContext_4 = new cpr.bind.DataMapContext(app.lookup("freeBoardDetail"));
				inputBox_4.setBindContext(dataMapContext_4);
				inputBox_4.bind("value").toDataMap(app.lookup("freeBoardDetail"), "freeBoardViews");
				container.addChild(inputBox_4, {
					"colIndex": 5,
					"rowIndex": 0
				});
				var output_4 = new cpr.controls.Output("fMemberId");
				output_4.visible = false;
				var dataMapContext_5 = new cpr.bind.DataMapContext(app.lookup("freeBoardDetail"));
				output_4.setBindContext(dataMapContext_5);
				output_4.bind("value").toDataColumn("FMemberId");
				container.addChild(output_4, {
					"colIndex": 6,
					"rowIndex": 0
				});
				var output_5 = new cpr.controls.Output("freeBoardId");
				output_5.visible = false;
				var dataMapContext_6 = new cpr.bind.DataMapContext(app.lookup("detailBoardParam"));
				output_5.setBindContext(dataMapContext_6);
				output_5.bind("value").toDataColumn("freeBoardId");
				container.addChild(output_5, {
					"colIndex": 7,
					"rowIndex": 0
				});
			})(group_2);
			container.addChild(group_2, {
				"width": "1560px",
				"height": "30px"
			});
			
			var inputBox_5 = new cpr.controls.InputBox("boardContentIpb");
			var dataMapContext_7 = new cpr.bind.DataMapContext(app.lookup("freeBoardDetail"));
			inputBox_5.setBindContext(dataMapContext_7);
			inputBox_5.bind("value").toDataMap(app.lookup("freeBoardDetail"), "freeBoardContent");
			inputBox_5.bind("readOnly").toExpression("FMemberId == #memberDTO.memberId ? false:true");
			container.addChild(inputBox_5, {
				"width": "1560px",
				"height": "330px"
			});
			
			var group_3 = new cpr.controls.Container();
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_3.setLayout(xYLayout_2);
			(function(container){
				var inputBox_6 = new cpr.controls.InputBox("commentIpb");
				inputBox_6.placeholder = "댓글을 입력해주세요.";
				var dataMapContext_8 = new cpr.bind.DataMapContext(app.lookup("commentInsertParam"));
				inputBox_6.setBindContext(dataMapContext_8);
				inputBox_6.bind("value").toDataMap(app.lookup("commentInsertParam"), "freeBoardCommentContent");
				container.addChild(inputBox_6, {
					"top": "0px",
					"left": "0px",
					"width": "1460px",
					"height": "70px"
				});
				var button_3 = new cpr.controls.Button("commentBtn");
				button_3.value = "등록";
				if(typeof onCommentBtnClick2 == "function") {
					button_3.addEventListener("click", onCommentBtnClick2);
				}
				container.addChild(button_3, {
					"top": "0px",
					"right": "0px",
					"width": "100px",
					"height": "70px"
				});
			})(group_3);
			container.addChild(group_3, {
				"width": "1560px",
				"height": "70px"
			});
			
			var group_4 = new cpr.controls.Container("commentGrp");
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			group_4.setLayout(verticalLayout_2);
			container.addChild(group_4, {
				"width": "1560px",
				"height": "300px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "상세 페이지 팝업";
	cpr.core.Platform.INSTANCE.register(app);
})();
