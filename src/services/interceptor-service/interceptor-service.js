export default class InterceptorService {
  constructor() {}

  request(config) {
    if (!config.url.includes("/api/jd")) return config;
    config.headers = {
      ...config.headers,
      joka_auth_token: window.localStorage.getItem("joka_auth_token"),
    };
    return config;
  }

  response(res) {
    // console.log(res.config.url.includes("/api/jd"));
    if (!res.config.url.includes("/api/jd")) return res;
    // console.log(5);
    window.localStorage.setItem("joka_auth_token", res.config.headers["joka_auth_token"] );
    // console.log(res.config.headers["joka_auth_token"]);
    return res;
  }
}
