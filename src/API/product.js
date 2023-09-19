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
  deleteProduct: async ({ _id }) => {
    const url = BACKEND_API + `/product/${_id}`;
    return await axios.delete(url);
  },
};

export default product;
