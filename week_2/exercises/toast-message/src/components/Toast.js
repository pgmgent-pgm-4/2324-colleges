import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdError, MdWarning } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const StyledToast = styled.div`
	background-color: ${(props) => props.lightColor};
	border-left: 5px solid ${(props) => props.darkColor};
	max-width: 26rem;
	padding: 0.7rem;
	text-align: left;
	display: flex;
	align-items: center;
	gap: 1rem;
	h2 {
		color: ${(props) => props.darkColor};
	}
	.toast-icon {
		font-size: 1.8rem;
		color: ${(props) => props.darkColor};
	}
`;

export default function Toast({ type, message }) {
	const [content, setContent] = useState({
		lightColor: "#e0eefb",
		darkColor: "#e0eefb",
		title: "Info",
		icon: <MdError />,
	});
	useEffect(() => {
		console.log(type);
		switch (type) {
			case "error":
				setContent((prev) => {
					return {
						...prev,
						lightColor: "#ffe7e0",
						darkColor: "#ff8864",
						title: "Error",
						icon: <MdError />,
					};
				});
				break;
			case "warning":
				setContent((prev) => {
					return {
						...prev,
						lightColor: "#fff0db",
						darkColor: "#ffb74d",
						title: "Warning",
						icon: <MdWarning />,
					};
				});
				break;
			case "success":
				setContent((prev) => {
					return {
						...prev,
						lightColor: "#e6f4e7",
						darkColor: "#81c785",
						title: "Success",
						icon: <IoCheckmarkCircleSharp />,
					};
				});
				break;
			default:
				setContent((prev) => {
					return {
						...prev,
						lightColor: "#e0eefb",
						darkColor: "#e0eefb",
						title: "Info",
						icon: <MdError />,
					};
				});
				break;
		}
	}, []);

	return (
		<StyledToast lightColor={content.lightColor} darkColor={content.darkColor}>
			<div className="toast-icon">{content.icon}</div>
			<div>
				<h2>{content.title}</h2>
				<p>{message}</p>
			</div>
		</StyledToast>
	);
}
