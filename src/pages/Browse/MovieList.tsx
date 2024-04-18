import { Children } from "react";
import { NowPlayingMovieType } from "../../redux/movieSlice";
import { MovieCard } from "./MovieCard";

export const MovieList: React.FC<{
    titles: string;
    movie: NowPlayingMovieType[];
}> = ({ titles, movie }) => {
    return (
        <div className="px-6 py-2">
            <h1 className="text-xl text-white font-bold py-2">{titles}</h1>
            <div className="flex overflow-x-scroll overflow-hidden scrollbar-hide ">
                <div className="flex gap-4">
                    {Children.toArray(
                        movie?.map((m) => {
                            return <MovieCard imgId={m.poster_path} />;
                        })
                    )}
                </div>
            </div>
        </div>
    );
};
