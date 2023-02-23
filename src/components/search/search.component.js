import SearchController from "./search.controller.js";
import SearchResultsController from "./search-results.controller.js";
import UserCardController from "./user-card.controller.js";

var search = angular.module("search", []);

search
  .component("search", {
    templateUrl: "/jd/src/components/search/search.template.html",
    controller: SearchController,
  })
  .component("searchResults", {
    templateUrl: "/jd/src/components/search/search-results.template.html",
    bindings: { searchResults: "<", searchType: "<" },
    controller: SearchResultsController,
  })
  .component("userCard", {
    templateUrl: "/jd/src/components/search/user-card.template.html",
    bindings: { user: "<", searchType: "<" },
    controller: UserCardController,
  });

export default search;
