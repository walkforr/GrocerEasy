$(document).ready(function() {
  $(".nearybyMarkets").on("click", ".marketsBox", function() {
    console.log("hey there ho there howdya do");
    const item = {
      marketName: $(this)
        .parents("li")
        .find("#marketName")
        .text()
    };
    console.log(item);
  });
});
