package com.arezip.weconnect.controller.member.proposal;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.ProposalDTO;
import com.arezip.weconnect.service.ProposalService;
import com.cleopatra.protocol.data.DataRequest;
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
}
