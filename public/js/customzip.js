const zipCodeRegex = /^\d{5}$/;

$(document).ajaxError(function() {
  $(".zip-modal-mask, .zip-modal").fadeIn(200);
  $(".zip-modal-mask, .modal-save").on("click", function() {
    $(".zip-modal-mask, .zip-modal").fadeOut(100);
    console.log("not a valid zip");
  });
});

$(".customzip").on("click", function() {
  console.log("hello");
  const userZip = $(".zipinput").val();
  zipCodeRegex.test(userZip);
  if (zipCodeRegex.test(userZip) === true) {
    const api_key =
      "gyYLN36Dv05ZNrnJPEnKYrUIoSR38yAGVdcCBNlIihXxIgF818d79gU4HkXde7yw";
    const CORS = "https://cors-anywhere.herokuapp.com/";

    const queryURL = `${CORS}https://www.zipcodeapi.com/rest/${api_key}/radius.json/${userZip}/10/miles?minimal`;
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
        console.log(markets);
        console.log(nearbyZips);
        for (var i = 0; i < nearbyZips.length; i++) {
          console.log(nearbyZips[i]);
          for (var j = 0; j < markets.length; j++) {
            console.log(markets[j].zip);
            if (parseInt(nearbyZips[i]) === markets[j].zip) {
              console.log("HELLO THERE!");
              nearbyMarkets.push(markets[j]);
            } else {
              console.log("this zip doesnt match");
            }
          }
        }
        console.log(nearbyMarkets);
        $(".nearbyMarkets").empty();
        for (let i = 0; i < nearbyMarkets.length; i++) {
          $(".nearbyMarkets").append(
            `<div class="marketsBox"><p class ="h4" id="marketName"> <strong>${
              nearbyMarkets[i].name
            }</strong></p>
     <p class="marketAddress"> ${nearbyMarkets[i].address}</p>
     <p class="marketId" style="display:none">${nearbyMarkets[i].id}</p>
     <p class="marketCity" style="display:none">${nearbyMarkets[i].city}</p>
     <p class="marketState" style="display:none">${nearbyMarkets[i].state}</p>
     <p class="marketZip" style="display:none">${nearbyMarkets[i].zip}</p>
     <p class="marketWebsite" style="display:none">${
       nearbyMarkets[i].website
     }</p>
     <p class="marketOperationHours" style="display:none">${
       nearbyMarkets[i].operationHours
     }</p>
     </div>`
          );
        }
        $(".marketsBox").on("click", function() {
          console.log("hey there ho there howdya do");
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
  } else {
    $(".zip-modal-mask, .zip-modal").fadeIn(200);
    $(".zip-modal-mask, .modal-save").on("click", function() {
      $(".zip-modal-mask, .zip-modal").fadeOut(100);
      console.log("not a valid zip");
    });
  }
});
