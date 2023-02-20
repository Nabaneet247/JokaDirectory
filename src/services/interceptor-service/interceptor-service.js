export default class InterceptorService {
    constructor($rootScope) {
      this.query = "";
      this.$rootScope = $rootScope;
    }
  
    request(config) {
      // console.log(config);
      return config;
    }

    response(res) {
      // console.log(res);
      return res;
    }
  }
  