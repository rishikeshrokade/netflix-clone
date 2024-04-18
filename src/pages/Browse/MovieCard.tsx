import { IMG_URL } from "../../utils/constants";

export const MovieCard: React.FC<{
    imgId: string;
}> = ({ imgId }) => {
    return <img className="w-36" src={IMG_URL + imgId} alt="movie" />;
};
