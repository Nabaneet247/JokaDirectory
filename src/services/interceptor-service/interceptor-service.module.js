import InterceptorService from "./interceptor-service.js";

var interceptorService = angular.module("interceptorService", []);
interceptorService.service("interceptorService", InterceptorService);
export default interceptorService;