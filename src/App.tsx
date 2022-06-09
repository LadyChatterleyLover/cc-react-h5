import { useRoutes, BrowserRouter } from "react-router-dom"
import ButtonIndex from "./examples/button"
import Index from "./examples/index/index"

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: '/button',
      element: <ButtonIndex />
    }
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
