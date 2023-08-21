package com.arezip.weconnect.controller.member.proposal;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.ProposalDTO;
import com.arezip.weconnect.service.ProposalService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

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
		ParameterGroup param= dataRequest.getParameterGroup("proposalCreateParam");
		if(param != null) {
			String proposalTitle=param.getValue("proposalTitle");
			String proposalContent=param.getValue("proposalContent");
			String proposalStatus=param.getValue("proposalStatus");
			log.info("proposalTitle {}", proposalTitle);
			log.info("proposalContent {}", proposalContent);
			log.info("proposalStatus {}", proposalStatus);
			ProposalDTO proposalDTO=new ProposalDTO();
			proposalDTO.setProposalTitle(proposalTitle);
			proposalDTO.setProposalContent(proposalContent);
			proposalDTO.setProposalStatus(proposalStatus);
			proposalService.addProposal(proposalDTO);
		}
		return new JSONDataView();
	}
	
}