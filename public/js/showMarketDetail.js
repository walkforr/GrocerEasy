$(document).ready(function() {
  $(".nearybyMarkets").on("click", ".marketsBox", function() {
    const item = {
      marketName: $(this)
        .parents("li")
        .find("#marketName")
        .text()
    };
    console.log(item);
  });
});
