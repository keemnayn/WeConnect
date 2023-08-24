package com.arezip.weconnect.controller.member.freeboard;

import java.util.HashMap;
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
import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
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
	//검색
	@GetMapping("search")
	public View searchFreeBoardList(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("searchParam");
		Map<String, String> searchParams = new HashMap<String, String>();
		String searchType = null;
		String searchText = null;
		if(param != null) {
			searchType = param.getValue("searchType");
			searchText = param.getValue("searchText");
		}
		List<FreeBoardDTO> freeBoardList = null;
		//searchText가 빈 문자열이거나 null이면 전체 리스트 반환
		if(searchText == null || searchText.trim().isEmpty()) {
			freeBoardList = freeBoardService.getFreeBoardList();
		} else {
			if(searchType != null && !"".equals(searchType.trim())) {
				searchParams.put("searchType", searchType);
			}
			searchParams.put("searchText",searchText);
			freeBoardList = freeBoardService.searchFreeBoardList(searchParams);
		}
		dataRequest.setResponse("boardList", freeBoardList);
		return new JSONDataView();
	}
	// 자유게시판 새글 쓰기
	@PostMapping
	public View newBoardSave(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup param = dataRequest.getParameterGroup("boardInsertParam");
		if (param != null) {
			HttpSession session = request.getSession();
			Long memberId=(Long) session.getAttribute("memberId");
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
		}
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
	
	//자유게시판 글 삭제
	@DeleteMapping
	public View deleteFreeBoard(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup param = dataRequest.getParameterGroup("freeBoardDetail");
		//파라미터에서 데이터 추출하여 처리
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		Long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
		// 추출된 데이터를 로그로 출력
		log.info("memberId {}", memberId);
		log.info("freeBoardId {}", freeBoardId);
		// 추출된 데이터를 ProposalDTO 객체에 설정
		FreeBoardDTO freeBoardDTO = new FreeBoardDTO();
		freeBoardDTO.setMemberId(memberId);
		freeBoardDTO.setFreeBoardId(freeBoardId);
		freeBoardService.deleteFreeBoard(freeBoardDTO);
		return new JSONDataView();
	}
	//자유게시판 글 수정
	@PutMapping
	public View updateFreeBoard(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup param =dataRequest.getParameterGroup("freeBoardDetail");
		if (param != null) {
			HttpSession session = request.getSession();
			Long memberId = (Long) session.getAttribute("memberId"); 
			Long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
			String freeBoardTitle = param.getValue("freeBoardTitle");
			String freeBoardContent = param.getValue("freeBoardContent");
			FreeBoardDTO freeBoardDTO = new FreeBoardDTO();
			freeBoardDTO.setMemberId(memberId);
			freeBoardDTO.setFreeBoardId(freeBoardId);
			freeBoardDTO.setFreeBoardTitle(freeBoardTitle);
			freeBoardDTO.setFreeBoardContent(freeBoardContent);
			freeBoardService.updateFreeBoard(freeBoardDTO);
		}
		return new JSONDataView();
	}
}
