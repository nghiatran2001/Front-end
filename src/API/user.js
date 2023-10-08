import axios from "axios";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const user = {
  getUserList: async ({ token }) => {
    const url = BACKEND_API + "/user/alluser";
    return await axios.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
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
  register: async ({ ...data }) => {
    const url = BACKEND_API + "/auth/register";
    return await axios.post(url, data);
  },
  login: async (data) => {
    const url = BACKEND_API + "/auth/login";
    return await axios.post(url, data);
  },
  blockUser: async ({ id }) => {
    const url = BACKEND_API + `/user/block/${id}`;
    return await axios.put(url, id);
  },
  openUser: async ({ id }) => {
    const url = BACKEND_API + `/user/open/${id}`;
    return await axios.put(url, id);
  },
};

export default user;
