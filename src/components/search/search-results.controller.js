export default class SearchResultsController {
  constructor($rootScope, $scope) {
    this.$rootScope = $rootScope;
    this.$scope = $scope;
  }

  $onInit() {
    // console.log(this.searchResults);
  }

  $onChanges(changes) {
    // console.log(changes);
    // this.$scope.$apply();
  }

  changethis() {
    // this.searchResults = -1;
    // this.$scope.$apply();
  }
}
