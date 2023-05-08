// Your script must be executed only when DOM is loaded
// You must use JQuery
// Listen for changes on each input checkbox tag:
//  - if the checkbox is checked, you must store the Amenity ID in a
//    variable (dictionary or list)
//  - if the checkbox is unchecked, you must remove the Amenity ID from the
//    variable
//  - update the h4 tag inside the div Amenities with the list of Amenities checked
$(function () {
  const amenities = {};
  $(".amenities .popover input[type='checkbox']").change(function () {
    if (this.checked) {
      amenities[this.dataset.name] = this.dataset.id;
    } else {
      delete amenities[this.dataset.name];
    }
    $(".amenities h4").text(Object.keys(amenities).sort().join(", "));
  });
  // Get status of API
  $.get("http://0.0.0.0:5001/api/v1/status/", function ( data ) {
    if (data.status === "OK") {
      $("div#api_status").addClass("available");
    } else {
      $("div#api_status").removeClass("available");
    }
  });
});
