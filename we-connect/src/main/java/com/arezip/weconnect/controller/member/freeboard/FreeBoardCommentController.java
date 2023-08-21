package com.arezip.weconnect.controller.member.freeboard;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/boards/comment") // submission action 도메인과 같음
@RequiredArgsConstructor
public class FreeBoardCommentController {
	private final FreeBoardService freeBoardService;
	
//	//자유게시판 댓글 조회
//	@GetMapping
//	public View boardDetailComment(DataRequest dataRequest) {
//		ParameterGroup param = dataRequest.getParameterGroup("boardParam");
//		Long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
//		List<FreeBoardCommentDTO> freeBoardComment = freeBoardService.getFreeBoardDetailComment(freeBoardId);
//		dataRequest.setResponse("freeBoardComment", freeBoardComment);
//		return new JSONDataView();
//	} 
}
