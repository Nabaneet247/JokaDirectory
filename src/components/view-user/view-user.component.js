import ViewUserController from "./view-user.controller.js";

var viewUser = angular.module("view-user", []);

viewUser
  .component("viewUser", {
    templateUrl: "/jd/src/components/view-user/view-user.template.html",
    controller: ViewUserController,
    bindings: {
      user: '=',
      modalActiveFlag: '='
      // showAllData: '=',
    }
  })

export default viewUser;