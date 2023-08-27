package com.arezip.weconnect.controller.member.freeboard;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.ParameterRow;
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
		ParameterGroup param = dataRequest.getParameterGroup("detailBoardParam");
//		HttpSession session = request.getSession();
		long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
		List<FreeBoardCommentDTO> freeBoardCommentDTO = freeBoardService.getFreeBoardComment(freeBoardId);
		log.info("freeBoardCommentDTO {}",freeBoardCommentDTO);
		dataRequest.setResponse("freeBoardComment", freeBoardCommentDTO);
		return new JSONDataView();
	}
	
	//댓글 등록
	@PostMapping
	public View addFreeBoardComment(HttpServletRequest request, DataRequest dataRequest) {
		ParameterGroup commentInsertParam = dataRequest.getParameterGroup("commentInsertParam");
		ParameterGroup detailBoardParam = dataRequest.getParameterGroup("detailBoardParam");
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		log.info("memberId {}", memberId);
		String freeBoardCommentContent = commentInsertParam.getValue("freeBoardCommentContent");
		log.info("freeBoardCommentContent {}", freeBoardCommentContent);
		long freeBoardId = Long.parseLong(detailBoardParam.getValue("freeBoardId"));
		log.info("freeBoardId {}", freeBoardId);
		 
		FreeBoardCommentDTO freeBoardCommentDTO = new FreeBoardCommentDTO();
		freeBoardCommentDTO.setMemberId(memberId);  
		freeBoardCommentDTO.setFreeBoardId(freeBoardId);
		freeBoardCommentDTO.setFreeBoardCommentContent(freeBoardCommentContent);
		freeBoardService.insertFreeBoardComment(freeBoardCommentDTO);
		return new JSONDataView();
	}
	//댓글 삭제 
	@DeleteMapping
	public View deleteFreeBoardComment(HttpServletResponse response, HttpServletRequest request, DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("freeBoardComment");
			HttpSession session = request.getSession();
			Long memberId = (Long) session.getAttribute("memberId");
			Long freeBoardCommentId = Long.parseLong(parameterGroup.getValue("freeBoardCommentId"));
			FreeBoardCommentDTO freeBoardCommentDTO = new FreeBoardCommentDTO();
			freeBoardCommentDTO.setMemberId(memberId);
			freeBoardCommentDTO.setFreeBoardCommentId(freeBoardCommentId);
			freeBoardService.deleteFreeBoardComment(freeBoardCommentDTO);
//		if(parameterGroup != null) {
//			Iterator<ParameterRow> iter = parameterGroup.getDeletedRows();
//			while (iter.hasNext()) {
//				Map<String, String> rowMap = iter.next().toMap();
//				FreeBoardCommentDTO freeBoardCommentDTO = mapToFreeBoardCommentDTO(rowMap);
//				freeBoardService.deleteFreeBoardComment(freeBoardCommentDTO);
//			}
//		}
			
		return new JSONDataView();
	}
	//댓글 수정 
	@PutMapping
	public View updateFreeBoardComment(HttpServletResponse response, HttpServletRequest request, DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("freeBoardComment");
		log.info("parameterGroup {}",parameterGroup);
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
//	//	Map을 DTO 타입으로 변경하는 메서드
//	private FreeBoardCommentDTO mapToFreeBoardCommentDTO(Map<String, String> rowMap) {
//		FreeBoardCommentDTO freeBoardCommentDTO = new FreeBoardCommentDTO();
//		freeBoardCommentDTO.setFreeBoardCommentId(Long.parseLong(rowMap.get("freeBoardCommentId"))); // map에서의 키
//		return freeBoardCommentDTO;
//	}
}
