import { useState } from "react";
import "./App.css";

import emojis from "./data/emojis.json";
import SearchForm from "./components/SearchForm";
import EmojiResults from "./components/EmojiResults";

function App() {
	const [filteredEmojis, setFilteredEmojis] = useState(emojis);
	const handleSearch = (searchStr) => {
		const lcSearchString = searchStr.toLowerCase();
		setFilteredEmojis(
			emojis.filter(
				(e) =>
					e.title.toLowerCase().includes(lcSearchString) ||
					e.keywords.toLowerCase().includes(lcSearchString)
			)
		);
	};

	return (
		<div>
			<SearchForm onSearch={handleSearch} />
			<EmojiResults emojis={filteredEmojis} />
		</div>
	);
}

export default App;
