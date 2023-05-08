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
  // Fetch data about places
  $.ajax({
    url: "http://0.0.0.0:5001/api/v1/places_search/",
    type: "POST",
    data: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
    dataType: "json",
    success: function (data) {
      data.forEach(function (place) {
	$("section.places").append(
	  `<article>
	  <div class="title_box">
	    <h2>${place.name}</h2>
	    <div class="price_by_night">$${place.price_by_night}</div>
	  </div>
	  <div class="information">
	    <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? "s" : ""}</div>
            <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? "s" : ""}</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? "s" : ""}</div>
	  </div>
	  <div class="user">
            <b>Owner:</b> ${place.user.first_name} ${place.user.last_name}
          </div>
          <div class="description">
	    ${place.description | safe}
          </div>
	</article>`
	);
      });
    },
  });
});
