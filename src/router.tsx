import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";
import Login from "./pages/Login";

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