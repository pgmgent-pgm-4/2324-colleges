import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
	query getAllPosts {
		posts {
			excerpt
			id
			title
			slug
			coverImage {
				altText
				url
			}
			content {
				html
			}
		}
	}
`;
