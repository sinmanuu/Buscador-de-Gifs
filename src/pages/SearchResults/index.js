import Spinner from "../../components/Spinner";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import useGifs from "../../hooks/useGifs";

export default function SearchResults({ params }) {
	const { keyword } = params;
	//recuperamos los gifs y el loading del custom hook useGifs
	const { loading, gifs } = useGifs({ keyword });

	return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}
