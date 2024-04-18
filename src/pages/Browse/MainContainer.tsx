import { useSelector } from "react-redux";
import { VideoBackground } from "./VideoBackground";
import { VideoTitle } from "./VideoTitle";
import { RootStore } from "../../redux/reduxConfig";

export const MainContainer = () => {
    const movie = useSelector((store: RootStore) => store.movie);
    if (!movie?.nowPlayingMovie?.length) return;

    const firstMovie = movie.nowPlayingMovie?.[0];
    return (
        <div>
            <VideoTitle
                title={firstMovie.original_title}
                overview={firstMovie.overview}
            />
            <VideoBackground movieId={firstMovie.id + ""} />
        </div>
    );
};
