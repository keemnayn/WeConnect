package com.arezip.weconnect.controller.member.freeboard;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/boards") // submission action 도메인과 같음
@RequiredArgsConstructor
public class FreeBoardRestController {
	private final FreeBoardService freeBoardService;

	// 자유게시판 게시글 리스트 조회
	@GetMapping
	public View freeBoardListPage(DataRequest dataRequest) {
		List<FreeBoardDTO> boardList = freeBoardService.getFreeBoardList();
		dataRequest.setResponse("boardList", boardList);// 데이터셋 이름과 같음
		return new JSONDataView();
	}

	// 자유게시판 새글 쓰기
	@PostMapping
	public View newBoardSave(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("boardInsertParam");

		long memberId = 24;
		String freeBoardTitle = param.getValue("freeBoardTitle");
		String freeBoardContent = param.getValue("freeBoardContent");
		String freeBoardFileName = param.getValue("freeBoardFileName");

		log.info("freeBoardTitle: {}", freeBoardTitle);
		log.info("freeBoardContent: {}", freeBoardContent);
		log.info("freeBoardFileName: {}", freeBoardFileName);

		FreeBoardDTO freeBoardDTO = new FreeBoardDTO();
		freeBoardDTO.setMemberId(memberId);
		freeBoardDTO.setFreeBoardTitle(freeBoardTitle);
		freeBoardDTO.setFreeBoardContent(freeBoardContent);
		freeBoardDTO.setFreeBoardFileName(freeBoardFileName);

		freeBoardService.insertFreeBoard(freeBoardDTO);
		return new JSONDataView();

	}
	
	//자유게시판 상세 조회 dialog 사용
	@GetMapping("detail")
	public View freeBoardDetail(DataRequest dataRequest) {
		System.out.println("dataRequest"+dataRequest);
		ParameterGroup param =dataRequest.getParameterGroup("detailBoardParam");
		System.out.println("param"+param);
		long freeBoardId = Long.parseLong(param.getValue("freeBoardId")); 
		log.info("freeBoardId {}", freeBoardId);
		FreeBoardDTO freeBoardDTO = freeBoardService.getFreeBoardDetail(freeBoardId);
		List<FreeBoardCommentDTO> freeBoardCommentDTO = freeBoardService.getFreeBoardComment(freeBoardId);
		dataRequest.setResponse("freeBoardDetail", freeBoardDTO);
		dataRequest.setResponse("freeBoardComment", freeBoardCommentDTO);
		log.info("freeBoardDTO {}",freeBoardDTO);
		log.info("freeBoardCommentDTO {}", freeBoardCommentDTO);
		log.info("상세 목록{}",freeBoardService.getFreeBoardDetail(freeBoardId));
		return new JSONDataView();
	}
	
	
	// 자유게시판 상세 조회 UIView 사용
//	@GetMapping("detail")
//	public View boardDetail(DataRequest dataRequest, String freeBoardId) {
//		System.out.println("==============boardDetail===============");
//		ParameterGroup param = dataRequest.getParameterGroup("boardParam");
//		System.out.println("param->" + param.toString());
//		System.out.println(freeBoardId);
//		Long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
//		System.out.println("freeBoardId -> " + freeBoardId);
//		FreeBoardDTO freeBoardDetail = freeBoardService.getFreeBoardDetail(freeBoardId);
//		Map<String, Object> message = new HashMap<>();
//		message.put("url", "boardDetail");
//		dataRequest.setMetadata(true, message);
//		dataRequest.setResponse("freeBoardDetail", freeBoardDetail);
//		return new JSONDataView();
//	}
}
