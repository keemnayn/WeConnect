package com.arezip.weconnect.controller.member.mypost;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.MyPostDTO;
import com.arezip.weconnect.model.dto.TeamPostDTO;
import com.arezip.weconnect.service.MyPostService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/myposts")
@RequiredArgsConstructor
public class MyPostRestController {
	// 의존성 주입 final
	private final MyPostService myPostService;
	
//	개인게시물 목록
	@GetMapping("/list")
	public View GetMyPostList(DataRequest dataRequest) {
		List<MyPostDTO> myPostList = myPostService.getMyPostList();
		dataRequest.setResponse("myPostList", myPostList); // 데이터셋 이름과 같음
		return new JSONDataView();
	}
	
// 개인게시물 새 글 쓰기
		@PostMapping
		public View PostMyPost(DataRequest dataRequest, HttpServletRequest request) {
			ParameterGroup param = dataRequest.getParameterGroup("");
			if (param != null) {
				HttpSession session = request.getSession();
				Long memberId = (Long) session.getAttribute("memberId");
				String myPostTitle = param.getValue("myPostTitle");
				String myPostContent = param.getValue("myPostContent");
				log.info("memberId {}", memberId);
				log.info("myPostTitle {}", myPostTitle);
				log.info("myPostContent {}", myPostContent);
				// log.info("projectId {}", projectId);
				MyPostDTO myPostDTO = new MyPostDTO();
				myPostDTO.setMemberId(memberId);
				myPostDTO.setMyPostTitle(myPostTitle);
				myPostDTO.setMyPostContent(myPostContent);
				// teamPostDTO.setProjectId(projectId);
				myPostService.addMyPost(myPostDTO);
			}
			return new JSONDataView();
		}	
	
	
	
	
}
