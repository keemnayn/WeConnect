package com.arezip.weconnect.controller.member.freeboard;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;
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
@RequestMapping("/weconnect/member/boards/detail/comments") // submission action 도메인과 같음
@RequiredArgsConstructor
public class FreeBoardCommentRestController {
	private final FreeBoardService freeBoardService;
	
	//댓글 조회
	@GetMapping
	public View getFreeBoardCommentList(HttpServletRequest request, DataRequest dataRequest) {
		HttpSession session = request.getSession();
		//로그인한 회원 정보 담음 
		MemberDTO memberDTO = new MemberDTO();
		long memberId = (long) session.getAttribute("memberId");
		memberDTO.setMemberId(memberId);
		ParameterGroup param = dataRequest.getParameterGroup("detailBoardParam");//freeBoardId들어있는 dm
		long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
		List<FreeBoardCommentDTO> freeBoardCommentDTO = freeBoardService.getFreeBoardComment(freeBoardId);
		log.info("freeBoardCommentDTO {}",freeBoardCommentDTO);
		dataRequest.setResponse("freeBoardComment", freeBoardCommentDTO);
		dataRequest.setResponse("memberDTO", memberDTO);
		return new JSONDataView();
	}
	
	//댓글 등록
	@PostMapping
	public View addFreeBoardComment(HttpServletRequest request, DataRequest dataRequest) {
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		log.info("memberId {}", memberId);
		ParameterGroup commentInsertParam = dataRequest.getParameterGroup("commentInsertParam");
		String freeBoardCommentContent = commentInsertParam.getValue("freeBoardCommentContent");
		log.info("freeBoardCommentContent {}", freeBoardCommentContent);
		long freeBoardId = Long.parseLong(commentInsertParam.getValue("freeBoardId"));
		log.info("freeBoardId {}", freeBoardId);
		freeBoardService.insertFreeBoardComment(freeBoardCommentContent,memberId,freeBoardId);
		return new JSONDataView();
	}
	//댓글 삭제 
	@DeleteMapping
	public View deleteFreeBoardComment(HttpServletResponse response, HttpServletRequest request, DataRequest dataRequest) {
//		HttpSession session = request.getSession();
//		Long memberId = (Long) session.getAttribute("memberId");
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("dmFreeBoardCommentId");
		System.out.println("parameterGroup"+parameterGroup);
		long freeBoardCommentId = Long.parseLong(parameterGroup.getValue("freeBoardCommentId"));
		log.info("freeBoardCommentId"+freeBoardCommentId);
		freeBoardService.deleteFreeBoardComment(freeBoardCommentId);
		return new JSONDataView();
	}
	//댓글 수정 
	@PutMapping
	public View updateFreeBoardComment(HttpServletResponse response, HttpServletRequest request, DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("freeBoardComment");
		if(parameterGroup != null) {
			HttpSession session = request.getSession();
			Long memberId = (Long) session.getAttribute("memberId");
			Long freeBoardCommentId = Long.parseLong(parameterGroup.getValue("freeBoardCommentId"));
			String freeBoardCommentContent = parameterGroup.getValue("freeBoardCommentContent");
			FreeBoardCommentDTO freeBoardCommentDTO = new FreeBoardCommentDTO();
			freeBoardCommentDTO.setMemberId(memberId);
			freeBoardCommentDTO.setFreeBoardCommentId(freeBoardCommentId);
			freeBoardCommentDTO.setFreeBoardCommentContent(freeBoardCommentContent);
			freeBoardService.updateFreeBoardComment(freeBoardCommentDTO);
		}
		return new JSONDataView();
	}

}
