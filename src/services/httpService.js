import axios from "axios";
import { toast } from "react-toastify";

const onSuccess = (res) => {
  const expectedError = res.data.status >= 400 && res.data.status <= 500;
  const unAuthorized = res?.data?.status === 401;
  const badRequest = res?.data?.status === 400;
  const notFound = res?.data?.status === 404;
  if (expectedError) {
    if (unAuthorized) {
      localStorage.removeItem("token");
      window.location.reload();
    } else if (badRequest) toast.error("Hatolik yuz berdi");
    else if (notFound) return res;
    else {
      console.error(res.data.status);
      toast.error("Error!");
      return Promise.reject("error");
    }
  } else {
    return res;
  }
};

const onError = (error) => {
  const unAuthorized = error?.response?.status === 401;
  const expectedError =
    error?.response?.status >= 400 && error?.response?.status < 500;

  if (expectedError) {
    if (unAuthorized) {
      localStorage.removeItem("token");
      window.location.reload();
    } else {
      console.error(error);
      toast.error("Error!");
    }
  }

  return Promise.reject(error);
};

axios.interceptors.request.use((req) => {
  req.headers["token"] = localStorage.getItem("token");

  return req;
});
axios.interceptors.response.use(onSuccess, onError);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
