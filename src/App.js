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
import AddProduct from "./pages/Product/AddProduct";
import Type from "./pages/Type/Type";
import EditProduct from "./pages/Product/EditProduct";
import Filter from "./pages/Filter/Filter";
import EditUser from "./pages/User/EditUser";
import AddTech from "./pages/TechDetail/AddTech";
import AddCategory from "./pages/Categories/AddCategory";
import TechDetail from "./pages/TechDetail/TechDetail";
import Search from "./pages/Search/Search";
import Brand from "./pages/Brand/Brand";
import AddBrand from "./pages/Brand/AddBrand";
import UpdateOrderAdmin from "./pages/OrderAdmin/UpdateOrderAdmin";

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
      {
        path: "/search",
        element: <Search />,
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
    path: "/editproduct",
    element: <EditProduct />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/edituser",
    element: <EditUser />,
  },
  {
    path: "/addtech",
    element: <AddTech />,
  },
  {
    path: "/addcategory",
    element: <AddCategory />,
  },
  {
    path: "/techdetail",
    element: <TechDetail />,
  },
  {
    path: "/brand",
    element: <Brand />,
  },
  {
    path: "/addbrand",
    element: <AddBrand />,
  },
  {
    path: "/updateorderadmin",
    element: <UpdateOrderAdmin />,
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
