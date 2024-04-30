import logo from "./logo.svg";
import "./App.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { ROUTES } from "./routes/routes";
import { StudentDetails, Students } from "./pages";
import Root from "./layouts/Root";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path={ROUTES.home.path} element={<Students />} />
			<Route path={ROUTES.studentDetail.path} element={<StudentDetails />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
