import axios from "axios";
import CryptoJS from "crypto-js";
import { BASE_URL } from "./API";

axios.interceptors.request.use((config) => {
  try {
    config.baseURL = BASE_URL;
    const method = config.method?.toUpperCase();

    const url = config.url;
    const requestBody = config.data || "";

    let signstr = "";
    if (method && url && url !== "/signup") {
      signstr = method + url + requestBody + localStorage.getItem("secret");

      config.headers.key = localStorage.getItem('key');
      config.headers.sign = CryptoJS.MD5(signstr).toString();
    } else {
      localStorage.setItem("secret", config.data?.secret);
      localStorage.setItem("key", config.data?.key);
    }

    return config;
  } catch (e) {
    return Promise.reject(e);
  }
});

export default axios;
