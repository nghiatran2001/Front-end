import axios from "axios";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const category = {
  addCategory: async ({ ...data }) => {
    const url = BACKEND_API + "/category/add";
    return await axios.post(url, data);
  },
  getCategoryList: async () => {
    const url = BACKEND_API + "/category/getall";
    return await axios.get(url);
  },
  deleteCategory: async ({ id }) => {
    const url = BACKEND_API + `/category/${id}`;
    return await axios.delete(url);
  },
  getIdCategory: async ({ id }) => {
    const url = BACKEND_API + `/category/${id}`;
    return await axios.get(url);
  },
  editCategory: async ({ ...category }) => {
    const url = BACKEND_API + `/category/${category._id}`;
    return await axios.put(url, category);
  },
};

export default category;
