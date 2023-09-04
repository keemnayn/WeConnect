//package com.arezip.weconnect.test.carlendar;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.arezip.weconnect.model.dto.MemberDTO;
//import com.arezip.weconnect.model.dto.ProjectDTO;
//import com.arezip.weconnect.model.dto.ProjectMemberDTO;
//import com.arezip.weconnect.service.CalendarProjectService;
//
//import lombok.extern.slf4j.Slf4j;
//
//@SpringBootTest
//@Slf4j
//public class CarlendarTest {
//	// 의존성을 주입 시킴
//	@Autowired
//	CalendarProjectService calendarProjectService;
//
//	@Test
//	void test() {
//		long memberId = 126;
//		calendarProjectService.findProjectByMemberId(memberId);
//		log.info("테스트: {}", calendarProjectService.findProjectByMemberId(memberId));
//	}
//
////	@Test
////	void insertTest() {
////		ProjectDTO projectDTO = new ProjectDTO();
////		projectDTO.setMemberId(126);
////		projectDTO.setProjectId(2);
//////		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//////		Date startdate = dateFormat.parse("2023-08-25");
////		projectDTO.setProjectStart("2023-08-25");
////		projectDTO.setProjectEnd("2023-08-28");
////		projectDTO.setProjectName("팀회의");
////		calendarProjectService.insertProject(projectDTO);
////	}
//	@Test
//    public void testInsertProjectWithMember() {
//        // 가상의 테스트 데이터 생성
//        ProjectDTO projectDTO = new ProjectDTO();
//        projectDTO.setProjectName("교육");
//        projectDTO.setProjectStart("2023-08-08");
//        projectDTO.setProjectEnd("2023-08-11");
//        projectDTO.setMemberId(24);
//
//        MemberDTO memberDTO = new MemberDTO();
//        memberDTO.setDepartmentId(2);
//
//        ProjectMemberDTO projectMemberDTO = new ProjectMemberDTO();
//        projectMemberDTO.setMemberId(24);
//        projectDTO.setProjectId(1L);
//
//        // Mock 객체 설정
//        Mockito.when(carlendarProjectMapper.selectMemberDepartment("TestMemberId")).thenReturn(memberDTO);
//        
//        // 테스트 수행
//        calendarProjectService.insertProjectWithMember(projectDTO);
//
//        // 결과 검증
//        // 이 부분에 적절한 결과 검증 코드를 추가하세요.
//    }
//}
