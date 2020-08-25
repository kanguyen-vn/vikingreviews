import http from "./httpService";
import { uri } from "../config.json";

const apiEndpoint = uri + "/api/auth";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
