import {
  AddCategory,
  AddProduct,
  Cart,
  Categories,
  Follow,
  Home,
  InfoUser,
  Login,
  Order,
  OrderAdmin,
  Payment,
  Product,
  ProductDetail,
  Register,
  User,
} from "../pages";
import { DefaultLayout, AdminLayout } from "../layouts";
import Admin from "../pages/Admin/Admin";

const PrivateRoutes = ({ children }) => {
  // const isLogin = useSelector(getUser);
  if (true) {
    return children;
  } else {
  }
};

const publicRoutes = [
  {
    path: "/",
    layout: DefaultLayout,
    element: Home,
  },
  {
    path: "/login",
    layout: DefaultLayout,
    element: Login,
  },
  {
    path: "/register",
    element: Register,
    layout: DefaultLayout,
  },
  {
    path: "/productdetail",
    element: ProductDetail,
    layout: DefaultLayout,
  },
  {
    path: "/cart",
    element: Cart,
    layout: DefaultLayout,
  },
  {
    path: "/order",
    element: Order,
    layout: DefaultLayout,
  },
  {
    path: "/infouser",
    element: InfoUser,
    layout: DefaultLayout,
  },
  {
    path: "/payment",
    element: Payment,
    layout: DefaultLayout,
  },
  {
    path: "/follow",
    element: Follow,
    layout: DefaultLayout,
  },
  {
    path: "/admin",
    element: Admin,
    AdminLayout,
  },
  {
    path: "/user",
    element: User,
    AdminLayout,
  },
  {
    path: "/product",
    element: Product,
    AdminLayout,
  },
  {
    path: "/categories",
    element: Categories,
    AdminLayout,
  },
  {
    path: "/orderadmin",
    element: OrderAdmin,
    AdminLayout,
  },
  {
    path: "/addproduct",
    element: AddProduct,
    AdminLayout,
  },
  {
    path: "/addcategory",
    element: AddCategory,
    AdminLayout,
  },
];

const privateRoutes = (() => {
  return [{}];
})();

export { publicRoutes, privateRoutes, PrivateRoutes };
