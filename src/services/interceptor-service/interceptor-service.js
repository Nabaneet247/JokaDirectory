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
    if (!res.config.url.includes("/api/jd")) return res;
    window.localStorage.setItem(
      "joka_auth_token",
      res.config.headers["joka_auth_token"]
    );
    return res;
  }
}
