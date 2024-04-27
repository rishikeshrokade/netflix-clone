export const VideoTitle: React.FC<{
    title: string;
    overview: string;
}> = ({ title, overview }) => {
    return (
        <div className="w-screen  absolute pt-[15%] px-8 text-white bg-gradient-to-r from-black">
            <p className="text-4xl">{title ?? "-"}</p>
            <p className="text-[16px] py-4 w-1/4">{overview ?? "-"}</p>
            <div className="flex text-xl gap-4">
                <button className="px-8 py-2 rounded-lg radius  text-black bg-white hover:bg-opacity-80">
                    Play
                </button>
                <button className="px-8 py-2 rounded-lg radius bg-opacity-60 bg-gray-500">
                    More Info
                </button>
            </div>
        </div>
    );
};
