import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";

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
        
    ]
);

export default router;