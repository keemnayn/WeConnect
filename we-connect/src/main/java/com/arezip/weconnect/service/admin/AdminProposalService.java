package com.arezip.weconnect.service.admin;

import java.util.List;

import com.arezip.weconnect.model.dto.ProposalDTO;


public interface AdminProposalService {
// 건의사항 전체 목록
	List<ProposalDTO> findAllProposals();

// 건의사항 처리 상태 변경
	int updateProposalStatus(ProposalDTO proposalDTO);

// 건의사항 삭제
	int deleteProposal(ProposalDTO proposalDTO);
}
