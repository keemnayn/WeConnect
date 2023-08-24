package com.arezip.weconnect.test.proposal;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.arezip.weconnect.model.dto.ProposalDTO;
import com.arezip.weconnect.service.ProposalService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class ProposalServiceTest {
	@Autowired
	ProposalService proposalService;

// 건의사항 전체 목록 service
	@Test
	void findAllProposalsTest() {
		List<ProposalDTO> list = proposalService.findAllProposals();
		list.forEach(proposal -> log.info(proposal.toString()));
	}

// 건의사항 추가 service
	@Test
	@Transactional // 테스트 이후 롤백을 위해
	void addProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalContent("서비스 테스트 제목");
		proposalDTO.setProposalContent("서비스 테스트 내용");
		proposalDTO.setProposalStatus("처리중");
		// int result = proposalService.addProposal(proposalDTO);
		// assertNotEquals(0, result);
	}

// 건의사항 수정 service
	@Test
	void updateProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalId(1);
		proposalDTO.setProposalTitle("서비스 테스트 제목 수정");
		proposalDTO.setProposalContent("서비스 테스트 내용 수정");
		proposalDTO.setMemberId(128);
		int result = proposalService.updateProposal(proposalDTO);
		log.info("result {}", result);
	}

// 건의사항 삭제 service
	@Test
	void deleteProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalId(5);
		int result = proposalService.deleteProposal(proposalDTO);
		log.info("result {}", result);
	}

// 	건의사항 검색 service
	@Test
	void selectProposalTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "언제");
		List<ProposalDTO> list = proposalService.selectProposal(searchParams);
		/*
		 * // null 여부 확인 assertNotNull(list);
		 * 
		 * // 리스트가 비어있지 않은지 검증 assertFalse(list.isEmpty());
		 * 
		 * // 결과 출력 list.forEach(proposal -> log.info(proposal.toString()));
		 */
	}
}