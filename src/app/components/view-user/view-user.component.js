import ViewUserController from "./view-user.controller.js";

var viewUser = angular.module("view-user", ['ngFileUpload', 'ngImgCrop']);

viewUser
  .component("viewUser", {
    templateUrl: "app/components/view-user/view-user.template.html",
    controller: ViewUserController,
    bindings: {
      user: '=',
      modalActiveFlag: '='
      // showAllData: '=',
    }
  })

export default viewUser;