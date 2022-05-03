//creamos un hook para llamar al context que contiene el gif seleccionado
import { useContext } from "react";
import GifsContextProvider from "../context/GifsContext";

export default function useGlobalGifs() {
	const { gifs } = useContext(GifsContextProvider);
	return gifs;
}
