import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import Login from "./components/Login";
import { Browse } from "./components/Browse";

function App() {
    const appRouter = createBrowserRouter([
        { path: "/", element: <Header /> },
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
