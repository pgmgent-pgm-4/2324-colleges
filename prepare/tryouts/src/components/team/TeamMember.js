import React from "react";
import styles from "./TeamMember.module.css";
import styled from "styled-components";

const Leader = styled.div`
	background-color: red;
`;
const Member = styled.div`
	background-color: gold;
`;

export default function TeamMember({ type }) {
	return (
		<>
			<div className={styles[type]}>TeamMember {type}</div>
			{type === "member" ? <Member>member</Member> : <Leader>Leader</Leader>}
		</>
	);
}
