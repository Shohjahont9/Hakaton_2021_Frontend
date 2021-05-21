import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "./../config";

const apiEndpoint = apiUrl + "/users/login";
const tokenKey = "token";

const login = async (username, password) => {
  const { data } = await http.post(apiEndpoint, {
    username,
    password,
  });
  localStorage.setItem(tokenKey, data.token);
};

const logout = () => {
  localStorage.removeItem(tokenKey);
};

const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (err) {
    return null;
  }
};

const authApi = {
  login,
  logout,
  getCurrentUser,
};

export default authApi;
