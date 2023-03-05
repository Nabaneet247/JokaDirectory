export default class UserCardController {
  constructor($scope, constants) {
    this.$scope = $scope;
    this.constants = constants;
  }

  $onInit() {
    // this.user & this.extraSearchType is inherited from search-results
    this.isViewUserModalActive = false;
    const displayedFields = ["displayName","regno","departmentNumber","batch","hostel","mail","mobile"];
    this.extraSearchTypePresent = !displayedFields.includes(this.searchType.key);
  }

  openModal() {
    this.isViewUserModalActive = true;
  }

  closeModal() {
    this.isViewUserModalActive = false;
  }
}
