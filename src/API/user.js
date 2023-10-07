import axios from "axios";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const user = {
  editUser: async ({ ...user }) => {
    const url = BACKEND_API + `/user/${user._id}`;
    return await axios.put(url, user);
  },
  getIdUser: async ({ id }) => {
    const url = BACKEND_API + `/user/${id}`;
    return await axios.get(url);
  },
  deleteUser: async ({ id }) => {
    const url = BACKEND_API + `/user/${id}`;
    return await axios.delete(url);
  },
};

export default user;
