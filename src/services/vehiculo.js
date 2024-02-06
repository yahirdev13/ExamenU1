import axios from "axios";
let API_URL = "http://localhost:8080/api/vehiculos/page";

export const getVehiculos = async (pageNum, size) => {
  const page = {
    page: pageNum,
    size: size,
  };
  console.log(page);
  const response = await axios.post(API_URL, { page });
  return response.data;
};

export default {
  getVehiculos,
};