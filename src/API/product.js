import axios from "axios";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const product = {
  addProduct: async ({ ...data }) => {
    const url = BACKEND_API + "/product/add";
    return await axios.post(url, data);
  },
  getProductList: async () => {
    const url = BACKEND_API + "/product/getall";
    return await axios.get(url);
  },
  getIdProduct: async ({ id }) => {
    const url = BACKEND_API + `/product/${id}`;
    return await axios.get(url);
  },
  deleteProduct: async ({ id }) => {
    const url = BACKEND_API + `/product/${id}`;
    return await axios.delete(url);
  },
  editProduct: async ({ ...product }) => {
    const url = BACKEND_API + `/product/${product._id}`;
    return await axios.put(url, product);
  },
};

export default product;
