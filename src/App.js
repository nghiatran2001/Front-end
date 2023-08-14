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
import InfoUser from "./pages/InfoUser/InfoUser";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Payment from "./pages/Payment/Payment";
import Categories from "./pages/Categories/Categories";
import Follow from "./pages/Follow/Follow";
import OrderAdmin from "./pages/OrderAdmin/OrderAdmin";
import AddCategory from "./pages/AddCategory/AddCategory";
import AddProduct from "./pages/AddProduct/AddProduct";
import Type from "./pages/Type/Type";
const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const LayoutAdmin = () => {
  return (
    <>
      <Admin />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
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
        path: "/productdetail",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/infouser",
        element: <InfoUser />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/follow",
        element: <Follow />,
      },
      {
        path: "/type",
        element: <Type />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/orderadmin",
    element: <OrderAdmin />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/addcategory",
    element: <AddCategory />,
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
