export default class BackendService {
  constructor($rootScope, $http, configData) {
    this.query = "";
    this.$rootScope = $rootScope;
    this.$http = $http;
    this.apiUrl = configData.apiUrl;
    // this.apiUrl = "http://localhost:3000/api";
  }

  async makeSearchRequest(searchValue, searchType) {
    try {
      var res = await this.$http.get(this.apiUrl + "/jd/users", {
        params: { searchValue, searchType },
      });
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async fetchUserDataByUserId(user_id) {
    try {
      var res = await this.$http.get(this.apiUrl + "/jd/users", {
        params: { searchValue: user_id, searchType: "CN" },
      });

      if (res.data && res.data.length == 1) {
        return res.data[0];
      }

      return {};
    } catch (err) {
      console.error(err);
      return {};
    }
  }

  async editUserData(user_data) {
    try {
      let res = await this.$http.post(this.apiUrl + "/jd/updateUser", user_data);
      return res.data;
    } catch (err) {
      console.error(err);
      return {};
    }
  }

  async uploadUserImage(blobData, user_id) {
    try {
      console.log(blobData);
      let form_data = new FormData();
      form_data.append("cn", user_id);
      form_data.append("file", blobData);
      let res = await this.$http({
        method: 'POST',
        url: this.apiUrl + "/jd/saveUserImage",
        data: form_data,
        headers: { 'Content-Type': undefined},});
      console.log(res);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
