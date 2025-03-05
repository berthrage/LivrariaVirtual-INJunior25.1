import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";
import Login from "./pages/Login";
import GenrePage from "./pages/GenrePage";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";

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
                    element: <GenrePage></GenrePage>
                },
                {
                    path: "/livro/:livroId",
                    element: <BookPage></BookPage>
                },
                {
                    path: "/cart",
                    element: <CartPage></CartPage>
                },
                
                // {
                //     path: "/pokemon/:pokemonName",
                //     element: <PokemonPage></PokemonPage>,
                //     loader: PokemonLoader,
                //     errorElement: <PokemonBoundary></PokemonBoundary>
                // },
                
            ]
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        
    ]
);

export default router;