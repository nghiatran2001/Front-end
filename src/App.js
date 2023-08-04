import "./App.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./conponent/Footer/Footer";
import Header from "./conponent/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import User from "./pages/User/User";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Admin from "./pages/Admin/Admin";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
