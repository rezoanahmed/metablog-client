import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Homepage from "../Pages/Homepage/Homepage";
import Post from "../Pages/Homepage/Post/Post";
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/post/:id",
                element: <Post></Post>,
                loader: ({params}) => fetch(`http://localhost:5000/post/${params.id}`)
            }
        ]
    }
])