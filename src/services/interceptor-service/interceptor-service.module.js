import InterceptorService from "./interceptor-service.js";

var interceptorServiceModule = angular.module("interceptorServiceModule", []);
interceptorServiceModule.service("interceptorService", InterceptorService);
export default interceptorServiceModule;