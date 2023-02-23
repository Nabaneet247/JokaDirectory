import ViewUserController from "./view-user.controller.js";

var viewUser = angular.module("view-user", []);

viewUser
  .component("viewUser", {
    templateUrl: "src/components/view-user/view-user.template.html",
    controller: ViewUserController,
    bindings: {
      user: '<',
      // showAllData: '=',
    }
  })

export default viewUser;