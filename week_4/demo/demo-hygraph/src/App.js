import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_TODOS } from "./graphql/queries";

function App() {
	const { loading, error, data } = useQuery(GET_ALL_TODOS);
	if (loading) return <div>... Loading</div>;
	if (error) return <div>... error</div>;

	return (
		<div className="App">
			{data.todos.map((todo) => (
				<div key={todo.id}>
					<h2>{todo.title}</h2>
					<p>{todo.description}</p>
				</div>
			))}
		</div>
	);
}

export default App;
