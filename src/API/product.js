import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_BACKEND_API;

const product = {
  addProduct: async ({ ...data }) => {
    const url = API_BASE_URL + "/product/addProduct";
    return await axios.post(url, data);
  },
  getId: async ({ idProduct }) => {
    const url = API_BASE_URL + `/product/getId/${idProduct}`;
    return await axios.get(url);
  },
  deleteProduct: async ({ nameProduct }) => {
    const url = API_BASE_URL + `/product/${nameProduct}`;
    return await axios.delete(url);
  },
};

export default product;
