package com.arezip.weconnect.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.ProposalMapper;
import com.arezip.weconnect.model.dto.ProposalDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProposalServiceImpl implements ProposalService {
	private final ProposalMapper proposalMapper;

// 건의사항 전체 조회
	@Override
	public List<ProposalDTO> findAllProposals() {
		return proposalMapper.selectAllProposals();
	}

// 건의사항 추가
	@Override
	public int addProposal(ProposalDTO proposalDTO) {
		return proposalMapper.insertProposal(proposalDTO);
	}

// 건의사항 수정
	@Override
	public int updateProposal(ProposalDTO proposalDTO) {
		return proposalMapper.updateProposal(proposalDTO);
	}

// 건의사항 삭제
	@Override
	public int deleteProposal(ProposalDTO proposalDTO) {
		return proposalMapper.deleteProposal(proposalDTO);
	}

// 건의사항 검색
	@Override
	public List<ProposalDTO> searchProposal(Map<String, String> searchParams) {
		return proposalMapper.searchProposal(searchParams);
	}
}
