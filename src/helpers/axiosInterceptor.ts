import axios from "axios";
import CryptoJS from "crypto-js";
import { BASE_URL } from "./API";

axios.interceptors.request.use((config) => {
  try {
    config.baseURL = BASE_URL;
    const method = config.method?.toUpperCase();

    const url = config.url;
    const requestBody = JSON.stringify(config.data) || "";

    let signstr = "";
    if (method && url && url !== "/signup") {
      signstr = method + url + requestBody + localStorage.getItem("secret_key") || 'alissecret4';
      console.log(signstr);
      config.headers.sign = CryptoJS.MD5(signstr).toString();
    } else {
      localStorage.setItem("secret_key", config.data?.secret);
    }

    return config;
  } catch (e) {
    return Promise.reject(e);
  }
});

export default axios;
