package com.arezip.weconnect.mapper.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.MemberDTO;

@Mapper
public interface AdminMemberMapper {
	List<MemberDTO> selectApprovedMembers();

	List<MemberDTO> selectApprovedMembersByCriteria(Map<String, String> searchParams);

	int updateMemberDetails(MemberDTO memberDTO);
}