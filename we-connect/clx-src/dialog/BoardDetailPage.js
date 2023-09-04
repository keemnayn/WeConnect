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