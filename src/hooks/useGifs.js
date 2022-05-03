// devuelve los gifs a través de la KEYWORD que le pasamos, si no le pasamos ninguno usará la cookie y si no tiene nada de esto, buscara gifs de batman

import { useEffect, useState, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export default function useGifs({ keyword } = { keyword: null }) {
	const [loading, setLoading] = useState(false);
	const { gifs, setGifs } = useContext(GifsContext);

	// se ejecuta cada vez que la keyword cambia
	useEffect(
		function () {
			setLoading(true);
			//recuperamos la keyword del localstorage
			const keywordToUse =
				keyword || localStorage.getItem("lastKeyword") || "batman";

			getGifs({ keyword: keywordToUse }).then((gifs) => {
				setGifs(gifs);
				setLoading(false);
				//guardamos la keyword en el localstorage
				localStorage.setItem("lastKeyword", keyword);
			});
		},
		[keyword, setGifs]
	);

	return { loading, gifs };
}
