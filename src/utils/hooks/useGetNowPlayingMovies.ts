import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../../redux/movieSlice";
import { useEffect } from "react";

const useGetNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchNowPlayingMovie = async () => {
            try {
                const response = await fetch(
                    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
                    API_OPTIONS
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = (await response.json());
                if (!("results" in data)) {
                    throw new Error("Invalid data format: results not found");
                }
                dispatch(addNowPlayingMovies(data.results));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchNowPlayingMovie();
    }, [dispatch]);


}
export default useGetNowPlayingMovies;