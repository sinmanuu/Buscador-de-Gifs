import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { Link, Route } from "wouter";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
	return (
		<StaticContext.Provider value={{}}>
			<div className="App">
				<section className="App-content">
					<Link to="/">
						<img className="App-logo" alt="Giffy logo" src="/logo.png" />
					</Link>
					<GifsContextProvider>
						<Route component={Home} path="/" />
						<Route component={SearchResults} path="/search/:keyword" />
						<Route component={Detail} path="/gif/:id" />
					</GifsContextProvider>
					{/* cuando la ruta sea: x.com/search/panda, llamará al componente ListOfGifs con el keyword panda*/}
					{/* <Route path="/search/:keyword" component={ListOfGifs} /> */}
				</section>
			</div>
		</StaticContext.Provider>
	);
}

export default App;
