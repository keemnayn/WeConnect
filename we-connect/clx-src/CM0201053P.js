/************************************************
 * @파일명 : CM0201053P.js
 * @작성자 : JSYOU
 * @작성일자 : 2023. 6. 12. 오후 6:21:14
 * @수정로그 :
 * [일자, 수정자] 내용
 ************************************************/

/************************************************
 * 공통 모듈 선언
 ************************************************/
var util = createCommonUtil();

/************************************************
 * 전역 변수 선언
 ************************************************/

/************************************************
 * 사용자 정의 함수
 ************************************************/


/************************************************
 * 이벤트
 ************************************************/

/*
 * 캘린더에서 date-click 이벤트 발생 시 호출.
 * Calendar의 날짜를 클릭 했을때 발생하는 이벤트.
 */
function onCal1DateClick(e){
	app.openDialog("app/guide/uiConfirm/com/CM0201053P_1", {
		width: 185,
		height: 127,
		headerVisible: false,
		escKeySupport: true
	}, function(dialog){
		dialog.style.addClass("popup-calendar");
		dialog.style.overlay.addClass("bg-transparent");
	});
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var vcCalendar = app.lookup("cal1");
	var start = moment().add(1, "days").format("YYYYMMDD");
	var end = moment().add(7, "days").format("YYYYMMDD");
	var anniversary = moment().add(4, "days").format("YYYYMMDD");
	var addDate = moment().add(6, "days").format("YYYYMMDD")

	vcCalendar.addAnniversary([{
		date: anniversary
	}, {
		date : addDate
	}]);

	vcCalendar.value = `${start},${end}`;
}