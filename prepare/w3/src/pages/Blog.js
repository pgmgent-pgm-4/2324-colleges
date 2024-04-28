import React, { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import BlogPostsList from "../components/BlogPostsList";

import posts from "../data/posts.json";
import { Container } from "@mui/material";

export default function Blog() {
	//dynamic routes /blog/:postId -> /blog/2
	const { postId } = useParams();
	// ? variables in url /?name=evelien
	const [searchParams, setSearchParams] = useSearchParams();
	const [alreadyRead, setAlreadyRead] = useState(
		JSON.parse(searchParams.get("alreadyRead"))
	);

	return (
		<Container>
			<h1>Blog</h1>
			{!postId &&
				posts.map((post, i) => (
					<Link key={`post-${i}`} to={`/blog/${post.id}`}>
						<BlogPostsList post={post} />
					</Link>
				))}
			{postId && (
				<BlogPost
					post={posts.filter((post) => post.id == postId)}
					alreadyRead={alreadyRead}
				/>
			)}
		</Container>
	);
}
