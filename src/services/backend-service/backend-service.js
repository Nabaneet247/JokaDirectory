export default class BackendService {
  constructor($rootScope, $http) {
    this.query = "";
    this.$rootScope = $rootScope;
    this.$http = $http;
  }

  async testMethod() {
    // console.log(this.$rootScope);
    try {
      var res = await this.$http.get("https://reqres.in/api/users/2");
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
}
