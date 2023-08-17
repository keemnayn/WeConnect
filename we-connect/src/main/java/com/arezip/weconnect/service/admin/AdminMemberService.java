package com.arezip.weconnect.service.admin;

import java.util.List;

import com.arezip.weconnect.model.dto.MemberDTO;

public interface AdminMemberService {
	List<MemberDTO> getApprovedMembers();
}
