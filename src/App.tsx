import { useRoutes, BrowserRouter } from "react-router-dom"
import ButtonIndex from "./examples/button"
import Index from "./examples/index/index"
import LoadingIndex from "./examples/loading"
import SpaceIndex from "./examples/space"

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/button",
      element: <ButtonIndex />,
    },
    {
      path: "/loading",
      element: <LoadingIndex />,
    },
    {
      path: '/space',
      element: <SpaceIndex />
    },
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
