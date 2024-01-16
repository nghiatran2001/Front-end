import axios from "axios";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const payment = {
  addOrder: async ({ ...data }) => {
    const url = BACKEND_API + "/payment/add";
    return await axios.post(url, data);
  },
  getList: async () => {
    const url = BACKEND_API + "/payment/getall";
    return await axios.get(url);
  },
  getIdOrder: async ({ id }) => {
    const url = BACKEND_API + `/payment/${id}`;
    return await axios.get(url);
  },
  editOrder: async ({ ...order }) => {
    const url = BACKEND_API + `/payment/${order._id}`;
    return await axios.put(url, order);
  },
  getConfig: async () => {
    const url = BACKEND_API + `/payment/config`;
    return await axios.get(url);
  },
};

export default payment;
