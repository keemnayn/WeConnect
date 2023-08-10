/************************************************
 * Untitled.js
 * Created at 2023. 8. 7. 오전 10:08:50.
 *
 * @author kjh970605
 ************************************************/

/*
 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	window.location.href = "register.clx";
}

/*
 * "Google로 계속하기" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	var voResourceLoader = new cpr.core.ResourceLoader();
	voResourceLoader.addScript("https://maps.googleapis.com/maps/api/js?key='424886188874-oo9lbqc9juspl2d84uegvarvafe42tah.apps.googleusercontent.com'").load().then(function(input) {
		// Google 로그인 초기화 코드는 HTML에 정의되어 있으므로 여기서는 추가 작업이 필요 없습니다.
		new Goo	
	});
}

/*
 * "카카오 로그인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick4(e) {
	var button = e.control;
	var resourceLoader = new cpr.core.ResourceLoader();
	resourceLoader.addScript("https://developers.kakao.com/sdk/js/kakao.js").load().then(function(input) {
		// SDK가 로딩된 후, 카카오 앱 키를 사용하여 초기화합니다.
		// YOUR_APP_KEY는 발급받은 카카오 앱 키로 변경해야 합니다.
		Kakao.init('dfdc54854ce83ab3b61e2a78ff301e69');
		// 카카오 로그인 수행
		Kakao.Auth.login({
			success: function(authObj) {
				console.log(authObj); // 로그인 성공 시 Access Token 등의 정보를 받아옴
				Kakao.API.request({
					url: '/v2/user/me',
					success: function(res) {
						console.log(res); // 사용자 정보 출력
					},
					fail: function(error) {
						console.log(error);
					}
				});
			},
			fail: function(err) {
				console.log(err);
			}
		});
	});
}