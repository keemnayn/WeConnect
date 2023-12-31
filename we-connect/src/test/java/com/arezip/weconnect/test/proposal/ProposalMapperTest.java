package com.arezip.weconnect.test.proposal;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.ProposalMapper;
import com.arezip.weconnect.model.dto.ProposalDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class ProposalMapperTest {
	@Autowired
	ProposalMapper proposalMapper;

// 건의사항 전체 목록 mapper
	@Test
	void selectAllProposalsTest() {
		List<ProposalDTO> list = proposalMapper.selectAllProposals();
		list.forEach(proposal -> log.info(proposal.toString()));
	}

// 건의사항 추가 mapper
	@Test
	void insertProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalTitle("매퍼 테스트");
		proposalDTO.setProposalContent("매퍼 테스트 내용");
		proposalDTO.setMemberId(128);
		int result = proposalMapper.insertProposal(proposalDTO);
		log.info("result {}", result);
	}

// 건의사항 수정 mapper
	@Test
	void updateProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalId(1);
		proposalDTO.setProposalTitle("매퍼 테스트 제목 수정수서");
		proposalDTO.setProposalContent("매퍼 테스트 내용 수정");
		proposalDTO.setMemberId(128);
		int result = proposalMapper.updateProposal(proposalDTO);
		log.info("result {}", result);
		// assertNotEquals(0, result);
	}

// 건의사항 삭제 mapper
	@Test
	void deleteProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalId(8);
		proposalDTO.setMemberId(141);
		int result = proposalMapper.deleteProposal(proposalDTO);
		log.info("result {}", result);
		// assertNotEquals(0, result);
	}

// 	건의사항 검색 mapper
	@Test
	void searchProposalTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "입니다");
		List<ProposalDTO> list = proposalMapper.searchProposal(searchParams);
		/*
		 * // null 여부 확인 assertNotNull(list);
		 * 
		 * // 리스트가 비어있지 않은지 검증 assertFalse(list.isEmpty());
		 * 
		 * // 결과 출력 list.forEach(proposal -> log.info(proposal.toString()));
		 */

	}
}