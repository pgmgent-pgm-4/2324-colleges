import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { About, Contact, Home } from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
		</>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
