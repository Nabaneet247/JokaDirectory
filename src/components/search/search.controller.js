export default class SearchController {
  constructor($scope, backendService, constants) {
    this.$scope = $scope;
    this.backendService = backendService;
    this.searchTypes = Object.values(constants["Search Type Mappings"]);
    this.searchType = this.searchTypes[0]["Request param"];
  }

  $onInit() {
    this.searchValue = "";
    this.results = [];
    this.token = window.localStorage.getItem("joka_auth_token");
  }

  saveToken() {
    window.localStorage.setItem("joka_auth_token", this.token);
  }

  async search() {
    if (!this.isSearchValueValid()) return;
    
    this.results = await this.backendService.makeSearchRequest(
      this.searchValue,
      this.searchType
    );

    // Check for empty array and display no users found message
    this.$scope.$apply();
  }

  isSearchValueValid() {
    return (this.searchValue.length >= 3);
  }
}
