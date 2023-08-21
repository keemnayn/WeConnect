package com.arezip.weconnect.service;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.dto.ProposalDTO;

public interface ProposalService {
// 건의사항 전체 조회	
	List<ProposalDTO> findAllProposals();
	
// 건의사항 추가
	int addProposal(ProposalDTO proposalDTO);

// 건의사항 수정
	int updateProposal(ProposalDTO proposalDTO);
	
// 건의사항 삭제
	int deleteProposal(ProposalDTO proposalDTO);
	
// 건의사항 검색
	List<ProposalDTO> selectProposal(Map<String, String> searchParams);
}
