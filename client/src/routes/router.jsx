import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import ErrorPage from "../error-page";
import Singlebook from "../shop/Singlebook";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            // Add more routes here for other pages...
            {
                path: "/shop",
                element: <Shop/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/blog",
                element: <Blog/>,
            },
            {
                path: "/singleBook",
                element: <SingleBook/>,
            },
            {
                path:"/book/:id",
                element: <Singlebook/>,
                loader:({params})=>fetch(`http://localhost:5001/book/${params.id}`)
            }
        ]
    },
]);

export default router;