import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { GetMovieFromUsingIdRespType } from "../../pages/Browse/VideoBackground";
import { addTrailerMovies } from "../../redux/movieSlice";

export const useGetTrailerMovie = (movieId: string) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getMovieFromUsingId = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                    API_OPTIONS
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data =
                    (await response.json()) as GetMovieFromUsingIdRespType;
                if (!("results" in data)) {
                    throw new Error("Invalid data format: results not found");
                }
                const filteredData = data.results.filter(
                    (d) => d.type === "Trailer"
                );
                dispatch(addTrailerMovies(filteredData.at(0)?.key ?? data.results.at(0)?.key));

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getMovieFromUsingId();
    }, [dispatch, movieId]);

}