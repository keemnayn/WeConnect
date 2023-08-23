package com.arezip.weconnect.test.admin.proposal;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.ProposalDTO;
import com.arezip.weconnect.service.admin.AdminProposalService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminProposalServiceTest {
	@Autowired
	AdminProposalService adminProposalService;

// 건의사항 전체 리스트 service
	@Test
	void findAllProposalsTest() {
		List<ProposalDTO> list = adminProposalService.findAllProposals();
		list.forEach(proposal -> log.info(proposal.toString()));
	}
	
// 건의사항 처리 상태 변경 service
	@Test
	void updateProposalStatusTest() {
		ProposalDTO proposalDTO=new ProposalDTO();
		proposalDTO.setProposalId(1);
		proposalDTO.setProposalStatus("완료");
		int result=adminProposalService.updateProposalStatus(proposalDTO);
		log.info("result {}", result);
	}
	
}
