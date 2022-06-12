import { useRoutes, BrowserRouter } from "react-router-dom"
import ButtonIndex from "./examples/button"
import Index from "./examples/index/index"
import LayoutIndex from "./examples/layout"
import LoadingIndex from "./examples/loading"
import SpaceIndex from "./examples/space"
import OverlayIndex from "./examples/overlay"
import PopupIndex from "./examples/popup"
import ActionSheetIndex from "./examples/actionSheet"
import DialogIndex from "./examples/dialog"
import ToastIndex from "./examples/toast"

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
      path: "/space",
      element: <SpaceIndex />,
    },
    {
      path: "/layout",
      element: <LayoutIndex />,
    },
    {
      path: "/overlay",
      element: <OverlayIndex />,
    },
    {
      path: "/popup",
      element: <PopupIndex />,
    },
    {
      path: "/actionSheet",
      element: <ActionSheetIndex />,
    },
    {
      path: "/dialog",
      element: <DialogIndex />,
    },
    {
      path: "/toast",
      element: <ToastIndex />,
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
