import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

//usmaos el proveedor creado donde guardamos el gif para poder enviarselo al componente GIF y asi mostrarlo
export default function Detail({ params }) {
	const gifs = useGlobalGifs();
	const gif = gifs.find((singleGif) => singleGif.id === params.id);
	console.log(gif);
	return <Gif {...gif} />;
}
