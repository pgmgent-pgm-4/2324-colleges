import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_POST_BY_SLUG } from "../graphql/queries";
import parse from "html-react-parser";

export default function BlogPost() {
	const { slug } = useParams();
	console.log(slug);
	const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
		variables: { slug },
	});
	if (loading) return <>...loading</>;
	if (error) return <>...error</>;
	if (data) console.log(data);
	// used  html-react-parser library to parse html into react
	return <div>{parse(data.post.content.html)}</div>;
}
