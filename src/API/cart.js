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
};

export default cart;
