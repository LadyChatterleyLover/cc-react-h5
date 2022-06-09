import { useRoutes, BrowserRouter } from "react-router-dom"
import Index from "./packages/index"

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Index />,
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
