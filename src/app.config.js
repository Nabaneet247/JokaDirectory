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
      .otherwise({
        redirectTo: "/jd",
      });

    $httpProvider.interceptors.push("interceptorService");
  },
]);