import { Link, useLocation } from "wouter";
import { useState } from "react";

const POPULAR_GIFS = ["Mapaches", "Pandas", "Vinicius"];

export default function Home() {
	const [keyword, setKeyword] = useState("");
	const [path, pushLocation] = useLocation();

	const handleSUbmit = (evt) => {
		evt.preventDefault();
		// pushLocation es como un TO del LINK de WOUTER, le decimos que vaya a la ruta del input
		pushLocation(`/search/${keyword}`);
	};

	const handleChange = (evt) => {
		setKeyword(evt.target.value);
	};

	return (
		<>
			<form onSubmit={handleSUbmit}>
				<input onChange={handleChange} type="text" value={keyword} />
			</form>
			<h3 className="App-title">Gifs más populares</h3>
			<ul>
				{POPULAR_GIFS.map((popularGif) => (
					<li key={popularGif}>
						<Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
