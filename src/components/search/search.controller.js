export default class SearchController {
  constructor($scope, backendService, constants, configData) {
    this.$scope = $scope;
    this.backendService = backendService;
    this.searchTypes = Object.values(constants["Search Type Mappings"]);
    this.searchType = this.searchTypes[0];
    this.devMode = configData.devMode;
  }

  $onInit() {
    this.searchValue = "";
    this.results = [];
    this.token = window.localStorage.getItem("joka_auth_token");
    this.searchTypesHidden = true;
  }

  saveToken() {
    window.localStorage.setItem("joka_auth_token", this.token);
    this.token = "";
  }

  toggleSearchTypesVisibility() {
    this.searchTypesHidden = !this.searchTypesHidden;
  }

  async search() {
    if (!this.isSearchValueValid()) return;

    this.results = await this.backendService.makeSearchRequest(
      this.searchValue,
      this.searchType["Request param"]
    );

    // Check for empty array and display no users found message
    this.$scope.$apply();
  }

  isSearchValueValid() {
    let min_length = this.searchType.min_length ? this.searchType.min_length : 3;
    return this.searchValue.length >= min_length;
  }
}
