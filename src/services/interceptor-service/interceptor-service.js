export default class InterceptorService {
  constructor(configData) {
    this.loginPageRedirectUrl = configData.loginPageRedirectUrl;
  }

  request = (config) => {
    if (!config.url.includes("/api/jd")) return config;
    config.headers = {
      ...config.headers,
      joka_auth_token: window.localStorage.getItem("joka_auth_token"),
    };
    return config;
  };

  response = (res) => {
    if (!res.config.url.includes("/api/jd")) return res;

    if (res.headers("joka_auth_token")) {
      window.localStorage.setItem("joka_auth_token", res.headers("joka_auth_token"));
    }
    return res;
  };

  responseError = (error) => {
    if (error.status == 401) {
      // window.open(`${this.loginPageRedirectUrl}${window.location.href}`, "_self");
    }
    return error;
  };
}
