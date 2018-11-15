$(document).ready(function() {
  $(".hello-modal-mask, .hello-modal").fadeIn(200);
  $(".modal-dontSub").on("click", function() {
    $(".hello-modal-mask, .modal").fadeOut(100);
  });

  const closemodal = function() {
    $(".hello-modal-mask, .modal").fadeOut(100);
  };

  $(".modal-sub").click(function() {
    const newSub = {
      firstname: $(".subscribeFName").val(),
      lastname: $(".subscribeLName").val(),
      email: $(".subscribeEmail").val()
    };

    $.ajax({
      method: "POST",
      url: "/api/signup",
      data: newSub
    }).then(function(data) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newSub.email)) {
        $(".alert").addClass("hide");

        closemodal();
        $(".sub-modal-mask, .sub-modal").fadeIn(200);
        $(".modal-thanks").on("click", function() {
          $(".sub-modal-mask, .modal").fadeOut(100);
        });
        return true;
      } else {
        $(".alert").removeClass("hide");
        return false;
      }
    });
  });
});
