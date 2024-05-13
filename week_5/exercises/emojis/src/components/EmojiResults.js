import React from "react";
import EmojiResultRow from "./EmojiResultRow";

export default function EmojiResults({ emojis }) {
	return (
		<div className="emoji-results">
			{emojis.map((emojiData) => (
				<EmojiResultRow
					key={emojiData.title}
					symbol={emojiData.symbol}
					title={emojiData.title}
				/>
			))}
		</div>
	);
}
