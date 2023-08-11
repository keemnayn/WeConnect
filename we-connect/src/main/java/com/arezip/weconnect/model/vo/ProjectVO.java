package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectVO {
	private long projectId;
	private String projectName;
	private Date projectStart;
	private Date projectEnd;
	private MemberVO memberVO;
}
