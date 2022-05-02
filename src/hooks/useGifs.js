// devuelve los gifs a través de la KEYWORD que le pasamos

import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export default function useGifs({ keyword }) {
	const [loading, setLoading] = useState(false);
	const [gifs, setGifs] = useState([]);

	// se ejecuta cada vez que la keyword cambia
	useEffect(
		function () {
			setLoading(true);
			getGifs({ keyword }).then((gifs) => {
				setGifs(gifs);
				setLoading(false);
			});
		},
		[keyword]
	);
	return { loading, gifs };
}
