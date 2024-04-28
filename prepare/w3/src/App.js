import logo from "./logo.svg";
import "./App.css";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { About, Contact, ErrorPage, Home } from "./pages";
import { Root } from "./layouts";
import Blog from "./pages/Blog";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

async function loadPosts() {
	const response = await fetch(POST_URL);
	const posts = await response.json();
	return posts;
}

async function loadPost(postid) {
	const response = await fetch(`${POST_URL}/${postid}`);
	const post = await response.json();
	return post;
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/blog" element={<Blog />}>
				<Route path="/blog/:postId" element={<Blog />} />
			</Route>
			<Route path="/contact" element={<Contact />} />
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
