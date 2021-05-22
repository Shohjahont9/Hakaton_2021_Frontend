import http from "./httpService";

import { apiUrl } from "./../config";

const getLifeLeft = () => http.get(apiUrl + "/analysis/saw/expired");

const analyticsApi = { getLifeLeft };

export default analyticsApi;
