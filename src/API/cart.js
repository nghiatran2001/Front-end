import axios from "axios";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const cart = {
  addCart: async ({ ...data }) => {
    const url = BACKEND_API + "/cart/add";
    return await axios.post(url, data);
  },
  getCartList: async () => {
    const url = BACKEND_API + "/cart/getall";
    return await axios.get(url);
  },
  getProducts: async ({ email }) => {
    const url = BACKEND_API + `/cart/${email}`;
    return await axios.get(url);
  },
  deleteProduct: async ({ id }) => {
    const url = BACKEND_API + `/cart/${id}`;
    return await axios.delete(url);
  },
  update: async ({ ...cart }) => {
    const url = BACKEND_API + `/cart/${cart._id}`;
    return await axios.put(url, cart);
  },
  updateAmount: async ({ ...cart }) => {
    const url = BACKEND_API + `/cart/${cart._id}`;
    return await axios.put(url, cart);
  },
};

export default cart;
