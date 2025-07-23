import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Reviews from "./pages/Reviews"

const routes = [

    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
                       {
                path:'about',
                element: <About/>,
            },
                       {
                path:'menu',
                element: <Menu/>,
            },
                       {
                path:'reviews',
                element: <Reviews/>,
            },
        ]

    }
]

export default routes