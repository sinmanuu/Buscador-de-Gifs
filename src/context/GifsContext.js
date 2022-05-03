import React, { useState } from "react";

const Context = React.createContext({});

//creamos nuestro mismo proveedor donde le pasaremos el gif que hemos seleccionado
export function GifsContextProvider({ children }) {
	const [gifs, setGifs] = useState([]);

	return (
		<Context.Provider value={{ gifs, setGifs }}>{children}</Context.Provider>
	);
}
export default Context;
