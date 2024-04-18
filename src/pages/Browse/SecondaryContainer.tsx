import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";
import { RootStore } from "../../redux/reduxConfig";
import { NowPlayingMovieType } from "../../redux/movieSlice";

export const SecondaryContainer = () => {
    const movies = useSelector(
        (store: RootStore) => store.movie.nowPlayingMovie
    );
    return (
        <div className="w-screen bg-black p-6 ">
            <div className="-mt-64 relative z-20">
                <MovieList
                    titles={"Now Playing Movies"}
                    movie={movies as NowPlayingMovieType[]}
                />
                <MovieList
                    titles={"Now Playing Movies"}
                    movie={movies as NowPlayingMovieType[]}
                />
                <MovieList
                    titles={"Now Playing Movies"}
                    movie={movies as NowPlayingMovieType[]}
                />
                <MovieList
                    titles={"Now Playing Movies"}
                    movie={movies as NowPlayingMovieType[]}
                />
                <MovieList
                    titles={"Now Playing Movies"}
                    movie={movies as NowPlayingMovieType[]}
                />
            </div>
        </div>
    );
};
