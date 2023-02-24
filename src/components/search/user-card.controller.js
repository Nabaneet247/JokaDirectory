export default class UserCardController {
  constructor($scope, constants) {
    this.$scope = $scope;
    this.constants = constants;
    // this.user is inherited from search-results
    this.isViewUserModalActive = false;
  }

  $onInit() {
  }

  $onChanges(changes) {}

  openModal() {
    this.isViewUserModalActive = true;
  }

  closeModal() {
    this.isViewUserModalActive = false;
  }
}
