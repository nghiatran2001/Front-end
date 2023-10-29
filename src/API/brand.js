import axios from "axios";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const brand = {
  addBrand: async ({ ...data }) => {
    const url = BACKEND_API + "/brand/add";
    return await axios.post(url, data);
  },
  getBrandList: async () => {
    const url = BACKEND_API + "/brand/getall";
    return await axios.get(url);
  },
  deleteBrand: async ({ id }) => {
    const url = BACKEND_API + `/brand/${id}`;
    return await axios.delete(url);
  },
  getIdBrand: async ({ id }) => {
    const url = BACKEND_API + `/brand/${id}`;
    return await axios.get(url);
  },
  editBrand: async ({ ...brand }) => {
    const url = BACKEND_API + `/brand/${brand._id}`;
    return await axios.put(url, brand);
  },
};

export default brand;
