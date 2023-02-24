export default class SearchResultsController {
  constructor($scope) {
    this.$scope = $scope;
    // this.serachResults is inhertited from search component
  }

  $onInit() {
    this.sortProperty = "batch";
    // this.sortProperty = "displayName";
    this.sortReverse = true;
    this.userGroupLabels = ["Students", "CEMS/STEP", "Faculty", "Staff", "TTA", "Others"];
    this.userGroupsCount = [0, 0, 0, 0, 0, 0];
    this.userGroups = [];
  }

  $onChanges(changes) {
    var comparator = this.sortUsersBy(this.sortProperty, this.sortReverse);
    if (this.searchResults.length == 0) return;

    this.searchResults.sort(comparator);
    this.userGroupsCount = [0, 0, 0, 0, 0, 0];
    this.userGroups = [
      { id: 0, label: this.userGroupLabels[0], users: [], displaying: true },
      { id: 1, label: this.userGroupLabels[1], users: [], displaying: false },
      { id: 2, label: this.userGroupLabels[2], users: [], displaying: false },
      { id: 3, label: this.userGroupLabels[3], users: [], displaying: false },
      { id: 4, label: this.userGroupLabels[4], users: [], displaying: false },
      { id: 5, label: this.userGroupLabels[5], users: [], displaying: false },
    ];
    for (let i = 0; i < this.searchResults.length; i++) {
      if (this.searchResults[i]["UI_GROUP"] == this.userGroupLabels[0]) {
        this.userGroups[0].users.push(this.searchResults[i]);
      } else if (this.searchResults[i]["UI_GROUP"] == this.userGroupLabels[1]) {
        this.userGroups[1].users.push(this.searchResults[i]);
      } else if (this.searchResults[i]["UI_GROUP"] == this.userGroupLabels[2]) {
        this.userGroups[2].users.push(this.searchResults[i]);
      } else if (this.searchResults[i]["UI_GROUP"] == this.userGroupLabels[3]) {
        this.userGroups[3].users.push(this.searchResults[i]);
      } else if (this.searchResults[i]["UI_GROUP"] == this.userGroupLabels[4]) {
        this.userGroups[4].users.push(this.searchResults[i]);
      } else {
        this.userGroups[5].users.push(this.searchResults[i]);
      }
    }
    // console.log(this.userGroups);
  }



  showUserGroup(id) {
    this.userGroups.forEach((x) => {
      x.displaying = false;
    });
    this.userGroups[id].displaying = true;
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
