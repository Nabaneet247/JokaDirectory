import SearchController from "./search.controller.js";
import SearchResultsController from "./search-results.controller.js";

var search = angular.module("search", []);

search.component("search", {
  templateUrl: "src/components/search/search.template.html",
  controller: SearchController,
})
.component("searchResults", {
  templateUrl: "src/components/search/search-results.template.html",
  bindings: { searchResults: "<" },
  controller: SearchResultsController,
});

export default search;
