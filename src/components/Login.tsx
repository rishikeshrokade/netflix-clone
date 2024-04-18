import { useRef, useState } from "react";
import { Header } from "./Header";
import { validateEmail, validatePassword } from "../utils/functionUtils";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/userSlices";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();

    const email = useRef<HTMLInputElement>(null);
    const fullName = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [passwordValidationError, setPasswordValidationError] = useState<
        string | null
    >(null);
    const [emailValidationError, setEmailValidationError] = useState<
        string | null
    >(null);

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const passwordError = validatePassword(password.current?.value);
        const emailError = validateEmail(email.current?.value);
        setEmailValidationError(emailError);
        setPasswordValidationError(passwordError);

        if (passwordError || emailError) return;

        if (isSignInForm) {
            email.current?.value &&
                password.current?.value &&
                signInWithEmailAndPassword(
                    auth,
                    email.current?.value,
                    password.current?.value
                )
                    .then(() => {
                        // navigate("/browse");
                    })
                    .catch(() => {
                        // navigate("/");
                    });
        } else {
            email.current?.value &&
                password.current?.value &&
                createUserWithEmailAndPassword(
                    auth,
                    email.current?.value,
                    password.current?.value
                )
                    .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(user, {
                            displayName: fullName.current?.value,
                            photoURL:
                                "https://example.com/jane-q-user/profile.jpg",
                        })
                            .then(() => {
                                const user = auth.currentUser;
                                if (user) {
                                    const {
                                        email,
                                        uid,
                                        displayName,
                                        phoneNumber,
                                        photoURL,
                                    } = user;
                                    dispatch(
                                        addUser({
                                            email,
                                            uid,
                                            displayName,
                                            phoneNumber,
                                            photoURL,
                                        })
                                    );
                                }
                            })
                            .catch(() => {
                                //
                            });
                        // navigate("/browse");
                    })
                    .catch(() => {
                        // navigate("/");
                    });
        }
    };

    const toggleSingInForm = () => {
        setIsSignInForm(!isSignInForm);
        setPasswordValidationError(null);
        setEmailValidationError(null);
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
                <form onSubmit={handleSignIn}>
                    <h1 className="font-bold text-3xl">
                        {isSignInForm ? "SIGN IN" : "SIGN UP"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            ref={fullName}
                            type="text"
                            placeholder="Enter your name"
                            className="p-2 w-full my-4 bg-gray-600"
                        />
                    )}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Enter your email"
                        className="p-2 w-full my-4 bg-gray-600"
                    />
                    {emailValidationError && (
                        <h3 className="text-red-400">{emailValidationError}</h3>
                    )}
                    <input
                        ref={password}
                        type="password"
                        placeholder=" Enter your Password"
                        className="p-2 w-full my-4 bg-gray bg-gray-600"
                    />
                    {passwordValidationError && (
                        <h3 className="text-red-400">
                            {passwordValidationError}
                        </h3>
                    )}
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
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSingInForm();
                        }}
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
