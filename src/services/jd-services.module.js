import backendService from "./backend-service/backend-service.module.js";
import interceptorServiceModule from "./interceptor-service/interceptor-service.module.js";

angular.module("jd-services", ["backendService", "interceptorServiceModule"]);