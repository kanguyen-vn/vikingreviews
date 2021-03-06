import http from "./httpService";
import { uri } from "../config.json";

const apiEndpoint = uri + "/api/reviews";

async function getByCourse(id) {
  // if (localStorage.departments) {
  //   return JSON.parse(localStorage.departments).find(
  //     (department) => department._id === id
  //   );
  // }
  // http://localhost:3000/api/reviews?course=5f467c93d475cd0578930bde
  const { data } = await http.get(`${apiEndpoint}/course=${id}`);
  console.log('data from backend api');
  console.log(data);
  return data;
}

export default { getByCourse };
