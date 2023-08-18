package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.dto.MemberDTO;

public interface AdminMemberService {
	List<MemberDTO> getApprovedMembers();

	List<MemberDTO> getApprovedMembersByCriteria(Map<String, String> searchParams);

	int updateMemberDetails(MemberDTO memberDTO);
}
