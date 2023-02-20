import backendService from "./backend-service/backend-service.module.js";
import interceptorService from "./interceptor-service/interceptor-service.module.js";

angular.module("jd-services", ["backendService", "interceptorService"]);