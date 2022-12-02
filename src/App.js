import './App.module.css';
import "bootstrap/dist/css/bootstrap.css"
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Registration from "./pages/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/registration-to-course/:CourseId",
        element: <Registration/>
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
