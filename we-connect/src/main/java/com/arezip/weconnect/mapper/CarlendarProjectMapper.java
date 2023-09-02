package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.model.dto.ProjectMemberDTO;

@Mapper
public interface CarlendarProjectMapper {
	List<ProjectDTO> findProjectByMemberId(long memberId);
	//프로젝트 insert
	void insertProject(ProjectDTO projectDTO);
	//멤버 데려오고
    List<MemberDTO> selectMemberDepartment(long departmentId);
    //멤버 찾기
    long selectDepartmentId(long memberId);
    //찾은 멤버로 프로젝트 insert
    void insertProjectMember(ProjectMemberDTO projectMemberDTO);
}
