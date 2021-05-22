import http from "./httpService";

import { apiUrl } from "./../config";

const getLifeLeft = () => http.get(apiUrl + "/analysis/saw/expired");
const getMachineDetails = (saw) => {
  return http.get(apiUrl + `/analysis/saw/details?saw=${saw}`);
};

const analyticsApi = { getLifeLeft, getMachineDetails };

export default analyticsApi;
