
package com.arezip.weconnect.controller.admin.proposal;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.ProposalDTO;
import com.arezip.weconnect.service.admin.AdminProposalService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.ParameterRow;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/admin/proposals")
@RequiredArgsConstructor
public class AdminProposalRestController {
	public final AdminProposalService adminProposalService;

// 건의사항 목록
	@GetMapping
	public View getAllProposals(DataRequest dataRequest) {
		List<ProposalDTO> proposalList = adminProposalService.findAllProposals();
		dataRequest.setResponse("proposalList", proposalList);
		return new JSONDataView();
	}

// 건의사항 처리 상태 변경
	public View updateProposalStatus(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("proposalList");
		if (parameterGroup != null) {
			Iterator<ParameterRow> iterator=parameterGroup.getUpdatedRows();
			while (iterator.hasNext()) {
				Map<String, String> rowMap=iterator.next().toMap();
				ProposalDTO proposalDTO=mapToProposalDTO(rowMap);
				adminProposalService.updateProposalStatus(proposalDTO);
			}
		}
		return new JSONDataView();
	}
	
// Map을 DTO 타입으로 변경하는 메서드
	private ProposalDTO mapToProposalDTO(Map<String, String> rowMap) {
		ProposalDTO proposalDTO=new ProposalDTO();
		proposalDTO.setProposalId(Long.parseLong(rowMap.get("proposalId"))); //map에서의 키
		return proposalDTO;
	}


}