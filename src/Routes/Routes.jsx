import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Homepage from "../Pages/Homepage/Homepage";
import Post from "../Pages/Homepage/Post/Post";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
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
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])