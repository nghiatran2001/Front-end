import axios from "axios";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const order = {
  addArray: async ({ ...orderArray }) => {
    const url = BACKEND_API + "/order/add";
    return await axios.post(url, orderArray);
  },
  getEmail: async ({ email }) => {
    const url = BACKEND_API + `/order/${email}`;
    return await axios.get(url);
  },
  update: async ({ ...order }) => {
    const url = BACKEND_API + `/order/${order._id}`;
    return await axios.put(url, order);
  },
};

export default order;
