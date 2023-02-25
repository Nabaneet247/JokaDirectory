import BackendService from "./backend-service.js";

var backendService = angular.module("backendService", []);
backendService.service("backendService", BackendService);
export default backendService;