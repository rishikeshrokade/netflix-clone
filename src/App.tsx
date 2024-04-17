import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Body } from "./components/Body";
import Login from "./components/Login";
import { Browse } from "./components/Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/reduxConfig/slices";
import { useDispatch } from "react-redux";
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, uid, displayName, phoneNumber, photoURL } = user;
                dispatch(
                    addUser({
                        email,
                        uid,
                        displayName,
                        phoneNumber,
                        photoURL,
                    })
                );
            } else {
                dispatch(removeUser());
            }
        });
    }, [dispatch]);

    const appRouter = createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/body", element: <Body /> },
        { path: "/login", element: <Login /> },
        { path: "/browse", element: <Browse /> },
    ]);
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default App;
