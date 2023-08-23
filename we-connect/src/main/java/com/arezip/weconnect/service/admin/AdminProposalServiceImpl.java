
package com.arezip.weconnect.service.admin;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.admin.AdminProposalMapper;
import com.arezip.weconnect.model.dto.ProposalDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdminProposalServiceImpl implements AdminProposalService {
	private final AdminProposalMapper adminProposalMapper;

	// 건의사항 전체 조회
	@Override
	public List<ProposalDTO> findAllProposals() {
		return adminProposalMapper.selectAllProposals();
	}

	// 건의사항 처리 상태 변경
	@Override
	public int updateProposalStatus(ProposalDTO proposalDTO) {
		return adminProposalMapper.updateProposalStatus(proposalDTO);
	}

	// 건의사항 삭제
	@Override
	public int deleteProposal(ProposalDTO proposalDTO) {
		return adminProposalMapper.deleteProposal(proposalDTO);
	}

}
