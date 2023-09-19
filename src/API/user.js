import axios from "axios";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const user = {
  editUser: async (user) => {
    const url = BACKEND_API + `/user/${user._id}`;
    return await axios.put(url, user);
  },
};

export default user;
