import http from "./httpService";
import { apiUrl } from "./../config";

const getChartData = () =>
  http.get(apiUrl + "/analysis/saw/all?start=2020-08-15&end=2020-12-05");

const chartService = { getChartData };

export default chartService;
