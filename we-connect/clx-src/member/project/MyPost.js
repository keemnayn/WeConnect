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
}
