export default class UserCardController {
  constructor($scope, constants, configData) {
    this.$scope = $scope;
    this.constants = constants;
    this.configData = configData;
  }

  $onInit() {
    // this.user & this.extraSearchType is inherited from search-results
    this.isViewUserModalActive = false;
    const displayedFields = ["displayName","regno","departmentNumber","batch","hostel","mail","mobile"];
    this.extraSearchTypePresent = !displayedFields.includes(this.searchType.key);
    this.user.imageUrl = `${this.configData.userImagesPath}/${this.user.cn}.jpg?${Date.now()}`;
  }

  openModal() {
    this.isViewUserModalActive = true;
  }

  closeModal() {
    this.isViewUserModalActive = false;
  }
}
