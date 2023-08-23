package com.arezip.weconnect.test.admin.proposal;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.admin.AdminProposalMapper;
import com.arezip.weconnect.model.dto.ProposalDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminProposalMapperTest {
	@Autowired
	AdminProposalMapper adminProposalMapper;

// 건의사항 전체 목록 mapper
	@Test
	void selectAllProposalsTest() {
		List<ProposalDTO> list = adminProposalMapper.selectAllProposals();
		list.forEach(proposal -> log.info(proposal.toString()));
		// int result = adminProposalMapper.insertProposal(proposalDTO);
		// log.info("result {}", result);
	}

// 건의사항 처리 상태 변경 mapper
	@Test
	void updateProposalStausTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalId(13);
		proposalDTO.setProposalStatus("완료");
		int result = adminProposalMapper.updateProposalStatus(proposalDTO);
		log.info("result {}", result);
	}
// 건의사항 삭제 mapper
	@Test
	void deleteProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalId(22);
		int result = adminProposalMapper.deleteProposal(proposalDTO);
		log.info("result {}", result);
	}

}
