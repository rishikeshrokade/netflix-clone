import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Body } from "../components/Body";
import Login from "../components/Login";
import { Browse } from "./Browse/Browse";

function App() {
    const appRouter = createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/body", element: <Body /> },
        { path: "/login", element: <Login /> },
        { path: "/browse", element: <Browse /> },
    ]);
    return (
        <div className="MainContainerStyle">
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default App;
