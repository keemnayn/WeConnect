package com.arezip.weconnect.controller.member.freeboard;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/boards/comments") // submission action 도메인과 같음
@RequiredArgsConstructor
public class FreeBoardCommentRestController {
	private final FreeBoardService freeBoardService;
	
	//댓글 등록
	@PostMapping
	public View addFreeBoardComment(HttpServletResponse response,HttpServletRequest request, DataRequest dataRequest) {
		ParameterGroup commentInsertParam = dataRequest.getParameterGroup("commentInsertParam");
		ParameterGroup detailBoardParam = dataRequest.getParameterGroup("detailBoardParam");
		HttpSession session = request.getSession(false);
		long memberId = (Long)session.getAttribute("memberId"); 
		log.info("memberId {}", memberId);
		String freeBoardCommentContent = commentInsertParam.getValue("freeBoardCommentContent");
		log.info("freeBoardCommentContent {}", freeBoardCommentContent);
		long freeBoardId = Long.parseLong(detailBoardParam.getValue("freeBoardId"));
		log.info("freeBoardId {}", freeBoardId);
		
		FreeBoardCommentDTO freeBoardCommentDTO = new FreeBoardCommentDTO();
		freeBoardCommentDTO.setMemberId(memberId);
		freeBoardCommentDTO.setFreeBoardId(freeBoardId);
		freeBoardCommentDTO.setFreeBoardCommentContent(freeBoardCommentContent);
		return new JSONDataView();
	}
}
