export default class SearchResultsController {
  constructor($scope) {
    this.$scope = $scope;
  }

  $onInit() {
    this.sortProperty = "batch";
    // this.sortProperty = "displayName";
    this.sortReverse = true;
  }

  $onChanges(changes) {
    var comparator = this.sortUsersBy(this.sortProperty, this.sortReverse);
    this.searchResults.sort(comparator);
  }

  sortUsersBy(sortProperty, sortReverse) {
    return function (user1, user2) {
      let v1 = user1[sortProperty];
      let v2 = user2[sortProperty];

      let returnValue = 0;

      if (typeof v1 !== "undefined" && typeof v2 !== "undefined") {
        if (typeof v1 == "number" && typeof v2 == "number") {
          returnValue = v1 < v2 ? -1 : 1;
        } else {
          returnValue = v1.toString().toUpperCase().localeCompare(v2.toString().toUpperCase());
        }
        return sortReverse ? returnValue * -1 : returnValue;
      }

      return typeof v1 == "undefined" ? 1 : -1;
    };
  }
}
