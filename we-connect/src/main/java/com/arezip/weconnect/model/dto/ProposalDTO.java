package com.arezip.weconnect.model.dto;

import java.util.Date;

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
	private Date proposalCreate;
	private String proposalStatus;
}
