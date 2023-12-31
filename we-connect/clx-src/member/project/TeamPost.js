/************************************************
 * detail.js
 * Created at 2023. 8. 7. 오전 10:08:05.
 *
 * @author keemn
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	app.lookup("teamPostListSub").send();
	//	console.log(TMemberId);
	//		if (memberId == TMemberId) {
	//		app.lookup("updateBtn").visible = true;
	//		app.lookup("deleteBtn").visible = true;
	//	}
	var memberId = app.lookup("memberDTO").getValue("memberId");
	console.log(memberId);
	//app.lookup("grp").value = proposalId;
	//console.log(memberId == TMemberId);
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onTeamPostListSubSubmitSuccess(e) {
	var teamPostListSub = e.control;
	var xhr = teamPostListSub.xhr;
	var jsonData = JSON.parse(xhr.responseText);
	var teamPostList = jsonData.teamPostList;
	var comment = jsonData.comment;
	var container = app.lookup("grp");
	container.removeAllChildren();
	console.log(teamPostList.length);
	
	for (var i = 0; i < teamPostList.length; i++) {
		(function(index) {
			//udc 동적 생성
			var teamPostUdc = new udc.TeamPostUdc();
			teamPostUdc.name = teamPostList[i].memberName;
			teamPostUdc.date = teamPostList[i].teamPostCreateDate;
			teamPostUdc.title = teamPostList[i].teamPostTitle;
			teamPostUdc.content = teamPostList[i].teamPostContent;
			teamPostUdc.project = teamPostList[i].projectName;
			teamPostUdc.department = teamPostList[i].departmentName;
						
			container.addChild(teamPostUdc, {
				width: "1300px",
				height: "300px",
				autoSize: "both"
			});
			teamPostUdc.addEventListener("deleteClick", function(e) {
				app.lookup("teamPostIdParam").setValue("teamPostId", teamPostList[index].teamPostId);
				if (confirm("삭제하시겠습니까?")) {
					var teamPostDeleteSub = app.lookup("teamPostDeleteSub");
					teamPostDeleteSub.send();
				}
			});
		})(i);
	}
}


/*
 * 인풋 박스에서 mousedown 이벤트 발생 시 호출.
 * 사용자가 컨트롤 위에 포인터를 위치한 상태로 마우스 버튼을 누를 때 발생하는 이벤트.
 */
function onInsertIpbMousedown(e) {
	var insertIpb = e.control;
	app.openDialog("dialog/TeamPostCreate", {
		width: 1580,
		height: 780
	}, function(dialog) {
		dialog.addEventListener("close", function(e) {
			app.lookup("teamPostListSub").send();
		});
	});
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onTeamPostUpdateSubSubmitSuccess(e) {
	var teamPostUpdateSub = e.control;
	app.lookup("teamPostListSub").send();
	
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onTeamPostDeleteSubSubmitSuccess(e) {
	var teamPostDeleteSub = e.control;
	app.lookup("teamPostListSub").send();
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchIpbSearch(e) {
	var searchIpb = e.control;
	var submission = app.lookup("searchTeamPostSub");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSearchTeamPostSubSubmitSuccess(e) {
	var searchTeamPostSub = e.control;
	app.lookup("grp").redraw();
}