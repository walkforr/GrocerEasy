$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  $("#search").keyup(function() {
    $("#result").html("");
    $("#state").val("");
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");
    const zips = localStorage.getItem("zips") || "";
    $.getJSON(`/api/markets?product=${searchField}&zips=${zips}`, function(
      data
    ) {
      $.each(data, function(key, value) {
        $("#result").append(`
              <li class="list-group-item link-class"><img src=${
                value.image
              }height="40" width="40" style="margin-top: 5px; margin-left:5px;" class="img-thumbnail float-left" /> <div class="nameResult">${value.name} </div>  <br><span class="text-muted valueAddress"> ${value.address}
              </span>
                <div class="valueCity" style="display:none">
                ${value.city}</div>
                <div class="valueState" style="display:none">
                ${value.state}</div>
                <div class="valueZip" style="display:none">
                ${value.zip}</div>
                <div class="marketOperationHours" style="display:none">
                ${value.operationHours}</div>
                <div class="marketWebsite" style="display:none">
                ${value.website}</div>
                </li>
                `);
      });
    });
  });

  $("#result").on("click", "li", function() {
    var click_text = $(this)
      .text()
      .split("<br>");
    var item = {
      marketname: $(this)
        .find(".nameResult")
        .text(),
      marketAddress: $(this)
        .find(".valueAddress")
        .text(),
      marketCity: $(this)
        .find(".valueCity")
        .text(),
      marketState: $(this)
        .find(".valueState")
        .text(),
      marketZip: $(this)
        .find(".valueZip")
        .text(),
      marketWebsite: $(this)
        .find(".marketWebsite")
        .text(),
      marketOperationHours: $(this)
        .find(".marketOperationHours")
        .text()
    };

    $(".marketSelect").empty();
    $(".marketSelect").append(
      `<div class="yourMarket"><p class="h4">${
        item.marketname
      }</p><p><strong>Address:</strong>${item.marketAddress} ${
        item.marketCity
      }, ${item.marketState} ${item.marketZip}</p>
        <p>
         <strong>Operating Hours:</strong> ${item.marketOperationHours}</p>
         <p>
         <strong>Website: </strong><a href="${
           item.marketWebsite
         }" target=blank>Click Here</a></p></div>`
    );
    $("#search").val($.trim(click_text[0]));
    $("#result").html("");
  });
});
