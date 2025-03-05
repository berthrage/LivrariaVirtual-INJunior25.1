import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";
import Login from "./pages/Login";
import GenrePage from "./pages/GenrePage";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import PageErrorBoundary from "./error-boundary/PageErrorBoundary";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children: [
                {
                    index: true,
                    element: <Home></Home>
                },
                {
                    path: "/genero/:genero",
                    element: <GenrePage></GenrePage>,
                    errorElement: <PageErrorBoundary></PageErrorBoundary>,
                },
                {
                    path: "/livro/:livroId",
                    element: <BookPage></BookPage>,
                    errorElement: <PageErrorBoundary></PageErrorBoundary>,
                },
                {
                    path: "/cart",
                    element: <CartPage></CartPage>
                },
                {
                    path: "*", 
                    element: <PageErrorBoundary></PageErrorBoundary>,
                }
            ]
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        
    ]
);

export default router;