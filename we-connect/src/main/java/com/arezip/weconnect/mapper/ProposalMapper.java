package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.ProposalDTO;

@Mapper
public interface ProposalMapper {
	
	List<ProposalDTO> getProposalList(long memberId);
}
