import SearchController from "./search.controller.js";
import SearchResultsController from "./search-results.controller.js";
import UserCardController from "./user-card.controller.js";

var search = angular.module("search", []);

search.component("search", {
  templateUrl: "src/components/search/search.template.html",
  controller: SearchController,
})
.component("searchResults", {
  templateUrl: "src/components/search/search-results.template.html",
  bindings: { searchResults: "<" },
  controller: SearchResultsController,
})
.component("userCard", {
  templateUrl: "src/components/search/user-card.template.html",
  bindings: { user: "<" },
  controller: UserCardController,
});

export default search;
