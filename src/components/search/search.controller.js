export default class SearchController {
  constructor($scope, backendService) {
    this.searchValue = "";
    this.searchType = "NAME";
    this.$scope = $scope;
    this.backendService = backendService;
  }

  $onInit() {
    // console.log(window.localStorage);
    this.results = [];
    this.token = window.localStorage.getItem("joka_auth_token");
  }

  $onChanges(changes) {
    // console.log(changes);
  }

  saveToken() {
    window.localStorage.setItem("joka_auth_token", this.token);
  }

  async search() {
    if (this.searchValue.length < 4) return;
    this.results = await this.backendService.makeSearchRequest(
      this.searchValue,
      this.searchType
    );
    this.$scope.$apply();
  }
}
