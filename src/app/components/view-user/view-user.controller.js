export default class ViewUserController {
  constructor(constants, backendService, $scope) {
    this.labelMappings = constants["Label Mappings"];
    this.backendService = backendService;
    this.$scope = $scope;
  }

  $onInit() {
    // this.user is passed from user-card component
    if (!this.user) {
      this.user = { displayName: "This user doesn't exist" };
    }
    // Displayed in header
    delete this.labelMappings.displayName;
    delete this.labelMappings.cn;
    this.labels = [];
    for (const key in this.labelMappings) {
      this.labels.push({ ...this.labelMappings[key], key });
    }

    // modifying LinkedIn URL
    if (this.user.pager) {
      let indexOfLinkedUrl = this.user.pager.indexOf("linkedin.com");
      let linkedInUrl = this.user.pager.substring(indexOfLinkedUrl);
      this.user.pager = `https://www.${linkedInUrl}`;
    }

    this.editMode = false;
  }

  openEditMode() {
    this.editMode = true;
    this.resetData();
    // this.$scope.$apply();
  }

  closeEditMode() {
    this.closeEditModeWithoutApply();
    this.$scope.$apply();
  }

  closeEditModeWithoutApply() {
    this.editMode = false;
    this.edited_user = undefined;
  }

  resetData() {
    this.edited_user = { ...this.user };
    // this.$scope.$apply();
  }

  async editUser() {
    // LDAP doesn't accept blank strings, need to pass null
    for (let key in this.edited_user) {
      if (this.edited_user[key] !== "false" && !this.edited_user[key]) {
        this.edited_user[key] = null;
      }
    }

    let edited_user = await this.backendService.editUserData(this.edited_user);

    if (!edited_user) {
      window.alert(
        "There was some error in updating your data. Please contact ISG or try again later"
      );
      this.closeEditMode();
      return;
    }
    this.user = edited_user;
    this.closeEditMode();
  }

  closeWindow() {
    this.modalActiveFlag = false;
  }
}
