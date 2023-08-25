package com.arezip.weconnect.mapper.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.ProposalDTO;

@Mapper
public interface AdminProposalMapper {
// 건의사항 전체 조회
	List<ProposalDTO> selectAllProposals();

// 건의사항 처리 상태 변경
	int updateProposalStatus(ProposalDTO proposalDTO);

// 건의사항 삭제
	int deleteProposal(ProposalDTO proposalDTO);

// 건의사항 검색
	List<ProposalDTO> searchProposal(Map<String, String> searchParams);
}
