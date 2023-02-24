import EditUserController from "./edit-user.controller.js";

var editUser = angular.module("edit-user", []);

editUser
  .component("editUser", {
    templateUrl: "/jd/src/components/edit-user/edit-user.template.html",
    controller: EditUserController,
    bindings: {
      user: '<',
    }
  })

export default editUser;