package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProposalVO {
	private long proposalId;
	private String proposalTitle;
	private String proposalContent;
	private Date proposalCreate;
	private String proposalStatus;
	private MemberVO memberVO;
}
