package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProposalDTO {
	private long proposalId;
	private String proposalTitle;
	private String proposalContent;
	private String proposalCreate;
	private String proposalStatus;
	private String memberName;
	private long memberId;
	private long PMemberId;
}
