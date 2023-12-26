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
};

export default order;
