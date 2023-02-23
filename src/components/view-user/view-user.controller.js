export default class ViewUserController {
  constructor(constants, backendService, $scope) {
    this.labelMappings = constants["Label Mappings"];
    this.backendService = backendService;
    this.$scope = $scope;
  }

  $onInit() {
    if (!this.user) {
      this.user = { displayName: "This user doesn't exist" };
    }
    // Displayed in header
    delete this.labelMappings.displayName;
    delete this.labelMappings.cn;
    this.labels =[];
    for (const key in this.labelMappings) {
      this.labels.push({ ...this.labelMappings[key], key});
    }

    this.editMode = false;
  }

  openEditMode() {
    this.editMode = true;
    this.resetData();
    // this.$scope.$apply();
  }

  closeEditMode() {
    this.editMode = false;
    this.edited_user = undefined;
    this.$scope.$apply();
  }

  resetData() {
    this.edited_user = { ...this.user };
    // this.$scope.$apply();
  }

  async editUser() {
    let edited_user = await this.backendService.editUserData(this.edited_user);
    
    if (!edited_user) {
      window.alert("There was some error in updating your data. Please contact ISG or try again later");
      this.closeEditMode();
      return;
    }
    this.user = edited_user;
    this.closeEditMode();
  }

  closeWindow() {
    window.close();
  }
}
