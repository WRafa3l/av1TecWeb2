$(function () {
$(".dropdown-table").searchable({
striped: true,
searchType: "fuzzy"
});

$(".dropdown-search").bind("keyup", function () {
var $this = $(this);
var $table = $this.next();
if ($this.val().length > 0 && $table.is(":hidden")) {
$table.show();
} else {
$table.hide();
}

var resultCount = ($table.find("tr:visible").length - 1);
$table.find(".search-result-counter").html(resultCount + " records found.");
});
});