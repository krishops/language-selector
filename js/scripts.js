function userTotal(color, assyria, swallow, knights) {
  return color + assyria + swallow + knights
}

$(document).ready(function () {
  $("form#language-selector").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const quest = $("input:radio[name=quest]:checked").val();
    const color = parseInt($("#color").val());
    const assyria = parseInt($("#assyria").val());
    const swallow = parseInt($("#swallow").val());
    const knights = parseInt($("#knights").val());
    const total = userTotal(color, assyria, swallow, knights);
    $("#username").text(name);
    $("#username-fail").text(name);
    $(".btn-light").hide();

    $(".btn-danger").click(function () {
      $("#language-selector").trigger("reset");
      $("#hidden").hide();
      $("#hidden-fail").hide()
      $(".btn-light").show();
    });

    if ((quest === "web-design")) {
      if (total <= 25) {
        $("#language").text("Ruby");
        $("#hidden").show();
      } else if (total > 26 && total <= 50) {
        $("#language").text("Java");
        $("#hidden").show();
      } else (total > 51 && total <= 75)
        $("#language").text("C#");
        $("#hidden").show();
      
    } else if ((quest === "desktop")) {
        if (total <= 25) {
          $("#language").text("C#");
          $("#hidden").show();
        } else if (total > 26 && total <= 50) {
          $("#language").text("Ruby");
          $("#hidden").show();
        } else (total > 51 && total <= 75);
          $("#language").text("Java");
          $("#hidden").show();
        
    } else if ((quest === "mobile")) {
        if (total <= 25) {
          $("#language").text("Java");
          $("#hidden").show();
        } else if (total > 26 && total <= 50) {
          $("#language").text("C#");
          $("#hidden").show();
        } else (total > 51 && total <= 75);
          $("#language").text("Ruby");
          $("#hidden").show();

    } else
      $("#hidden-fail").show();
  });
});






