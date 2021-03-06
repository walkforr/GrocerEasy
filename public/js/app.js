$(document).ajaxStart(function() {
  $("#wait").css("display", "block");
});
$(document).ajaxComplete(function() {
  $("#wait").css("display", "none");
});

(function() {
  "use strict";

  function scrollDown() {
    $("html, body").animate(
      {
        scrollTop: $("section:first-of-type").offset().top
      },
      300
    );
  }

  $(".scroll-down").on("click", function() {
    scrollDown();
  });

  $(".get-started").on("click", function(e) {
    e.preventDefault();

    function onPositionReceived(position) {
      console.log("Original Coord:");
      console.log(position);
      scrollDown();
    }

    //if users does not allow location, throw error and don't allow.
    function locationNotReceived(positionError) {
      $(".modal-mask, .modal").fadeIn(200);
      $(".modal-mask, .modal-save").on("click", function() {
        $(".modal-mask, .modal").fadeOut(100);
      });
      console.log(positionError);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onPositionReceived,
        locationNotReceived
      );
    }

    //get zipcode/address
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var point = new google.maps.LatLng(lat, long);
        new google.maps.Geocoder().geocode({ latLng: point }, function(
          res,
          status
        ) {
          var zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
          var zipCode = parseInt(zip[1]);

          const api_key =
            "gyYLN36Dv05ZNrnJPEnKYrUIoSR38yAGVdcCBNlIihXxIgF818d79gU4HkXde7yw";
          const CORS = "https://cors-anywhere.herokuapp.com/";

          const queryURL = `${CORS}https://www.zipcodeapi.com/rest/${api_key}/radius.json/${zipCode}/5/miles?minimal`;
          let perimeter = [];
          $.ajax({
            headers: { Accept: "application/json" },
            url: queryURL,
            method: "GET",
            crossDomain: true,
            beforeSend: function(xhr) {
              xhr.withCredentials = true;
            }
          }).then(function(response) {
            const nearbyZips = response.zip_codes;
            localStorage.setItem("zips", nearbyZips.join());
            const nearbyMarkets = [];
            $.ajax({
              method: "GET",
              url: `/api/markets`
            }).then(function(markets) {
              for (var i = 0; i < nearbyZips.length; i++) {
                for (var j = 0; j < markets.length; j++) {
                  if (parseInt(nearbyZips[i]) === markets[j].zip) {
                    nearbyMarkets.push(markets[j]);
                  } else {
                  }
                }
              }
              $(".nearbyMarkets").empty();
              for (let i = 0; i < nearbyMarkets.length; i++) {
                $(".nearbyMarkets").append(
                  `<div class="marketsBox"><p class ="h4" id="marketName"> <strong>${
                    nearbyMarkets[i].name
                  }</strong></p>
       <p class ="marketAddress"> ${nearbyMarkets[i].address}</p>
       <p class="marketId" style="display:none">${nearbyMarkets[i].id}
       <p class="marketCity" style="display:none">${nearbyMarkets[i].city}
       <p class="marketState" style="display:none">${nearbyMarkets[i].state}
       <p class="marketZip" style="display:none">${nearbyMarkets[i].zip}
       <p class="marketWebsite" style="display:none">${nearbyMarkets[i].website}
       <p class="marketOperationHours" style="display:none">${
         nearbyMarkets[i].operationHours
       }</div>`
                );
              }
              $(".marketsBox").on("click", function() {
                const item = {
                  marketName: $(this)
                    .find("#marketName")
                    .text(),
                  marketAddress: $(this)
                    .find(".marketAddress")
                    .text(),
                  marketId: $(this)
                    .find(".marketId")
                    .text(),
                  marketCity: $(this)
                    .find(".marketCity")
                    .text(),
                  marketState: $(this)
                    .find(".marketState")
                    .text(),
                  marketZip: $(this)
                    .find(".marketZip")
                    .text(),
                  marketWebsite: $(this)
                    .find(".marketWebsite")
                    .text(),
                  marketOperationHours: $(this)
                    .find(".marketOperationHours")
                    .text()
                };
                $(".marketSelect").empty();
                $(
                  ".marketSelect"
                ).append(`<div class="yourMarket"><p class="h4">${item.marketName}</p><p><strong>Address:</strong>${item.marketAddress} ${item.marketCity}, ${item.marketState} ${item.marketZip}</p>
                    <p>
                    <strong>Operating Hours:</strong> ${
                      item.marketOperationHours
                    }</p>
                    <p>
                    <strong>Website: </strong><a href="${
                      item.marketWebsite
                    }" target=blank>Click Here</a></p></div>`);
              });
            });
          });
        });
      });
    }
  });
})();
