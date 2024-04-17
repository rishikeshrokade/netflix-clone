import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../utils/reduxConfig";
import { UserMetaInto } from "../utils/reduxConfig/slices";

export const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store: RootStore) => store.user);
    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                // An error happened.
            });
    };
    return (
        <div className="w-full px-4 z-[2] py-2 absolute bg-gradient-to-b from-black flex items-center justify-between">
            <img
                className="w-[148px] h-[64px]"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"
            />

            {user && (
                <div className="cursor-pointer" onClick={() => handleSingOut()}>
                    {(user as UserMetaInto)?.displayName ?? "-" ?? "User"}( Sign
                    Out )
                </div>
            )}
        </div>
    );
};
