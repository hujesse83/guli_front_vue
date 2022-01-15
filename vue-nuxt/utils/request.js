import axios from "axios";
import cookie from "js-cookie";

// 创建axios实例
const service = axios.create({
  baseURL: "http://localhost:8888", // api的base_url
  timeout: 20000, // 请求超时时间
});

// 每次请求使用这个拦截器  request 拦截器
service.interceptors.request.use(
  (config) => {
    if (cookie.get("guli_token")) {
      config.headers["token"] = cookie.get("guli_token"); //header的token必须要写成token，因为后端定义好了header里有这么一个属性值
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default service;
