import { useState } from "react";
import { Header } from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false);

    const toggleSingInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg
               "
                />
            </div>
            <div className="absolute p-12 mx-auto my-36 right-0 left-0 w-[400px] bg-black opacity-85 text-white">
                <form action="">
                    <h1 className="font-bold text-3xl">
                        {isSignInForm ? "SIGN IN" : "SIGN UP"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="p-2 w-full my-4 bg-gray-600"
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="p-2 w-full my-4 bg-gray-600"
                    />
                    <input
                        type="password"
                        placeholder=" Enter your Password"
                        className="p-2 w-full my-4 bg-gray bg-gray-600"
                    />
                    {isSignInForm ? (
                        <button
                            className="p-2 w-full my-6 bg-red-800 opacity-1 rounded-lg"
                            type="submit"
                        >
                            SIGN IN
                        </button>
                    ) : (
                        <button
                            className="p-2 w-full my-6 bg-red-800 opacity-1 rounded-lg"
                            type="submit"
                        >
                            SIGN UP
                        </button>
                    )}
                    <p
                        className="cursor-pointer"
                        onClick={() => toggleSingInForm()}
                    >
                        {isSignInForm
                            ? "New to netflix? Sign Up now."
                            : "Already registered? Sign In."}
                    </p>
                </form>
            </div>
        </div>
    );
};
export default Login;
