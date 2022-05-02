import { Link } from "wouter";

const POPULAR_GIFS = ["Mapaches", "Pandas", "Vinicius"];

export default function Home() {
	return (
		<>
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
