var app = angular.module("jd");

app.config([
  "$locationProvider",
  "$routeProvider",
  "$httpProvider",
  function config(
    $locationProvider,
    $routeProvider,
    $httpProvider,
  ) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/jd", {
        template: "<search></search>",
      })
      /* .when("/user/:id", {
        template: "<view-user></view-user>",
      })
      .when("/user/:id/edit", {
        template: "<edit-user></edit-user>",
      }) */
      .otherwise({
        redirectTo: "/jd",
      });

    $httpProvider.interceptors.push("interceptorService");
  },
]);
