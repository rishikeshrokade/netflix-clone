import { GetMovieFromUsingIdRespTypeDatum } from "../../redux/movieSlice";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/reduxConfig";
import { useGetTrailerMovie } from "../../utils/hooks/useGetTrailerMovie";

export const VideoBackground: React.FC<{
    movieId: string;
}> = ({ movieId }) => {
    const trailerMovie = useSelector(
        (store: RootStore) => store.movie.trailerMovie
    );
    useGetTrailerMovie(movieId);

    return (
        <div className="w-screen aspect-video">
            <iframe
                width={"100%"}
                height={"100%"}
                src={
                    "https://www.youtube.com/embed/U2Qp5pL3ovA?autoplay=1&mute=1&si=" +
                    trailerMovie?.key
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        </div>
    );
};

export interface GetMovieFromUsingIdRespType {
    id: number;
    results: GetMovieFromUsingIdRespTypeDatum[];
}
