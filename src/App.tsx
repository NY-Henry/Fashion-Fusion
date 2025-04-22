import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import MainLayOut from "./layout/MainLayOut";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import SignUpPage from "./pages/SignUpPage";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
      {
        
        path: "/aboutUs",
        element: <About />,
      }
    ],
    errorElement: (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl">Page not found</p>
          <Link to="/Fashion-Fusion" className="text-blue-500 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
