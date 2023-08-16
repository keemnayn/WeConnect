package com.arezip.weconnect.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDTO {
	private long projectId;
	private String projectName;
	private Date projectStart;
	private Date projectEnd;
	private MemberDTO memberVO;
}
