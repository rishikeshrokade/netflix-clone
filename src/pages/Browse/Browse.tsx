import { Header } from "../../components/Header";
import useGetNowPlayingMovies from "../../utils/hooks/useGetNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

export const Browse = () => {
    useGetNowPlayingMovies();

    return (
        <div className="The1440Window">
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};
