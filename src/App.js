/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs, { loader as blogsLoader} from './pages/Blogs'
import Root from "./components/Root";
import BlogDetailPage from "./pages/BlogDetailPage";
const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    {
      index: true,
      element: <Blogs />,
      loader: blogsLoader
    }, {
      path: '/:id',
      element: <BlogDetailPage />
    }
  ]
}])
function App() {
  return <RouterProvider router={router} />
}

export default App;
