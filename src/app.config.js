var env = {};
if (window) {
	Object.assign(env, window.__env);
}

var app = angular.module("jd");

app.constant('configData', env);

app.config([
  "$locationProvider",
  "$routeProvider",
  "$httpProvider",
  function config($locationProvider, $routeProvider, $httpProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/jd", {
        template: "<search></search>",
      })
      .when("/jd/:id", {
        template: "<view-user user=$resolve.userData></view-user>",
        resolve: {
          userData: function (backendService, $route) {
            return backendService.fetchUserDataByUserId($route.current.params.id);
          },
        },
      })
      /* .when("/jd/:id/edit", {
        template: "<edit-user user=$resolve.userData></edit-user>",
        resolve: {
          userData: function (backendService, $route) {
            return backendService.fetchUserDataByUserId($route.current.params.id);
          },
        },
      }) */
      .when("/", {
        redirectTo: "/jd"
      })
      .otherwise({
        redirectTo: "/jd",
      });

    $httpProvider.interceptors.push("interceptorService");
  },
]);