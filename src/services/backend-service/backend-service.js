export default class BackendService {
  constructor($rootScope, $http) {
    this.query = "";
    this.$rootScope = $rootScope;
    this.$http = $http;
  }

  async makeSearchRequest(searchValue, searchType) {
    // console.log(this.$rootScope);
    try {
      var res = await this.$http.get(
        "http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/api/jd/users",
        { params: { searchValue, searchType } }
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
}
