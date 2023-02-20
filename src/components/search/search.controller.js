export default class SearchController {
  constructor($rootScope, backendService, $scope) {
    this.query = "";
    this.$rootScope = $rootScope;
    this.backendService = backendService;
    this.$scope = $scope;
  }

  $onInit() {
    this.results = 1;
  }

  $onChanges(changes) {
    // console.log(changes);
  }

  async search() {
    const x = this.results;
    this.results = await this.backendService.testMethod();
    this.results = x + 1;
    this.$scope.$apply();
  }
}
