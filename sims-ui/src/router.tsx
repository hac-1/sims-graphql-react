import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/index";

const router = createBrowserRouter([
    {path: "/", element: <HomePage/>}
])

export default router;