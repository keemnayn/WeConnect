package com.arezip.weconnect.controller.member.proposal;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.NoticeDTO;
import com.arezip.weconnect.model.dto.ProposalDTO;
import com.arezip.weconnect.service.ProposalService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/proposals") // 서브미션 url과 동일
@RequiredArgsConstructor
public class ProposalRestController {
	private final ProposalService proposalService;

// 건의사항 목록
	@GetMapping
	public View getAllProposals(DataRequest dataRequest) {
		List<ProposalDTO> proposalList = proposalService.findAllProposals();
		dataRequest.setResponse("proposalList", proposalList);
		return new JSONDataView();
	}

// 건의사항 등록
	@PostMapping
	public View postProposal(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("proposalCreateParam");
		if (param != null) {
			//Long proposalId = Long.parseLong(param.getValue("proposalId"));
			long memberId=128;
			String proposalTitle = param.getValue("proposalTitle");
			String proposalContent = param.getValue("proposalContent");
			//String proposalStatus = param.getValue("proposalStatus");
			//log.info("proposalId {}", proposalId); 
			log.info("proposalTitle {}", proposalTitle);
			log.info("proposalContent {}", proposalContent);
			//log.info("proposalStatus {}", proposalStatus);
			ProposalDTO proposalDTO = new ProposalDTO();
			//proposalDTO.setProposalId(proposalId);
			proposalDTO.setProposalTitle(proposalTitle);
			proposalDTO.setProposalContent(proposalContent);
			//proposalDTO.setProposalStatus(proposalStatus);
			proposalService.addProposal(proposalDTO);
		}
		return new JSONDataView();
	}
	
// 건의사항 수정
	@PutMapping
	public View updateProposal(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup param=dataRequest.getParameterGroup("proposalUpdateParam");
		if (param != null) {
			Long proposalId = Long.parseLong(param.getValue("proposalId"));
			String proposalTitle = param.getValue("proposalTitle");
			String proposalContent = param.getValue("proposalContent");
			log.info("proposalId {}", proposalId);
			log.info("proposalTitle {}", proposalTitle);
			log.info("proposalContent {}", proposalContent);
			HttpSession session = request.getSession();
			Long memberId = (Long) session.getAttribute("memberId");
			ProposalDTO proposalDTO = new ProposalDTO();
			proposalDTO.setProposalId(proposalId);
			proposalDTO.setProposalTitle(proposalTitle);
			proposalDTO.setProposalContent(proposalContent);
			proposalDTO.setMemberId(memberId);
			proposalService.updateProposal(proposalDTO);
		}
		return new JSONDataView();
	}
	
	
	
	
	
	/*
	 * // 건의사항 상세 dialog 조회
	 * 
	 * @GetMapping public View getProposalDetail(DataRequest dataRequest,
	 * HttpServletRequest request) { List<ProposalDTO> proposalList =
	 * ProposalService.getProposalReadList(memberId);
	 * System.out.println(proposalList); dataRequest.setResponse("proposalReadList",
	 * proposalReadList); return new JSONDataView(); }
	 */
	/*
	 * // 건의사항 검색
	 * 
	 * @GetMapping("search") public View searchProposal(DataRequest dataRequest) {
	 * ParameterGroup param=dataRequest.getParameterGroup("searchParam");
	 * Map(<String, String> searchParams=new HashMap(String, String>(); String
	 * searchStatus=null; String searchTitle=null; String searchContent=null; if
	 * (param != null) { searchTitle = param.getValue("searchTitle");
	 * searchTitle=param.getValue()
	 * 
	 * }
	 */
}
