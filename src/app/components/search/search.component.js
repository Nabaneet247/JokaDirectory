import SearchController from "./search.controller.js";
import SearchResultsController from "./search-results.controller.js";
import UserCardController from "./user-card.controller.js";

var search = angular.module("search", []);

search
  .component("search", {
    templateUrl: "app/components/search/search.template.html",
    controller: SearchController,
  })
  .component("searchResults", {
    templateUrl: "app/components/search/search-results.template.html",
    bindings: { searchResults: "<", searchType: "<", searchRequestFired: "<" },
    controller: SearchResultsController,
  })
  .component("userCard", {
    templateUrl: "app/components/search/user-card.template.html",
    bindings: { user: "<", searchType: "<" },
    controller: UserCardController,
  });

export default search;
