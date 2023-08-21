package com.arezip.weconnect.test.member;

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
		/*
		 * void getListTest() {
		 * List<FreeBoardDTO> list = freeBoardMapper.getFreeBoardList();
		 * list.forEach(freeBoard -> log.info(freeBoard.toString())); assertNotNull(list); }
		 */
	}

// 건의사항 추가 mapper
	@Test
	void insertProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalTitle("매퍼 테스트 제목");
		proposalDTO.setProposalContent("매퍼 테스트 내용");
		int result = proposalMapper.insertProposal(proposalDTO);
		log.info("result {}", result);
	}

// 건의사항 수정 mapper
	@Test
	void updateProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalId(1);
		proposalDTO.setProposalTitle("매퍼 테스트 제목 수정");
		proposalDTO.setProposalContent("매퍼 테스트 내용 수정");
		proposalDTO.setProposalStatus("처리중");
		// int result = proposalMapper.updateProposal(proposalDTO);
		// assertNotEquals(0, result);
	}

// 건의사항 삭제 mapper
	@Test
	void deleteProposalTest() {
		ProposalDTO proposalDTO = new ProposalDTO();
		proposalDTO.setProposalId(2);
		// int result = proposalMapper.deleteProposal(proposalDTO);
		// assertNotEquals(0, result);
	}

// 	건의사항 검색 mapper
	@Test
	void selectProposalBySearchCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "입니다");

		List<ProposalDTO> list = proposalMapper.selectProposalBySearchCriteria(searchParams);
		/*
		 * // null 여부 확인 assertNotNull(list);
		 * 
		 * // 리스트가 비어있지 않은지 검증 assertFalse(list.isEmpty());
		 * 
		 * // 결과 출력 list.forEach(proposal -> log.info(proposal.toString()));
		 */

	}
}